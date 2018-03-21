<template>
    <div class="other">
        <div class="title1">
            Radio 单选按钮
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <RadioGroup v-model="radio1">
                    <Radio label="1">苹果</Radio>
                    <Radio label="2">橘子</Radio>
                </RadioGroup>
                {{radio1}}
                <div class="q-title">说明：</div>
                <div>
                    单选框组
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                不可用：
            </div>
            <div class="wrap">
                <RadioGroup v-model="radio1" disabled>
                    <Radio label="1">苹果</Radio>
                    <Radio label="2">橘子</Radio>
                </RadioGroup>
                {{radio1}}
                <RadioGroup v-model="radio3" >
                    <Radio label="1" disabled>苹果</Radio>
                    <Radio label="2">橘子</Radio>
                    <Radio label="3">香蕉</Radio>
                </RadioGroup>
                {{radio3}}
                <div class="q-title">说明：</div>
                <div>
                    设置disabled属性，把开关设置为不可用
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.disabled" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义内容：
            </div>
            <div class="wrap">
                <RadioGroup v-model="radio2" disabled>
                    <Radio label="man"><Icon type="man"></Icon>男</Radio>
                    <Radio label="woman"><Icon type="woman"></Icon>女</Radio>
                </RadioGroup>
                {{radio2}}
                <div class="q-title">说明：</div>
                <div>
                    可自定义slot内容
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                方向：
            </div>
            <div class="wrap">
                <RadioGroup v-model="radio2" vertical>
                    <Radio label="man"><Icon type="man"></Icon>男</Radio>
                    <Radio label="woman"><Icon type="woman"></Icon>女</Radio>
                </RadioGroup>
                {{radio2}}
                <div class="q-title">说明：</div>
                <div>
                   设置vertical，方向垂直
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.direction" lang="html"></DCode>
            </div>
            <div class="title2">
                类型：
            </div>
            <div class="wrap">
                <RadioGroup v-model="radio4" type="button">
                    <Radio label="hour">按时</Radio>
                    <Radio label="day">按天</Radio>
                    <Radio label="month">按月</Radio>
                    <Radio label="year">按年</Radio>
                </RadioGroup>
                <div class="q-title">说明：</div>
                <div>
                    设置type为button，选框组样式为按钮样式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Radio【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Radio【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
                <div class="q-title">Radiogroup【props】：</div>
                <Table type="bordered" :thead="api1.thead" :data="api1.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/form/radio';
export default {
  data() {
    return {
        code: Code,
        radio1:'1',
        radio2:'man',
        radio3:'2',
        radio4:'hour',
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
                    prop:'label',
                    description:'标志值',
                    type:'String, Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'disabled',
                    description:'禁用',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                }
            ]
        },
        api1:{
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
                    description:'值',
                    type:'String, Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'type',
                    description:'类型',
                    type:'String',
                    option:'button',
                    default:'-'
                },
                {
                    prop:'vertical',
                    description:'方向',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'disabled',
                    description:'禁用',
                    type:'Boolean',
                    option:'-',
                    default:'false'
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
                    description:'改变选项时触发',
                    props:'选择的值'
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
