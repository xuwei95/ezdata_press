本地运行
-----------------------------------

### 1. 后端启动
- 下载源码
```
git clone https://github.com/xuwei95/ezdata.git
```

- 安装 python环境和依赖
```
cd ezdata
pip install -r requirements.txt -i https://pypi.doubanio.com/simple
```

- 安装中间件，需要mysql，redis，minio，若开启日志系统，需安装elasticsearch，可使用docker安装相应中间件。
- docker 安装
```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
- docker-compose 安装
```
curl -SL https://github.com/docker/compose/releases/download/v2.12.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
```
- 安装中间件依赖
```
cd ezdata/deploy/docker
docker-compose -f middleware-compose.yml up -d
``` 
- 配置系统参数
修改dev.env文件，将其中中间件配置设置为相应中间件链接配置
- 启动服务
```
初始化系统，建库建表及初始化数据
python init_system.py
系统web接口服务
python web_api.py
系统任务调度接口服务
python scheduler_api.py
celery相关
启动worker
- windows
celery -A tasks worker -P eventlet
- linux
celery -A tasks worker
启动flower
celery -A tasks flower
```

### 2. 前端启动
- 下载源码
```
git clone https://github.com/xuwei95/ezdata_frontend.git
```

- 安装 node环境和依赖
```
cd ezdata_frontend
pnpm install
```
- 配置系统参数
  修改.env.development文件，将其中后端接口配置设置为相应后端配置
- 启动服务
```
pnpm dev
```
### 3. 访问系统
浏览器访问前端地址  默认的用户和密码分别为 admin 和 qwer1234
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/login.png?raw=true "在这里输入图片标题")



