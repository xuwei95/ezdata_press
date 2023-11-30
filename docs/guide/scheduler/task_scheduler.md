普通任务调度
----
![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/task_scheduler.png?raw=true "在这里输入图片标题")
普通任务管理，对单个任务模版配置调度运行策略。

![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/cron_task.png?raw=true "在这里输入图片标题")

- 名称：输入任务的名称
- 任务模版：选择 任务模版
- 状态：选择 任务启用禁用
- 运行队列：选择 任务运行队列
- 优先级：选择任务优先级，越大优先级的任务将优先执行
- 重试次数：任务失败时重试次数
- 重试间隔：任务失败时隔多久重试，单位秒
- 触发方式：单次运行或定时运行
- 触发始末时间：若定时运行，可配置在一段时间区间内运行，否则不触发
- 定时设置：若定时运行，定时的cron表达式，可以用cron组件配置，直接预览后几次触发时间
- 描述：输入描述
- 失败告警策略：若任务重试多次后仍失败，可绑定告警策略实现任务失败告警及转发通知

![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/task_history.png?raw=true "在这里输入图片标题")
在任务操作栏更多操作中，可查看任务执行历史和对应执行的任务日志。
