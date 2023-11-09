spark 任务
----
spark任务需在运行容器中安装spark环境并配置环境变量SPARK_HOME=spark程序对应目录，否则无法运行
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/spark_task.png?raw=true "在这里输入图片标题")

- 部署模式：spark任务运行模式，可直接在容器中运行，或提交到spark集群中执行
- 语言： spark程序语言，python/java/scala
- 运行模式： 可使用在线编写代码或直接运行对应路径文件
- 代码：若运行模式为代码模式，可直接编辑在线代码运行
