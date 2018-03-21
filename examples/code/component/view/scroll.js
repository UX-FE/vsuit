let code = {}

code.base = `
    <template>
        <div class="demo-scroll-wrap">
            <Scroll>
                <p v-for="n in 10" :key="n">{{n}}.我是滚动条里面的内容</p>
            </Scroll>
        </div>
    </template>
    <style lang="scss" scoped>
    .demo-scroll-wrap{
        height: 100px;
        font-size:14px;
        border:1px solid #ccc;
    }
    </style>
`

code.show = `
    <template>
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
    </template>
    <style lang="scss" scoped>
    .demo-scroll-wrap{
        height: 100px;
        font-size:14px;
        border:1px solid #ccc;
    }
    </style>
`
code.native = `
    <template>
        <div class="demo-scroll-wrap">
            <Scroll native>
                <p v-for="n in 10" :key="n">{{n}}.我是滚动条里面的内容</p>
            </Scroll>
        </div>
    </template>
    <style lang="scss" scoped>
    .demo-scroll-wrap{
        height: 100px;
        font-size:14px;
        border:1px solid #ccc;
    }
    </style>
`


export default code
