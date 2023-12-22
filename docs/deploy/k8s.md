kubernetes部署
-----------------------------------

## 使用 kubernetes helm 启动服务

### 1. 前置条件
- Helm 3.1.0+
- Kubernetes 1.20+

### 2. 启动服务
- 下载源码，修改helm chart配置文件
```
git clone https://github.com/xuwei95/ezdata.git
cd ezdata/deploy/kubernetes
vim ezdata/values.yaml
```
- 配置helm chart

以下values.yaml配置示例部署一个前端web服务，3个webapi服务，1个任务调度服务，3个任务worker节点，以及所需的所有中间件。

若使用外部中间件，可将对应中间件 enabled设为false，并配置对应external服务配置，系统会自动使用外部中间件配置并不安装对应中间件。
```
replicaCount: 1
namespace: ezdata-helm
image:
  repository: ezdata123/ezdata
  tag: 1.0.1
  pullPolicy: IfNotPresent
  web: ezdata123/ezdata-web

web:
  replicas: "1"
  env:
   web_api: 10.233.31.1:8001
   scheduler_api: 10.233.31.2:8002
   VITE_GLOB_API_URL: "http://101.35.23.52/api"
   VITE_GLOB_DOMAIN_URL: "http://101.35.23.52"
  service:
    type: NodePort
    clusterIP: 10.233.31.0
    nodePort: 80

api:
  replicas: "3"
  env:
    read_env: "1"
    ENV: prod.env
    run_upgrade: "1"
    run_web: "1"
    web_worker: "4"
    run_scheduler: "0"
    run_flower: "0"
    run_worker: "0"
    worker_concurrency: "4"
    worker_queue: default
    worker_process: prefork
  service:
    type: ClusterIP
    clusterIP: 10.233.31.1

scheduler:
  replicas: "1"
  env:
    read_env: "1"
    ENV: prod.env
    run_upgrade: "1"
    run_web: "0"
    web_worker: "4"
    run_scheduler: "1"
    run_flower: "1"
    run_worker: "0"
    worker_concurrency: "4"
    worker_queue: default
    worker_process: prefork
  service:
    type: ClusterIP
    clusterIP: 10.233.31.2

worker:
  replicas: "3"
  env:
    read_env: "1"
    ENV: prod.env
    run_upgrade: "1"
    run_web: "0"
    web_worker: "4"
    run_scheduler: "0"
    run_flower: "0"
    run_worker: "1"
    worker_concurrency: "4"
    worker_queue: default
    worker_process: prefork


mysql:
  enabled: true
  auth:
    username: "root"
    password: "ezdata123"
    rootPassword: "ezdata123"
    database: "ezdata"
  primary:
    service:
      clusterIP: 10.233.31.3 # 服务ip
    persistence:
      enabled: false
      size: "20Gi"
      storageClass: "-"

externalDatabase:
  enabled: false
  type: "mysql"
  host: "127.0.0.1"
  port: "3306"
  username: "root"
  password: "ezdata123"
  database: "ezdata"

redis:
  enabled: true
  auth:
    enabled: true
    password: "ezdata123"
    db: 1
  # 修改集群架构 architecture，默认是主从（replication，3个节点），可以修改为 standalone 单机模式
  architecture: standalone
  ports:
    redis: 6379
  master:
    service:
      clusterIP: 10.233.31.4
  # 修改 storageClass 为 managed-nfs-storage
  storageClass: "managed-nfs-storage"

externalRedis:
  enabled: false
  host: "127.0.0.1"
  port: 6379
  username: ""
  password: "ezdata123"
  db: 1

minio:
  enabled: true
  auth:
    rootUser: "minio"
    rootPassword: "ezdata123"
  persistence:
    enabled: true
    size: 10Gi
    storageClassName:
    annotations: {}
  defaultBuckets: "ezdata"
  service:
    clusterIP: 10.233.31.5 # 服务ip

externalMinio:
  enabled: false
  host: "127.0.0.1"
  port: 9000
  username: "minio"
  password: "ezdata123"
  bucket: "ezdata"

elasticsearch:
  enabled: true
  replicas: 1
  service:
    clusterIP: 10.233.31.6


externalElasticSearch:
  enabled: false
  hosts: "127.0.0.1:9200"
  username: "elastic"
  password: "ezdata123"

llm:
  enabled: true
  type: openai
#  url: https://api.openai.com/v1
  url: https://api.openai-proxy.com/v1
  api_key: sk-XXX
  model: gpt-3.5-turbo
  
``` 
- 更新依赖，并运行helm chart启动服务
``` 
helm dependency update ./ezdata
helm install ezdata-helm ./ezdata --debug -n ezdata-helm
``` 
- 卸载系统
``` 
helm uninstall ezdata-helm ./ezdata --debug -n ezdata-helm
``` 
### 3. 访问系统
浏览器访问任意k8s节点ip地址，即可进入系统  默认的用户和密码分别为 admin 和 qwer1234
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/login.png?raw=true "在这里输入图片标题")



