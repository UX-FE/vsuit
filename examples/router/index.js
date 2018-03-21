// 引入依赖包和依赖组件
import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/index/index'
import component from '../components/component/component'
import util from '../components/util/util'
import document from '../components/document/document'

// 引用vue-router
Vue.use(Router)

//  定义路由实例
const router = new Router({
  // 定义history方式，可以让单页面拥有后退和前进的浏览器能力
  mode: 'history',
  // 定义路由规则，具体如下
  routes: [
    // 默认路由：
    {
      path: '/',
      redirect: '/index',
      components: {}
    },
    // 首页（指南）
    {
      path: '/index/:type?',
      name: 'index',
      components: {
        default: index
      },
      meta: {
        module: 'index',
        unFixedHeader: true // 是否不固定顶端导航v-header
      }
    },
    // 组件
    {
      path: '/component/:type?',
      /*
        type: 组件模块，比如：layout\button\input\...
      */
      name: 'component',
      components: {
        default: component
      },
      beforeEnter (to, from, next) {
        if (to.params.type === undefined) {
          next('/component/install')
        }
        next()
      },
      meta: {
        module: 'component'
      }
    },
    // 工具类
    {
      path: '/util/:type?',
      name: 'util',
      components: {
        default: util
      },
      beforeEnter (to, from, next) {
        if (to.params.type === undefined) {
          next('/util/request')
        }
        next()
      },
      meta: {
        module: 'util'
      }
    },
    // 文档
    {
      path: '/document/:type?',
      name: 'document',
      components: {
        default: document
      },
      beforeEnter (to, from, next) {
        if (to.params.type === undefined) {
          next('/document/code')
        }
        next()
      },
      meta: {
        module: 'document'
      }
    }
  ]
})

// 这里是处理权限，即所有路由跳转之前都必须先经过这个hook钩子
// 切换路由前
router.beforeEach((to, from, next) => {
  // 显示全局loading，待页面返回
  // store.commit('setAppLoading',true);
  setTimeout(() => {
    next()
  }, 0)
})
// 导出路由实例
export default router
