<template>
  <f-main>
    <f-text align="center" line-height="70px" bold block size="25px">
      <span class="title">低代码数据处理和任务调度系统</span>
    </f-text>
    <f-text align="center">
      <f-button round type="primary" class="start" href="/docs/hello.html">
        快速开始
      </f-button>
      <f-button round href="https://github.com/xuwei95/ezdata" target="_blank">
        Github
      </f-button>
      <f-button round href="http://110.40.157.36" target="_blank">
        demo演示
      </f-button>
    </f-text>

    <f-divider margin="40px" color="#eef" />

    <f-text bold block>欢迎使用</f-text>
    <f-text block>ezdata是基于python后端和vue3前端开发的低代码数据处理和任务调度系统。</f-text>
    <f-divider margin="40px" color="#eef" />

    <f-text bold block>主要功能</f-text>
    <f-text>1.多数据源管理，支持连接文件，关系型数据库，nosql数据库，时序数据库等多种数据源</f-text>
    <f-text>2.各数据源抽象为统一数据模型，支持创建，删除，字段管理，自定义查询取数，封装数据查询api接口等各种功能</f-text>
    <f-text>3.低代码数据集成，多种内置算法及自定义代码快速实现数据传输管道。</f-text>
    <f-text>4.低代码数据可视化大屏，拖拽设计及快速对接数据api接口</f-text>
    <f-text>5.支持低代码自定义数据处理任务模版，使用动态代码及内置表单引擎快速实现任务需求及调度运行</f-text>
    <f-text>6.单任务及dag任务工作流调度，支持分布式worker执行，任务失败重试，失败告警，任务日志查看等调度系统功能。</f-text>
  </f-main>
</template>

<script lang="ts" setup>
// code……
</script>

<style scoped>
.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0 auto;
}
.f-main {
  max-width: 960px;
  margin: 40px auto;
  box-sizing: border-box;
  padding: 40px;
  padding-bottom: 0;
}

.f-button-default {
  margin-left: 10px;
}

.f-text {
  display: block;
  line-height: 40px;
}
</style>
