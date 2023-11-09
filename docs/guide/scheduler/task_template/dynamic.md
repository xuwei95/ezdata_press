动态自定义 任务
----

![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/dynamic_task.png?raw=true "在这里输入图片标题")

- 表单类型：可使用前端内置vue组件或使用动态配置生成任务配置表单(参考文档 https://help.jeecg.com/component/basicForm.html )
- 模版配置： 若使用动态配置表单，使用表单引擎配置json动态渲染对应任务表单
- 执行器类型：可使用内置任务执行器执行对应任务，也可在线编写执行器代码，实现对应任务处理逻辑。
- 执行器代码：执行器python代码run函数逻辑，读取任务参数params，实现对应执行逻辑，可使用logger参数打印相应日志调试处理逻辑。
  ![输入图片说明](https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/dynamic_task_edit.png?raw=true "在这里输入图片标题")
