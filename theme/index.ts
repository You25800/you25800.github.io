// https://vitepress.dev/guide/custom-theme
import { h, nextTick, watch } from 'vue'
import Theme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { inBrowser, useRoute } from 'vitepress'
import ElementPlus from 'element-plus'
// lang
import cn from 'element-plus/es/locale/lang/zh-cn'

// styles
import 'element-plus/dist/index.css'
import './style.css'
import VPBadge from "vitepress/dist/client/theme-default/components/VPBadge.vue";
import demo from '../../src/demoblock/demo.vue' // 代码展示
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import demoblock from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component("Badge", VPBadge);
    app.component('demo', demoblock);
    app.use(ElementPlus, { locale: cn, size: 'small' })
    vitepressBackToTop({
      // default
      threshold: 300
    })
  },
  setup() {
    const route = useRoute()
    watch(
      () => route.path,
      () => nextTick(() => {
        if (inBrowser)
          mediumZoom('img:not(.VPImage)', {
            // margin: 50,
            // background: '#BADA55',
            // scrollOffset: 1000,
            // container: '#zoom-container',
            // template: '#zoom-template',
          })
      }),
      { immediate: true },
    )
  }
}
