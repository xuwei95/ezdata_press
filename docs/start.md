快速开始
-----------------------------------

## 使用 docker-compose 启动服务

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
- 下载源码
```
git clone https://github.com/xuwei95/ezdata.git
```
- 运行服务
```
cd ezdata/deploy/docker
docker-compose up -d
``` 

### 3. 访问系统
浏览器访问 http://服务ip  默认的用户和密码分别为 admin 和 qwer1234
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/login.png?raw=true "在这里输入图片标题")



