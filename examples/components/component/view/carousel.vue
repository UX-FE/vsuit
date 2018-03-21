<template>
    <div class="other">
        <div class="title1">
            Carousel 走马灯
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Row :gutter="16">
                    <Col span="12">
                        <div>
                            <div>hover指示器</div>
                            <div style="height:300px">
                                <Carousel v-model="carousel1" trigger="hover">
                                    <CarouselItem v-for="n in 4" :key="n">
                                        <div class="demo-carou">{{n}}</div>
                                    </CarouselItem>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span="12">
                        <div>
                            <div>click指示器</div>
                            <div style="height:300px">
                                <Carousel v-model="carousel1" trigger="click">
                                    <CarouselItem v-for="n in 4" :key="n">
                                        <div class="demo-carou">{{n}}</div>
                                    </CarouselItem>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                </Row>
                {{carousel1}}
                <div class="q-title">说明：</div>
                <div>
                    简单的走马灯，可以绑定初始值，下标从0开始，设置trigger属性设置触发指示器方式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.trigger" lang="html"></DCode>
            </div>
            <div class="title2">
                自动播放：
            </div>
            <div class="wrap">
                {{carousel1}}
                <div style="height:300px">
                    <Carousel v-model="carousel1" autoplay>
                        <CarouselItem v-for="n in 4" :key="n">
                            <div class="demo-carou">{{n}}</div>
                        </CarouselItem>
                    </Carousel>
                </div>
                <div style="height:300px;margin-top:20px;">
                    <Carousel v-model="carousel1" autoplay :autoplay-speed=1000>
                        <CarouselItem v-for="n in 4" :key="n">
                            <div class="demo-carou">{{n}}</div>
                        </CarouselItem>
                    </Carousel>
                </div>
                <div class="q-title">说明：</div>
                <div>
                    设置autoplay属性可以自动循环播放,设置autoplay-speed属性可以改变播放速度
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.autoplay" lang="html"></DCode>
            </div>
            <div class="title2">
                箭头显示：
            </div>
            <div class="wrap">
                <Row :gutter="16">
                    <Col span="8">
                        <div>
                            <div>hover</div>
                            <div style="height:300px">
                                <Carousel v-model="carousel1" arrow="hover" autoplay>
                                    <CarouselItem v-for="n in 4" :key="n">
                                        <div class="demo-carou">{{n}}</div>
                                    </CarouselItem>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span="8">
                        <div>
                            <div>always</div>
                            <div style="height:300px">
                                <Carousel v-model="carousel1" arrow="always" autoplay>
                                    <CarouselItem v-for="n in 4" :key="n">
                                        <div class="demo-carou">{{n}}</div>
                                    </CarouselItem>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span="8">
                        <div>
                            <div>never</div>
                            <div style="height:300px">
                                <Carousel v-model="carousel1" arrow="never" autoplay>
                                    <CarouselItem v-for="n in 4" :key="n">
                                        <div class="demo-carou">{{n}}</div>
                                    </CarouselItem>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div class="q-title">说明：</div>
                <div>
                    设置arrow属性定义箭头显示方式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.arrow" lang="html"></DCode>
            </div>
            <div class="title2">
                指示器位置：
            </div>
            <div class="wrap">
                <Row :gutter="16">
                    <Col span="8">
                        <div>
                            <div>inside</div>
                            <div style="height:300px">
                                <Carousel v-model="carousel1" dots="inside" autoplay>
                                    <CarouselItem v-for="n in 4" :key="n">
                                        <div class="demo-carou">{{n}}</div>
                                    </CarouselItem>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span="8">
                        <div>
                            <div>outside</div>
                            <div style="height:300px">
                                <Carousel v-model="carousel1" dots="outside" autoplay>
                                    <CarouselItem v-for="n in 4" :key="n">
                                        <div class="demo-carou">{{n}}</div>
                                    </CarouselItem>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span="8">
                        <div>
                            <div>none</div>
                            <div style="height:300px">
                                <Carousel v-model="carousel1" dots="none" autoplay>
                                    <CarouselItem v-for="n in 4" :key="n">
                                        <div class="demo-carou">{{n}}</div>
                                    </CarouselItem>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div class="q-title">说明：</div>
                <div>
                    设置dots属性定义指示器位置
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.dots" lang="html"></DCode>
            </div>
            <div class="title2">
                类型：
            </div>
            <div class="wrap">
                <div style="height:300px">
                    <Carousel v-model="carousel1" type="card" dots="outside">
                        <CarouselItem v-for="n in 4" :key="n">
                            <div class="demo-carou">{{n}}</div>
                        </CarouselItem>
                    </Carousel>
                </div>
                <div class="q-title">说明：</div>
                <div>
                    设置type为card，走马灯为卡片类型
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Carousel【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Carousel【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/view/carousel'
export default {
  data() {
    return {
        code: Code,
        carousel1:0,
        api:{
            thead:[
                {
                    column:'prop',
                    name:'属性',
                },
                {
                    column:'description',
                    name:'说明',
                },
                {
                    column:'type',
                    name:'属性',
                },
                {
                    column:'option',
                    name:'可选值',
                },
                {
                    column:'default',
                    name:'默认值',
                },
            ],
            data:[
                {
                    prop:'type',
                    description:'类型',
                    type:'String',
                    option:'card',
                    default:'-'
                },
                {
                    prop:'arrow',
                    description:'箭头显示',
                    type:'String',
                    option:'hover/always/never',
                    default:'hover'
                },
                {
                    prop:'autoplay',
                    description:'自动播放',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'autoplaySpeed',
                    description:'自动播放速度',
                    type:'Number',
                    option:'-',
                    default:'2000'
                },
                {
                    prop:'dots',
                    description:'指示器位置',
                    type:'String',
                    option:'inside/outsize/none',
                    default:'inside'
                },
                {
                    prop:'trigger',
                    description:'指示器触发',
                    type:'String',
                    option:'click/hover',
                    default:'click'
                }
            ]
        },
        event:{
            thead:[
                {
                    column:'name',
                    name:'事件名称',
                },
                {
                    column:'description',
                    name:'说明',
                },
                {
                    column:'props',
                    name:'参数',
                }
            ],
            data:[
                {
                    name:'on-change',
                    description:'切换幻灯片时触发',
                    props:'旧的幻灯片id,新的幻灯片id'
                }
            ]
        },
    };
  },
  methods: {
  },
  mounted() {}
};
</script>
<style lang="sass">
.demo-carou{
    height:300px;
    line-height:300px;
    text-align:center;
    color:#fff;
    font-size:24px;
}
.vsu-carousel-item:nth-child(2n) {
    div.demo-carou{
     background: #99a9bf;

    }
  }
.vsu-carousel-item:nth-child(2n+1) {
    div.demo-carou{
     background: #d3dce6;

    }
  }
</style>
