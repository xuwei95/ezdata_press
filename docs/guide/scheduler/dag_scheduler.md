dag任务工作流调度
----
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/dag.png?raw=true "在这里输入图片标题")
dag任务工作流管理，对dag任务工作流调度运行。
- 名称：输入任务的名称
- 状态：选择 任务启用禁用
- 优先级：选择任务优先级，越大优先级的任务将优先执行
- 重试次数：任务失败时重试次数
- 重试间隔：任务失败时隔多久重试，单位秒
- 运行方式：单进程模式将按dag拓扑排序后单进程顺序执行工作流任务，分布式模式将会把同级任务发送到不同worker进程中并发执行
- 触发方式：单次运行或定时运行
- 触发始末时间：若定时运行，可配置在一段时间区间内运行，否则不触发
- 定时设置：若定时运行，定时的cron表达式，可以用cron组件配置，直接预览后几次触发时间
- 描述：输入数据源的描述
- 失败告警策略：若任务重试多次后仍失败，可绑定告警策略实现任务失败告警及转发通知  

点击任务配置，进入工作流详情配置
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/dag_detail.png?raw=true "在这里输入图片标题")
在工作流详情页面中，可从左侧任务模版列表中拖拽任务组件到画布中，组成任务依赖关系。  
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/dag_task_edit.png?raw=true "在这里输入图片标题")
双击任务节点，将弹出任务配置表单，对任务模版进行任务参数配置。  
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/dag_run.png?raw=true "在这里输入图片标题")
工作流配置完成后，可点击运行按钮，系统将单次执行工作流以及弹出运行详情弹窗，调试工作流流程。

