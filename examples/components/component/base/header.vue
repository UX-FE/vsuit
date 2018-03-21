<template>
    <div class="other">
        <div class="title1">
            顶栏
        </div>
        <div class="mItem">
            <div class="title2">
                使用：
            </div>
            <div class="wrap">
                <Header :header="header"></Header>
            </div>    
            <div class="wrap">
                <div class="q-title">说明：</div>
               <div>
                    固定顶栏，在页面顶端
                    <br/>
                    通过设置header的相关配置，设置显示样式，不设置为默认样式
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
import Code from '../../../code/component/base/header'
export default {
  data () {
    return {
      code: Code,
      header: {
        title: '标题',
        avatar: {
          name: '用户名'
        },
        logout: {
          href: '/logout',
          text: '退出'
        }
      }
    }
  },
  methods: {
  },
  mounted () {}
}
</script>
