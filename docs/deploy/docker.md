docker 部署
-----------------------------------

## 使用 docker-compose 部署应用

### 1. 前置条件
- 需要安装 Docker，以及 Docker Compose。
- docker 安装
```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
- docker-compose 安装
```
curl -SL https://github.com/docker/compose/releases/download/v2.12.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
```

### 2. 启动服务
- 设置env配置文件，配置中间件信息

以下示例为中间件全为本地部署，正式部署需配置为相应中间件链接配置
```
# 数据库相关配置
DB_TYPE=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PWD=ezdata123
DB_NAME=ezdata
DB_CHARSET=utf8mb4
POOL_RECYCLE=600
ECHO_SQL=0
# worker相关配置
WORKER_TYPE=celery
# redis 相关配置
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PWD=ezdata123
REDIS_DB=0
# celery 配置
CELERY_DEFAULT_QUEUE=default
FLOWER_API_URL=http://127.0.0.1:5555
SCHEDULER_API_URL=http://127.0.0.1:8002/api/scheduler
# 对象存储相关配置
OSS_TYPE=minio
OSS_HOST=127.0.0.1
OSS_PUBLIC_HOST=127.0.0.1
OSS_PORT=9000
OSS_KEY=minio
OSS_SECRET=ezdata123
OSS_BUCKET=ezdata
# 日志相关配置
LOGGER_TYPE=es
LOG_LEVEL=INFO
SYS_LOG_INDEX=sys_logs
TASK_LOG_INDEX=task_logs
INTERFACE_LOG_INDEX=interface_logs
# 若日志模式为es  elasticsearch相关配置
ES_HOSTS=127.0.0.1:9200
ES_USER=
ES_PWD=
# web相关配置
# 是否启用token刷新机制
USE_TOKEN_REFRESH=0
# 用户token过期时间
TOKEN_EXP_TIME=86400
# 服务私钥
SECRET_KEY=erwqefdscweer)qi
# xorbits集群地址 local为本地
XORBITS_CLUSTER=local

# llm 相关配置
LLM_TYPE=openai
# LLM_URL=https://api.openai.com/v1
LLM_URL=https://api.openai-proxy.com/v1
LLM_API_KEY=sk-XXX  # 修改为自己的openai key
LLM_MODEL=gpt-3.5-turbo
```
- 部署ezdata服务节点，使用环境变量控制启用哪些服务

以下示例单容器启用所有服务(webapi, worker, scheduler, flower任务监控)
```
version: "3"  # docker-compose版本
services:
  server: # docker-compose编排名称，一般同微服务名称，注意不要与其>他服务重名
    image: "ezdata123/ezdata:1.0.1"  # docker镜像名及版本
    container_name: ezdata  # 服务容器
    volumes: # 挂载目录
      - ./deploy.env:/opt/ezdata/deploy.env
    environment: # 配置环境变量
      - TZ=Asia/Shanghai  # 设置时区
      - read_env=1 # 是否读取配置文件
      - ENV=deploy.env # 配置文件
      - run_upgrade=1 # 是否启动时更新依赖
      - run_web=1 # 是否运行web api
      - web_worker=4 # web api 并发数
      - run_scheduler=1 # 是否运行scheduler api
      - run_flower=1 # 是否运行celery flower监控
      - run_worker=1 # 是否运行celery worker
      - worker_concurrency=4 # celery worker 并发数
      - worker_queue=default # celery worker 订阅队列
      - worker_process=prefork # celery worker 运行模式
    working_dir: /opt/ezdata
    ports:
      - 8001:8001 # web服务端口
      - 8002:8002 # 任务调度端口
      - 5555:5555 # flower监控端口，不开启可注释掉
      - 9001:9001 # 守护进程web端口，不开启可注释掉
    command: /bin/bash -c "bash init.sh"
    privileged: true
    restart: always
    stdin_open: true
    tty: true
