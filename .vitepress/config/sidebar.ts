/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
export const sidebar = {
  '/docs/': [
    {
      text: '快速上手',
      collapsible: true,
      link: '/docs/introduction',
      items: [
        { text: '简介', link: '/docs/introduction' },
        { text: '快速上手', link: '/docs/start' },
      ]
    },
    {
      text: '开发部署',
      collapsible: true,
      link: '/docs/deploy/local',
      items: [
        { text: '本地运行', link: '/docs/deploy/local' },
        { text: 'docker部署', link: '/docs/deploy/docker' },
        { text: 'kubernetes部署', link: '/docs/deploy/k8s' }
      ]
    },
    {
      text: '功能介绍',
      collapsible: true,
      link: '/docs/guide/dashboard',
      items: [
        {
          text: '应用首页',
          link: '/docs/guide/dashboard'
        },
        {
          text: '数据管理',
          link: '/docs/guide/datamanage/index',
          items: [
            {
              text: '数据源管理',
              link: '/docs/guide/datamanage/datasource/index',
              items: [
                {
                  text: 'akshare公开财经数据接口',
                  link: '/docs/guide/datamanage/datasource/akshare'
                },
                {
                  text: '文件',
                  link: '/docs/guide/datamanage/datasource/file'
                },
                {
                  text: 'minio对象存储',
                  link: '/docs/guide/datamanage/datasource/minio'
                },
                {
                  text: 'http请求',
                  link: '/docs/guide/datamanage/datasource/http'
                },
                {
                  text: 'mysql',
                  link: '/docs/guide/datamanage/datasource/mysql'
                },
                {
                  text: 'clickhouse',
                  link: '/docs/guide/datamanage/datasource/clickhouse'
                },
                {
                  text: 'elasticsearch',
                  link: '/docs/guide/datamanage/datasource/elasticsearch'
                },
                {
                  text: 'redis',
                  link: '/docs/guide/datamanage/datasource/redis'
                },
                {
                  text: 'mongodb',
                  link: '/docs/guide/datamanage/datasource/mongodb'
                },
                {
                  text: 'neo4j',
                  link: '/docs/guide/datamanage/datasource/neo4j'
                },
                {
                  text: 'influxdb',
                  link: '/docs/guide/datamanage/datasource/influxdb'
                },
                {
                  text: 'prometheus',
                  link: '/docs/guide/datamanage/datasource/prometheus'
                },
                {
                  text: 'kafka',
                  link: '/docs/guide/datamanage/datasource/kafka'
                },
              ]
            },
            {
              text: '数据模型管理',
              link: '/docs/guide/datamanage/datamodel/index'
            },
            {
              text: '算法管理',
              link: '/docs/guide/datamanage/algorithm'
            },
            {
              text: '数据查询',
              link: '/docs/guide/datamanage/dataquery'
            },
          ]
        },
        {
          text: '任务调度',
          link: '/docs/guide/scheduler/index',
          items: [
            {
              text: '任务模版管理',
              link: '/docs/guide/scheduler/task_template/index',
              items: [
                {
                  text: '数据集成任务',
                  link: '/docs/guide/scheduler/task_template/etl.md'
                },
                {
                  text: 'python任务',
                  link: '/docs/guide/scheduler/task_template/python.md'
                },
                {
                  text: 'shell任务',
                  link: '/docs/guide/scheduler/task_template/shell.md'
                },
                {
                  text: 'spark任务',
                  link: '/docs/guide/scheduler/task_template/spark.md'
                },
                {
                  text: 'flink任务',
                  link: '/docs/guide/scheduler/task_template/flink.md'
                },
                {
                  text: '动态自定义任务',
                  link: '/docs/guide/scheduler/task_template/dynamic.md'
                },
              ]
            },
            {
              text: '普通任务调度',
              link: '/docs/guide/scheduler/task_scheduler'
            },
            {
              text: '任务工作流调度',
              link: '/docs/guide/scheduler/dag_scheduler'
            },
          ]
        },
        {
          text: '告警管理',
          link: '/docs/guide/alert/index',
          items: [
            {
              text: '告警策略',
              link: '/docs/guide/alert/alert_strategy'
            },
            {
              text: '告警列表',
              link: '/docs/guide/alert/alert_list'
            }
          ]
        },
        {
          text: '数据可视化',
          link: '/docs/guide/visualization/index',
          items: [
            {
              text: '数据大屏管理',
              link: '/docs/guide/visualization/bigscreen'
            }
          ]
        },
        {
          text: '监控运维',
          link: '/docs/guide/ops/index',
          items: [
            {
              text: '日志管理',
              link: '/docs/guide/ops/job_manage'
            },
            {
              text: '定时job管理',
              link: '/docs/guide/ops/job_manage'
            },
            {
              text: 'worker管理',
              link: '/docs/guide/ops/worker_manage'
            },
          ]
        },
        {
          text: '开发工具',
          link: '/docs/guide/devtools/index',
          items: [
            {
              text: '代码生成器',
              link: '/docs/guide/devtools/codegen'
            }
          ]
        },
        {
          text: '系统管理',
          link: '/docs/guide/system/index',
          items: [
            {
              text: '用户管理',
              link: '/docs/guide/system/user'
            },
            {
              text: '角色管理',
              link: '/docs/guide/system/role'
            },
            {
              text: '菜单管理',
              link: '/docs/guide/system/menu'
            },
            {
              text: '部门管理',
              link: '/docs/guide/system/depart'
            },
            {
              text: '我的部门',
              link: '/docs/guide/system/depart_user'
            },
            {
              text: '通知公告',
              link: '/docs/guide/system/notice'
            },
            {
              text: '数据字典',
              link: '/docs/guide/system/dict'
            },
            {
              text: '对象存储',
              link: '/docs/guide/system/oss'
            },
          ]
        },
      ]
    },
    // {
    //   text: 'API',
    //   collapsible: true,
    //   link: '/docs/api/sys',
    //   items: [
    //     { text: 'test', link: '/docs/api/sys' },
    //   ]
    // }
  ]
}
