<template>
    <div class="other">
        <div class="title1">
            Badge 徽标数
        </div>
        <div class="mItem">
            <div class="title2">
                使用：
            </div>
            <div class="wrap">
                <Badge count="5">
                    <BaseButton>消息</BaseButton>
                </Badge>
                <Badge count="35">
                    <BaseButton>消息</BaseButton>
                </Badge>
                <Badge count="5">
                    <span class="text-badge">消息</span>
                </Badge>
                <div class="q-title">说明：</div>
                <div>
                   简单的徽标
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                最大值：
            </div>
            <div class="wrap">
                <Badge count="325" max="99">
                    <BaseButton>消息</BaseButton>
                </Badge>
                <Badge count="325" max="10">
                    <BaseButton>消息</BaseButton>
                </Badge>
                <div class="q-title">说明：</div>
                <div>
                   可自定义最大值
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.max" lang="html"></DCode>
            </div>
            <div class="title2">
                缩小放大：
            </div>
            <div class="wrap">
                <Badge count="325" max="99" :scale=0.8>
                    <BaseButton>消息</BaseButton>
                </Badge>
                <Badge count="325" max="10" :scale=0.8>
                    <BaseButton>消息</BaseButton>
                </Badge>
                <Badge count="25" :scale=0.8>
                    <BaseButton>消息</BaseButton>
                </Badge>
                <br/>
                <br/>
                <Badge count="325" max="99" :scale=0.7>
                    <BaseButton>消息</BaseButton>
                </Badge>
                <Badge count="325" max="10" :scale=0.7>
                    <BaseButton>消息</BaseButton>
                </Badge>
                <Badge count="25" :scale=0.7>
                    <BaseButton>消息</BaseButton>
                </Badge>
                <div class="q-title">说明：</div>
                <div>
                   可自定义最大值
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.scale" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义显示：
            </div>
            <div class="wrap">
                <Badge count="new">
                    <BaseButton>消息</BaseButton>
                </Badge>
                <Badge count="hot">
                    <BaseButton>消息</BaseButton>
                </Badge>
                <div class="q-title">说明：</div>
                <div>
                   可以定义count为String格式自定义显示
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                小红点：
            </div>
            <div class="wrap">
                <Badge count="325" dot :scale=0.5>
                    <BaseButton>消息</BaseButton>
                </Badge>
                <Badge count="325" dot :scale=0.5>
                </Badge>
                <div class="q-title">说明：</div>
                <div>
                   可定义徽标为红点
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.dot" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Badge【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>

            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/data/badge';
export default {
  data() {
    return {
        code: Code,
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
                    prop:'count',
                    description:'徽标值',
                    type:'String，Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'max',
                    description:'最大值',
                    type:'String，Number',
                    option:'-',
                    default:'99'
                },
                {
                    prop:'scale',
                    description:'缩放比例',
                    type:'Number',
                    option:'-',
                    default:'1'
                },
                {
                    prop:'dot',
                    description:'是否为小红点',
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
    .vsu-badge{
        margin-right:40px;
    }
    .square-badge{
        width:36px;
        height:36px;
        background:#ccc;
        border-radius:4px;
    }
    .text-badge{
        display:inline-block;
        padding-right:5px;
    }
</style>