```
- docker-compose部署示例

以下示例配置部署一个master容器(webapi, worker)和一个任务调度容器(scheduler, flower任务监控)以及相应所需中间件(mysql, redis, minio, elasticsearch)
```
version: "3"  # docker-compose版本
services:
  # nginx
  web:
    image: "ezdata123/ezdata-web:1.0.1"     # 镜像名称
    container_name: ezdata_web     # 容器名字
    restart: always     # 开机自动重启
    ports:
      - "80:80"
    volumes: # 目录映射（宿主机:容器内）
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/_app.config.js:/usr/share/nginx/html/dist/_app.config.js
    command: ["nginx", "-g", "daemon off;"]
    networks:
      ezdata:
        ipv4_address: 10.233.31.0
  master:
    image: "ezdata123/ezdata:1.0.1"  # docker镜像名及版本
    container_name: ezdata_master  # 服务容器
    volumes: # 挂载目录
      - ./deploy.env:/opt/ezdata/deploy.env
    environment: # 配置环境变量
      - TZ=Asia/Shanghai  # 设置时区
      - read_env=1 # 是否读取配置文件
      - ENV=deploy.env # 配置文件
      - run_upgrade=1 # 是否自动升级依赖
      - run_web=1 # 是否运行web api
      - web_worker=4 # web api 并发数
      - run_scheduler=0 # 是否运行scheduler api
      - run_flower=0 # 是否运行celery flower监控
      - run_worker=1 # 是否运行celery worker
      - worker_concurrency=4 # celery worker 并发数
      - worker_queue=default # celery worker 订阅队列
      - worker_process=prefork # celery worker 运行模式
    working_dir: /opt/ezdata
    ports:
      - 8001:8001 # web服务端口
    command: /bin/bash -c "bash init.sh"
    privileged: true
    restart: always
    stdin_open: true
    tty: true
    networks:
      ezdata:
        ipv4_address: 10.233.31.1
    depends_on:
      - mysql
      - redis
      - minio
      - elasticsearch
  scheduler: # docker-compose编排名称，一般同微服务名称，注意不要与其>他服务重名
    image: "ezdata123/ezdata:1.0.1"  # docker镜像名及版本
    container_name: ezdata_scheduler  # 服务容器
    volumes: # 挂载目录
      - ./deploy.env:/opt/ezdata/deploy.env
    environment: # 配置环境变量
      - TZ=Asia/Shanghai  # 设置时区
      - read_env=1 # 是否读取配置文件
      - ENV=deploy.env # 配置文件
      - run_upgrade=1 # 是否自动升级依赖
      - run_web=0 # 是否运行web api
      - web_worker=4 # web api 并发数
      - run_scheduler=1 # 是否运行scheduler api
      - run_flower=1 # 是否运行celery flower监控
      - run_worker=0 # 是否运行celery worker
      - worker_concurrency=4 # celery worker 并发数
      - worker_queue=default # celery worker 订阅队列
      - worker_process=prefork # celery worker 运行模式
    working_dir: /opt/ezdata
    ports:
      - 8002:8002 # 任务调度端口
      - 5555:5555 # flower监控端口，不开启可注释掉
    command: /bin/bash -c "bash init.sh"
    privileged: true
    restart: always
    stdin_open: true
    tty: true
    networks:
      ezdata:
        ipv4_address: 10.233.31.2
    depends_on:
      - mysql
      - redis
      - minio
      - elasticsearch
  # 数据库
  mysql:
    image: amd64/mysql:8.0.22
    container_name: mysql
    restart: always
    command: [
        '--default-authentication-plugin=mysql_native_password',
        '--character-set-server=utf8mb4',
        '--collation-server=utf8mb4_unicode_ci',
        '--log-bin=mysql-bin'
    ]
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: ezdata123
    volumes:
      - ./mysql:/var/lib/mysql
    networks:
      ezdata:
        ipv4_address: 10.233.31.3
  redis:
    image: redis:6.0.9
    container_name: redis
    restart: always
    ports:
      - "6379:6379"
    command:
      # 设置 redis 密码
      redis-server --requirepass ezdata123 --appendonly yes
    networks:
      ezdata:
        ipv4_address: 10.233.31.4
  # 对象存储
  minio:
    image: minio/minio
    volumes:
      - ./minio:/data # 持久化地址
    ports:
      - "9000:9000"
      - "19001:19001"
    container_name: minio
    restart: always
    environment:
      MINIO_ROOT_USER: minio # 账号
      MINIO_ROOT_PASSWORD: ezdata123 #密码
      MINIO_PROMETHEUS_AUTH_TYPE: public
    command: server /data --console-address :19001
    networks:
      ezdata:
        ipv4_address: 10.233.31.5
  elasticsearch:
    image: elasticsearch:7.17.2
    container_name: elasticsearch
    restart: always
    environment:
      - discovery.type=single-node
      - http.port=9200
      - http.cors.enabled=true
      - http.cors.allow-origin=*
      - http.cors.allow-headers=X-Requested-With,X-Auth-Token,Content-Type,Content-Length,Authorization
      - http.cors.allow-credentials=false
      - bootstrap.memory_lock=true
      - ES_JAVA_OPTS=-Xms512m -Xmx512m
    ports:
      - '9200:9200'
      - '9300:9300'
    networks:
      ezdata:
        ipv4_address: 10.233.31.6

networks:
  ezdata:
    driver: bridge
    ipam:
      config:
        - subnet: 10.233.31.0/16
``` 
- 运行服务
```
docker-compose up -d
``` 

### 3. 访问系统
浏览器访问 http://服务ip  默认的用户和密码分别为 admin 和 qwer1234
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/login.png?raw=true "在这里输入图片标题")



