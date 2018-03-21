/**
 * Created by huangl on 18/1/9.
 */
import Vue from 'vue'
import router from './router'
import App from './app.vue'
import vsuit from '../src/index'
// import locale from '../src/locale/lang/en-US';
import locale from '../src/locale/lang/zh-CN'
import 'highlight.js/styles/github.css'// 代码块主题样式
Vue.use(vsuit, {
  locale
})

// 开启debug模式
Vue.config.debug = true

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
