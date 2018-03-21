<template>
    <pre>
        <code :class="lang" v-text="code" 
            :style="{
                'max-height': slide?'none':''
            }"
            ref="code"
            ></code>
        <div class="slideBtn" 
            :class="{
                slide: slide
            }"
            v-if="showSlideBtn" 
            @click="slided">
            <span></span>
        </div>
    </pre>
</template>
<script>
    import Utils from '@/utils/utils' // 工具类
    export default {
      name: 'DCode',
      props: ['code', 'lang'],
      data () {
        return {
          slide: false,
          showSlideBtn: true
        }
      },
      components: {
      },
      watch: {
      },
      created () {
      },
      methods: {
        slided () {
          this.slide = !this.slide
          // resize window
          Utils.resizeWindow()
        }
      },
      mounted () {
        this.$nextTick(function () {
          var height = (this.$refs.code&&this.$refs.code.offsetHeight)?this.$refs.code.offsetHeight:0;
          this.showSlideBtn = height === 200
        })
  }
    }
</script>
