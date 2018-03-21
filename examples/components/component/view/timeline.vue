<template>
    <div class="other">
        <div class="title1">
            TimeLine 时间轴
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <br/>
                <TimeLine>
                    <TimeLineItem v-for="(item,i) in timeline1" :key="i">
                        <div>{{item}}</div>
                    </TimeLineItem>
                </TimeLine>
                <br/>
                <TimeLine>
                    <TimeLineItem v-for="(item,i) in timeline1" :key="i" :active="i===0">
                        <div>{{item}}</div>
                    </TimeLineItem>
                </TimeLine>
                <div class="q-title">说明：</div>
                <div>
                    最简单的时间轴,需要突出当前处于的时间点时，增加active属性
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                最后时间点：
            </div>
            <div class="wrap">
                <br/>
                <TimeLine more>
                    <TimeLineItem v-for="(item,i) in timeline2" :key="i">
                        <div>{{item}}</div>
                    </TimeLineItem>
                </TimeLine>
                <div class="q-title">说明：</div>
                <div>
                    设置more属性，设置最后一个节点
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.last" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义内容：
            </div>
            <div class="wrap demo-year-left">
                <br/>
                <TimeLine>
                    <TimeLineItem v-for="(item,i) in timeline3" :key="i">
                        <div class="time">
                            <span class="year">{{item.year}}</span>
                            <span class="day">{{item.day}}</span>
                            <span class="version">{{item.version}}</span>
                            <a v-if="i===0" class="download" :href="item.download">下载</a>
                        </div>
                        <div class="content">
                            <p v-for="(itm,index) in item.content" :key="index">{{index+1}}.{{itm}}</p>
                        </div>
                    </TimeLineItem>
                </TimeLine>
                <div class="q-title">说明：</div>
                <div>
                    自定义内容，调整样式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义节点图标：
            </div>
            <div class="wrap custom">
                <br/>
                <TimeLine>
                    <TimeLineItem v-for="(item,i) in timeline1" :key="i">
                        <Icon type="heart" slot="custom"></Icon>
                        <div>{{item}}</div>
                    </TimeLineItem>
                </TimeLine>
                <br/>
                <TimeLine>
                    <TimeLineItem v-for="(item,i) in timeline3" :key="i">
                        <div slot="custom">{{item.version}}</div>
                        <div class="content">
                            <p v-for="(itm,index) in item.content" :key="index">{{index+1}}.{{itm}}</p>
                        </div>
                    </TimeLineItem>
                </TimeLine>
                <div class="q-title">说明：</div>
                <div>
                    接受一个 slot 来自定义轴点的内容，比如一个图标。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.icon" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">TimeLine【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">TimeLineItem【props】：</div>
                <Table type="bordered" :thead="itemapi.thead" :data="itemapi.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/view/timeline';
export default {
  data() {
    return {
        code: Code,
        timeline1:[
            '发布1.0版本',
            '发布2.0版本',
            '发布3.0版本',
            '发布4.0版本'
        ],
        timeline2:[
            '发布1.0版本',
            '发布2.0版本',
            '发布3.0版本',
            '未完待续'
        ],
        timeline3:[
            {
                year:'2017',
                day:'11.22',
                version:'v4.0',
                download:'#',
                content:[
                    '发布4.0版本',
                    '优化细节'
                ]
            },
            {
                year:'2017',
                day:'10.22',
                version:'v3.0',
                content:[
                    '发布3.0版本',
                    '优化细节'
                ]
            },
            {
                year:'2017',
                day:'09.22',
                version:'v2.0',
                content:[
                    '发布2.0版本',
                    '优化细节'
                ]
            },
            {
                year:'2017',
                day:'08.22',
                version:'v1.0',
                content:[
                    '发布1.0版本',
                    '优化细节'
                ]
            }
        ],
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
                    prop:'more',
                    description:'最后一个时间点',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
            ]
        },
        itemapi:{
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
                    prop:'color',
                    description:'节点颜色',
                    type:'String',
                    option:'blue，green，red',
                    default:'blue'
                },
                {
                    prop:'active',
                    description:'当前时间点',
                    type:'Boolean',
                    option:'-',
                    default:'false'
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
.demo-year-left{
    .vsu-timeline{
        .vsu-timeline-item{
            padding: 0 0 12px 46px;
            .vsu-timeline-item-line{
                left: 52px;
            }
            .vsu-timeline-item-content{
                .time{
                    .year{
                        position: absolute;
                        left: -38px;
                    }
                    .day{

                    }
                    .version{
                        margin-left: 40px;
                        width: 60px;
                        height: 17px;
                        border-radius: 15px;
                        background: #aaa;
                        color: #fff;
                        vertical-align: middle;
                        margin: -3px 40px 0;
                        text-align: center;
                        display: inline-block;
                    }
                    .download{
                        margin-left: 20px;
                        width: 81px;
                        height: 17px;
                        display: inline-block;
                        border-radius: 20px;
                        text-align: center;
                        line-height: 18px;
                        cursor: pointer;
                        background-color: #72b22d;
                        color: #fff;
                        vertical-align: top;
                    }
                }
                .content{
                    padding: 5px;
                }
            }
        }
    }
}
.custom{
    padding-left: 20px;
    .content{
        padding: 0 5px 10px 20px;
    }
}
</style>
