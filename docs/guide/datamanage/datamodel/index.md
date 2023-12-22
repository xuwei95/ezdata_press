数据模型管理
----
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/datamodel.png?raw=true "在这里输入图片标题")
ezdata会将各数据源类型(文件，api，数据库表，数据库查询sql，binlog数据流，kafka数据流，nosql文档记录等)抽象为统一数据模型    

![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/datamodel_edit.png?raw=true "在这里输入图片标题")
在统一数据模型上支持创建，删除，字段管理，自定义查询取数，封装数据查询api接口等各种功能，不同数据模型具有不同的功能类型，具体支持数据模型和对应功能如下：  

| 数据源类型 | 数据模型类型 | 支持功能
|:-----:|:-----:|:-----:|
| akshare | akshare财经数据接口 | 查询，数据抽取
| ccxt | ccxt加密货币数据接口 | 查询，数据抽取
| http | json api | 查询，数据抽取  
| http | html | 查询，数据抽取
| 文件 | 表格文件(csv/excel) |  查询，数据抽取
| 文件 | json文件 |  查询，数据抽取
| 文件 | h5文件 |  查询，数据抽取
| minio对象存储 | 表格文件(csv/excel) |  查询，数据抽取，数据装载
| minio对象存储 | json文件 | 查询，数据抽取，数据装载 
| minio对象存储 | h5文件 | 查询，数据抽取，数据装载
| redis | 字符串 | 查询，数据抽取，数据装载 
| redis | 列表 | 查询，数据抽取，数据装载
| redis | 队列 | 查询，数据抽取，数据装载
| redis | 哈希 | 查询，数据抽取，数据装载
| mysql | 数据表 | 查询，创建，操作字段，删除，数据抽取，数据装载
| mysql | sql | 查询，数据抽取
| mysql | binlog数据流 | 查询，数据抽取
| pgsql | 数据表 | 查询，创建，操作字段，删除，数据抽取，数据装载
| pgsql | sql | 查询，数据抽取
| sqlserver | 数据表 | 查询，创建，操作字段，删除，数据抽取，数据装载
| sqlserver | sql | 查询，数据抽取
| oracle | 数据表 | 查询，创建，操作字段，删除，数据抽取，数据装载
| oracle | sql | 查询，数据抽取
| clickhouse | 数据表 | 查询，创建，操作字段，删除，数据抽取，数据装载
| clickhouse | sql | 查询，数据抽取
| hive | 数据表 | 查询，创建，操作字段，删除，数据抽取，数据装载
| hive | sql | 查询，数据抽取
| elasticsearch | elasticsearch索引 | 查询，创建，操作字段，删除，数据抽取，数据装载
| mongodb | mongodb集合 | 查询，创建，操作字段，删除，数据抽取，数据装载
| neo4j | neo4j graph | 查询，创建，操作字段，删除，数据抽取，数据装载
| neo4j | sql | 查询，数据抽取，自定义查询
| influxdb | influxdb表 | 查询，数据抽取，数据装载
| influxdb | sql | 查询，数据抽取
| prometheus | promql | 查询，数据抽取 
| kafka | kafka topic | 查询，创建，数据抽取，数据装载

