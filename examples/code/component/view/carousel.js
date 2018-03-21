let code = {}

code.trigger = `
    <template>
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
    </template>
    export default {
      data() {
        return {
            carousel1:0
        };
      },
      methods: {
      },
      mounted() {}
    };
`

code.autoplay = `
    <template>
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
    </template>
    export default {
    data() {
        return {
            carousel1:0
        };
    },
    methods: {
    },
    mounted() {}
    };
`
code.arrow = `
    <template>
        <Row :gutter="16">
            <Col span="8">
                <div>
                    <div>hover指示器</div>
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
                    <div>click指示器</div>
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
                    <div>hover指示器</div>
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
    </template>
    export default {
    data() {
        return {
            carousel1:0
        };
    },
    methods: {
    },
    mounted() {}
    };
`
code.dots = `
    <template>
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
    </template>
    export default {
    data() {
        return {
            carousel1:0
        };
    },
    methods: {
    },
    mounted() {}
    };
`
code.type = `
    <template>
        <div style="height:300px">
            <Carousel v-model="carousel1" type="card" dots="outside">
                <CarouselItem v-for="n in 4" :key="n">
                    <div class="demo-carou">{{n}}</div>
                </CarouselItem>
            </Carousel>
        </div>
    </template>
    export default {
    data() {
        return {
            carousel1:0
        };
    },
    methods: {
    },
    mounted() {}
    };
`

export default code
