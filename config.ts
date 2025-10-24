import { defineConfig } from 'vitepress';
// import demoblock from '../src/demoblock'; // 代码展示
import sidebar from './sidebar'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock' // 先用这个 展示示例
import nav from './nav'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "DevShelf",
  description: "让知识沉淀成生产力",
  lastUpdated: true,
  // base: "/",
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.png' }
    ],
  ],
  themeConfig: {
    outlineTitle: '本页目录',
    outline: [2, 4],
    lastUpdatedText: '最后更新时间',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav.nav as any,

    sidebar: sidebar.sidebar as any,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: '6HOYIO5LN0',
        apiKey: '00590a5994e7db14ccd832c2de2bf817',
        indexName: 'you25800io',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    }
  },
  markdown: {
    // https://vitepress.dev/reference/markdown-config
    // lineNumbers: true, // 是否显示行号
    config(md) {
      // md.use(demoblock)// 代码展示
      md.use(demoblockPlugin)
    },
    theme: {
      light: 'material-theme-lighter',      // 这里选一个浅色
      dark: 'material-theme-palenight'      // 这里设置为 material-theme-palenight
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  }
})
