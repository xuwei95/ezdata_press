import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { PluginTable } from './plugin'
import type MarkdownIt from 'markdown-it'

/**
 * 更多配置项参考：
 *
 * @see app-configs https://vitepress.vuejs.org/config/app-configs.html
 */
export default defineConfig({
  title: 'ezdata',
  description: 'ezdata项目官网',
  lang: 'zh-CN',
  /**
   * 是否显示最后更新时间
   *
   * @see last-updated https://vitepress.vuejs.org/guide/theme-last-updated#last-updated
   */
  lastUpdated: true,
  /**
   * 缓存目录
   *
   * @see cacheDir https://vitepress.vuejs.org/config/app-configs#cachedir
   */
  cacheDir: '../../node_modules',
  /**
   * 主题配置
   *
   * @see theme-config https://vitepress.vuejs.org/guide/migration-from-vitepress-0#theme-config
   */
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/xuwei95/ezdata_press/master/images/logo.png?raw=true',
    /**
     * 最后更新时间的文案显示
     *
     * @see lastUpdatedText https://vitepress.vuejs.org/config/theme-configs#lastupdatedtext
     */
    lastUpdatedText: '最后更新时间',
    /**
     * 配置导航栏图表
     *
     * @see socialLinks https://vitepress.vuejs.org/config/theme-configs#sociallinks
     */
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xuwei95/ezdata'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present'
    },
    algolia: {
      appId: 'IJM2XQUGK8',
      apiKey: '74ef6a23d2e4ee33d4017386dee5f5b1',
      indexName: 'ezdata'
    },
    nav,
    sidebar
  },
  /**
   * 自定义 markdown 解析器
   *
   * @see markdown https://vitepress.vuejs.org/config/app-configs#markdown
   */
  markdown: {
    /**
     * 配置 Markdown-it 实例
     *
     * @param { Object } md markdown 实例
     */
    config: (md: MarkdownIt): void => {
      md.use(PluginTable)
    }
  }
})
