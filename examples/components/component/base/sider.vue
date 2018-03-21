<template>
    <div class="other">
        <div class="title1">
            侧栏菜单
        </div>
        <div class="mItem">
            <div class="title2">
                使用：
            </div>
            <div class="wrap">
                <Sider :sider="sider"></Sider>
            </div>    
            <div class="wrap">
                <div class="q-title">说明：</div>
               <div>
                    固定菜单，在界面侧边
                    <br/>
                    通过设置sider的相关配置，设置显示样式，不设置为默认样式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.html" lang="html"></DCode>
                <div class="q-title">API：</div>
                <DCode :code="code.js" lang="js"></DCode>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/base/sider'
export default {
  data () {
    return {
      code: Code,
      sider: {
        list: [
          {
            name: '一级菜单1',
            href: '/menu1',
            icon: 'menu1'
          },
          {
            name: '一级菜单2',
            icon: 'menu2',
            module: 'menu2',
            slide: true,
            list: [
              {
                name: '二级菜单1',
                href: '/menu2_1',
                module: 'menu2'
              },
              {
                name: '二级菜单2',
                href: '/menu2_2',
                module: 'menu2'
              }
            ]
          },
          {
            name: '一级菜单3',
            module: 'menu3',
            icon: 'menu3',
            slide: false,
            list: [
              {
                name: '二级菜单1',
                href: '/menu3_1',
                module: 'menu3'
              },
              {
                name: '二级菜单2',
                href: '/menu3_2',
                module: 'menu3'
              },
              {
                name: '二级菜单3',
                href: '/menu3_2',
                module: 'menu3'
              }
            ]
          }
        ],
        cur: {
          module: 'menu2',
          href: '/menu2_2'
        },
        slideIcon: {
          up: 'slideUp',
          down: 'slideDown'
        }
      }
    }
  },
  methods: {
  },
  mounted () {}
}
</script>
<style lang="sass" scoped>
aside{
  margin-top: 10px;
}
</style>
