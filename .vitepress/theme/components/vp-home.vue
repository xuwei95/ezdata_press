<template>
  <f-main>
    <f-text align="center" line-height="70px" bold block size="25px">
      低代码数据处理和任务调度系统。
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
    <f-text block>ezdata是基于python 后端和vue3前端开发的低代码数据处理和任务调度系统。
      支持数据源管理，数据模型管理，数据集成，数据查询API接口封装，数据可视化大屏，低代码自定义数据处理任务模版，单任务及dag任务工作流调度等功能。</f-text>

    <f-divider margin="40px" color="#eef" />

    <f-text bold block>特性</f-text>
    <f-text>1.多数据源管理，各数据源抽象为统一数据模型，支持创建，字段管理，数据集成，自定义查询api等各种功能</f-text>
    <f-text>2.支持分布式任务调度，横向拓展多worker并行执行任务</f-text>
    <f-text>3.支持自定义任务模版，使用动态代码及内置表单引擎快速实现任务需求及调度运行</f-text>
    <f-text>4.前端基于jeecg开源低代码平台二次开发，功能及组件通用</f-text>
  </f-main>
</template>

<script lang="ts" setup>
// code……
</script>

<style scoped>
.f-main {
  max-width: 620px;
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
