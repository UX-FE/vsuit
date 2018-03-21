<template>  
    <div id="J_main" class="vuit-main">
        <div class="name">VSUIT</div>
        <div class="discription">简单易用的VUE组件库</div>
        <div class="operate">
            <router-link to="/component/install"><BaseButton type="primary" class="btn-begin">开始使用</BaseButton></router-link>
            <router-link to="/component/install"><BaseButton type="primary">查看DEMO</BaseButton></router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'v-index',
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    init () {
      this.getData()
    },
    getData () {

    }
  },
  mounted () {

  }
}
</script>
<style lang="scss">
.vuit-main{
    text-align:center;
    padding-top:12%;
    .name{
        color: #fff;
        font-size: 90px;
        font-weight: 700;
        text-shadow: #333 3px 3px 6px;
    }
    .discription{
        color: #fff;
        font-size: 30px;
        font-weight: 100;
        text-shadow: #333 2px 2px 0px;
        margin-top: 20px;
    }
    .operate{
        margin-top:20px;
        a{
            color:#fff;
        }
        .btn-begin{
            margin-right:20px;
        }
        
    }
}
body > .container.unFixedHeader{
    &>.topBar{
        .logo{
            .logo-title{
                color:#fff;
            }
        }
        .vsu-menu-horizontal .vsu-menu-item{
            color:#fff;
            &:hover,&-active{
                color: #4b61d9;
            }
        }
    }
    &> .content > .contentMain{
        padding-left:0;
    }
}
</style>
