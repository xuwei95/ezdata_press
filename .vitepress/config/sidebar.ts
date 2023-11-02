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
      text: '功能介绍',
      collapsible: true,
      link: '/docs/guide/datasource',
      items: [
        { text: '数据源管理', link: '/docs/guide/datasource' },
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
      text: 'API',
      collapsible: true,
      link: '/docs/api/sys',
      items: [
        { text: 'test', link: '/docs/api/sys' },
      ]
    }
  ]
}
