<template>
  <div class="other">
    <div class="title1">
      滚动条
    </div>
    <div class="mItem">
      <div class="title2">
          使用：
      </div>
      <div class="wrap">
          <div class="demo-scroll-wrap">
            <Scroll>
                <p v-for="n in 10" :key="n">{{n}}.我是滚动条里面的内容</p>
            </Scroll>
          </div>
          <div class="q-title">说明：
             滚动条使用时，父级元素需要确定height属性,默认鼠标悬浮显示滚动条
          </div>
          <div class="q-title">代码示例：</div>
          <DCode :code="code.base" lang="html"></DCode>
      </div>
      <div class="title2">
          滚动条显示：
      </div>
      <div class="wrap">
          <Row :gutter="16">
              <Col span="8">
                <div>
                  <div>一直显示滚动条</div>
                  <div class="demo-scroll-wrap">
                    <Scroll always>
                        <p v-for="n in 10" :key="n">{{n}}.我是滚动条里面的内容</p>
                    </Scroll>
                  </div>
                </div>
              </Col>
              <Col span="8">
                <div>
                  <div>显示横向滚动条</div>
                  <div class="demo-scroll-wrap">
                    <Scroll show-x>
                        <p v-for="n in 10" :key="n">{{n}}.我是滚动条里面的内容</p>
                    </Scroll>
                  </div>
                </div>
              </Col>
              <Col span="8">
                <div>
                  <div>隐藏横向滚动条</div>
                  <div class="demo-scroll-wrap">
                    <Scroll :show-y=false  show-x>
                        <p v-for="n in 10" :key="n">{{n}}.我是滚动条里面的内容</p>
                    </Scroll>
                  </div>
                </div>
              </Col>
          </Row>
          <div class="q-title">代码示例：</div>
          <DCode :code="code.show" lang="html"></DCode>
      </div>
      <div class="title2">
          使用原生：
      </div>
      <div class="wrap">
          <div class="demo-scroll-wrap">
            <Scroll native>
                <p v-for="n in 10" :key="n">{{n}}.我是滚动条里面的内容</p>
            </Scroll>
          </div>
          <div class="q-title">说明：
             设置native使用原生滚动条
          </div>
          <div class="q-title">代码示例：</div>
          <DCode :code="code.native" lang="html"></DCode>
      </div>
    </div>
  </div>
</template>

<script>
  import Code from '../../../code/component/view/scroll'
  export default {
    data () {
      return {
        code: Code,
        scroll: {
          id: 'J_scroll',
          height: '240px',
          scrollY: {
            visable: true,
            color: '#495060',
            speed: 20,
            propagation: true
          },
          scrollX: {
            visable: true,
            color: '#495060'
          }
        }
      }
    },
    methods: {
      // 滚到最顶端
      scrollStart () {
        console.log('scrollStart')
      },
      // 滚到最底端
      scrollEnd () {
        console.log('scrollEnd')
      },
      // 滚到最右端
      scrollRight () {
        console.log('scrollRight')
      },
      // 滚到最左
      scrollLeft () {
        console.log('scrollLeft')
      }
    },
    mounted () {}
  }
</script>
<style lang="scss" scoped>
.demo-scroll-wrap{
    height: 100px;
    font-size:14px;
    border:1px solid #ccc;
}
</style>