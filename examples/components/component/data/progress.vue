<template>
    <div class="other">
        <div class="title1">
            Progress 进度条
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Progress></Progress>
                <Progress :percent="0"></Progress>
                <Progress :percent="25"></Progress>
                <Progress :percent="50"></Progress>
                <Progress :percent="100"></Progress>
                <Progress :percent="50" hidetext></Progress>
                <div class="q-title">说明：</div>
                <div>
                    最简单的进度条，设置percent属性获取进度，percent必须在0-100,不设置默认为0，设置hidetext不显示文字
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                大小：
            </div>
            <div class="wrap">
                <Progress :percent="25" stroke-width=10></Progress>
                <Progress :percent="50" stroke-width=40></Progress>
                <div class="q-title">说明：</div>
                <div>
                    设置strokeWidth改变宽度
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.color" lang="html"></DCode>
            </div>
            <div class="title2">
                文字位置：
            </div>
            <div class="wrap">
                <Progress :percent="0"></Progress>
                <Progress :percent="25"></Progress>
                <Progress :percent="0" textinside></Progress>
                <Progress :percent="1" textinside></Progress>
                <Progress :percent="5" textinside></Progress>
                <Progress :percent="25" textinside></Progress>
                <div class="q-title">说明：</div>
                <div>
                    设置textinside属性，设置文字位置在进度条内
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.textposition" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义内容：
            </div>
            <div class="wrap">
                <Progress :percent="25">
                    <span style="margin:0 6px;">自定义的内容</span>
                </Progress>
                <Progress :percent="25">
                    <div slot="text"><Icon type="leaf"></Icon>25</div>
                </Progress>
                <div class="q-title">说明：</div>
                <div>
                    增加自定义slot
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                方向：
            </div>
            <div class="wrap">
                <div style="height:200px">
                    <Progress :percent="25" vertical></Progress>
                    <Progress :percent="50" vertical></Progress>
                    <Progress :percent="100" vertical></Progress>
                </div>
                <div class="q-title">说明：</div>
                <div>
                    增加vertical属性，设置进度条方向
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.direction" lang="html"></DCode>
            </div>
            <div class="title2">
                类型:
            </div>
            <div class="wrap">
                <Progress :percent="25"></Progress>
                <Progress :percent="25" type="strip"></Progress>
                <Progress :percent="0" type="circle"></Progress>
                <Progress :percent="25" type="circle"></Progress>
                <Progress :percent="50" type="circle"></Progress>
                <Progress :percent="100" type="circle"></Progress>
                <Progress :percent="70" type="circle" stroke-linecap="round"></Progress>
                <Progress :percent="80" type="circle" back-width="10"></Progress>
                <Progress :percent="80" type="circle" back-width="10">
                    <div>
                        <div>中国电信</div>
                        <div>80% | 23,989</div>
                    </div>
                </Progress>
                <Progress :percent="80" type="circle" back-width="10" :gradient="gradient1">
                    <div>
                        <div>中国电信</div>
                        <div>80% | 23,989</div>
                    </div>
                </Progress>
                <div class="q-title">说明：</div>
                <div>
                    设置type可改变进度条类型，type有strip和circle两种，不设置为默认样式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2">
                状态：
            </div>
            <div class="wrap">
                <Progress :percent="25"></Progress>
                <Progress :percent="45" status="active"></Progress>
                <Progress :percent="65" status="error"></Progress>
                <Progress :percent="100" status="success"></Progress>
                <Progress :percent="25" type="strip"></Progress>
                <Progress :percent="45" type="strip" status="active"></Progress>
                <Progress :percent="55" type="strip" status="error"></Progress>
                <Progress :percent="100" type="strip" status="success"></Progress>
                <div class="q-title">说明：</div>
                <div>
                    增加status设置进度条状态
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.status" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Progress【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/data/progress';
export default {
  data() {
    return {
        code: Code,
        gradient1:[
                    ['#e52c5c','#ab5aea'],['#4352f3','#ab5aea']

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
                    prop:'type',
                    description:'类型',
                    type:'String',
                    option:'default/strip/circle',
                    default:'default'
                },
                {
                    prop:'status',
                    description:'状态',
                    type:'String',
                    option:'normal/active/error/success',
                    default:'-'
                },
                {
                    prop:'color',
                    description:'type为circle时的颜色',
                    type:'String',
                    option:'-',
                    default:'#4c5764'
                },
                {
                    prop:'strokeWidth',
                    description:'type为default和strip时进度条宽度',
                    type:'Number,String',
                    option:'-',
                    default:'22'
                },
                {
                    prop:'strokeLinecap',
                    description:'type为circle时的进度条两端类型',
                    type:'String',
                    option:'butt/round',
                    default:'butt'
                },
                {
                    prop:'backWidth',
                    description:'type为circle时的背景环形宽度',
                    type:'Number,String',
                    option:'-',
                    default:'22'
                },
                {
                    prop:'size',
                    description:'type为circle时的圆形大小',
                    type:'Number,String',
                    option:'-',
                    default:'200'
                },
                {
                    prop:'vertical',
                    description:'是否垂直',
                    type:'Boolean',
                    option:'-',
                    default:'200'
                },
                {
                    prop:'percent',
                    description:'进度值',
                    type:'Number',
                    option:'-',
                    default:'0'
                },
                {
                    prop:'textinside',
                    description:'字体是否在进度条内',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'hidetext',
                    description:'是否隐藏文字',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                }
            ]
        },
    };
  },
  methods: {
      handleTabs1(){

      }
  },
  mounted() {}
};
</script>
<style lang="sass">
.vsu-progress{
    margin-bottom:10px;
}
</style>
