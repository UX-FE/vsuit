<template>
    <div class="other">
        <div class="title1">
            Tag 标签
        </div>
        <div class="mItem">
            <div class="title2">
                标签和标签组
            </div>
            <div class="wrap">
                <Tag>标签</Tag>
                <br/>
                <br/>
                <TagGroup :tags="tag1">
                    <Tag v-for="(item,index) in tag1" :key="index" :tag="item" @on-close="closeTag">
                        {{item.name}}
                    </Tag>
                </TagGroup>
                <div class="q-title">说明：</div>
                <div>
                    最简单的标签
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                可关闭的标签：
            </div>
            <div class="wrap">
                <TagGroup :tags="tag2">
                    <Tag v-for="(item,index) in tag2" :key="index" :tag="item" closable @on-close="closeTag">
                        {{item.name}}
                    </Tag>
                </TagGroup>
                <div class="q-title">说明：</div>
                <div>
                    增加closable属性，设置标签可关闭，关闭会触发on-close函数
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.close" lang="html"></DCode>
            </div>
            <div class="title2">
                标签颜色：
            </div>
            <div class="wrap">
                <TagGroup :tags="tag1">
                    <Tag v-for="(item,index) in tag1" :key="index" :tag="item" color="green">
                        {{item.name}}
                    </Tag>
                </TagGroup>
                <TagGroup :tags="tag1">
                    <Tag v-for="(item,index) in tag1" :key="index" :tag="item" color="red">
                        {{item.name}}
                    </Tag>
                </TagGroup>
                <div class="q-title">说明：</div>
                <div>
                    设置color改变标签颜色
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.color" lang="html"></DCode>
            </div>
            <div class="title2">
                标签尺寸：
            </div>
            <div class="wrap">
                <TagGroup :tags="tag1">
                    <Tag v-for="(item,index) in tag1" :key="index" :tag="item">
                        {{item.name}}
                    </Tag>
                </TagGroup>
                <div class="q-title">说明：</div>
                <div>
                    设置tag的size属性改变标签大小
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.size" lang="html"></DCode>
            </div>
            <div class="title2">
                标签组方向：
            </div>
            <div class="wrap">
                <TagGroup :tags="tag1" deraction="horizontal">
                    <Tag v-for="(item,index) in tag1" :key="index" :tag="item">
                        {{item.name}}
                    </Tag>
                </TagGroup>
                <TagGroup :tags="tag1" deraction="vertical" style="width:70px;">
                    <Tag v-for="(item,index) in tag1" :key="index" :tag="item">
                        {{item.name}}
                    </Tag>
                </TagGroup>
                <div class="q-title">说明：</div>
                <div>
                    设置tag的deraction属性改变方向
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.direction" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Icon【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Icon【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/data/tag';
export default {
  data() {
    return {
        code: Code,
        tag1:[
            {
                id:'1',
                name:'标签一'
            },
            {
                id:'2',
                name:'标签二'
            },
            {
                id:'3',
                name:'标签三'
            },
            {
                id:'4',
                name:'标签四'
            }
        ],
        tag2:[
            {
                id:'1',
                name:'标签一'
            },
            {
                id:'2',
                name:'标签二'
            },
            {
                id:'3',
                name:'标签三'
            },
            {
                id:'4',
                name:'标签四'
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
                    prop:'tag',
                    description:'tag数据',
                    type:'String, Number, Object',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'closable',
                    description:'是否关闭',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'size',
                    description:'大小',
                    type:'String',
                    option:'default/large/small',
                    default:'default'
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
                    name:'on-close',
                    description:'关闭标签时触发',
                    props:'标签值'
                }
            ]
        },
    };
  },
  methods: {
    closeTag (event,tag) {
        let closeIndex;
        for(var i = 0;i<this.tag2.length;i++){
            if(this.tag2[i].name===tag.name){
                closeIndex = i;
            }
        }
        if(closeIndex!==undefined){
            this.tag2.splice(closeIndex,1);
            this.$emit('on-close-tag', event);
        }
    }
  },
  mounted() {}
};
</script>
<style lang="sass">
</style>
