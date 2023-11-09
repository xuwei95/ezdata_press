数据集成 任务
----

![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/etl.png?raw=true "在这里输入图片标题")

- 数据抽取：选择待抽取数据模型，配置抽取条件从数据模型中抽取数据，可在右侧预览部分抽取出来的数据
- 数据转换：对抽取出来的数据，利用转换算法配置处理流，将其转换为所需目标数据结构，拖拽算法组件到处理流程中，使用内置算法函数或直接编写动态代码转换数据，对每一步流程可在右侧查看处理后数据结构。
- 数据装载：将转换后目标数据按规则写入目标数据模型，可在右侧点击测试将预览数据尝试写入。

数据集成同时支持批处理和流处理，以下流处理样例将任务执行记录表利用mysql binlog流实时同步到elasticsearch索引中。
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/etl_flow.png?raw=true "在这里输入图片标题")


