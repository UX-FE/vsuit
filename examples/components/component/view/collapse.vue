<template>
    <div class="other">
        <div class="title1">
            Collapse 折叠面板
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Collapse v-model="collapse1.value">
                    <Collapse-item v-for="(item,index) in collapse1.data" :key="index" :name="item.name">
                        <p slot="title">{{item.title}}</p>
                        <div slot="content">
                            <p v-for="(itm,i) in item.content" :key="i">{{itm}}</p>
                        </div>
                    </Collapse-item>
                </Collapse>
                <div class="q-title">说明：</div>
                <div>
                    最简单的折叠面板
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义icon及icon位置：
            </div>
            <div class="wrap">
                <Collapse v-model="collapse2.value" :icon="collapse2.iconType" icon-position="right">
                    <Collapse-item v-for="(item,index) in collapse2.data" :key="index" :name="item.name">
                        <p slot="title">{{item.title}}</p>
                        <div slot="content">
                            <p v-for="(itm,i) in item.content" :key="i">{{itm}}</p>
                        </div>
                    </Collapse-item>
                </Collapse>
                <div class="q-title">说明：</div>
                <div>
                    设置icon自定义icon类型，设置icon-position设置icon位置，默认位置为left
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                默认全部打开：
            </div>
            <div class="wrap">
                <Collapse v-model="collapse1.value" default-status="allOpen">
                    <Collapse-item v-for="(item,index) in collapse1.data" :key="index" :name="item.name">
                        <p slot="title">{{item.title}}</p>
                        <div slot="content">
                            <p v-for="(itm,i) in item.content" :key="i">{{itm}}</p>
                        </div>
                    </Collapse-item>
                </Collapse>
                <div class="q-title">说明：</div>
                <div>
                    设置default-status为allOpen可设置默认全部打开
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.open" lang="html"></DCode>
            </div>
            <div class="title2">
                手风琴模式：
            </div>
            <div class="wrap">
                <Collapse v-model="collapse1.value" accordion>
                    <Collapse-item v-for="(item,index) in collapse1.data" :key="index" :name="item.name">
                        <p slot="title">{{item.title}}</p>
                        <div slot="content">
                            <p v-for="(itm,i) in item.content" :key="i">{{itm}}</p>
                        </div>
                    </Collapse-item>
                </Collapse>
                <div class="q-title">说明：</div>
                <div>
                    设置accordion，一次只能打开一个折叠面板
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.open" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Collapse【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Collapse【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/view/collapse'
export default {
  data() {
    return {
        code:Code,
        collapse1:{
            value:[],
            iconType:'arrow-right-b',
            data:[
                {
                    name:'1',
                    title:'title1',
                    content:[
                        '这是一段内容',
                        '这是一段内容'
                    ]
                },
                {
                    name:'2',
                    title:'title2',
                    content:[
                        '这是一段内容',
                        '这是一段内容'
                    ]
                },
                {
                    name:'3',
                    title:'title3',
                    content:[
                        '这是一段内容',
                        '这是一段内容'
                    ]
                }
            ]
        },
        collapse2:{
            value:['1'],
            iconType:'arrow-left-b',
            data:[
                {
                    name:'1',
                    title:'title1',
                    content:[
                        '这是一段内容',
                        '这是一段内容'
                    ]
                },
                {
                    name:'2',
                    title:'title2',
                    content:[
                        '这是一段内容',
                        '这是一段内容'
                    ]
                },
                {
                    name:'3',
                    title:'title3',
                    content:[
                        '这是一段内容',
                        '这是一段内容'
                    ]
                }
            ]
        },
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
                    prop:'value',
                    description:'折叠面板打开id',
                    type:'Array, String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'accordion',
                    description:'手风琴模式',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'defaultStatus',
                    description:'默认状态',
                    type:'String',
                    option:'allOpen',
                    default:'-'
                },
                {
                    prop:'icon',
                    description:'下拉图标',
                    type:'String',
                    option:'ios-arrow-right',
                    default:'-'
                },
                {
                    prop:'iconPosition',
                    description:'图标位置',
                    type:'String',
                    option:'right',
                    default:'-'
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
                    description:'切换折叠面板时触发',
                    props:'打开的面板数据'
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
</style>
