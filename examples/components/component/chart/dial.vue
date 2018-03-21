<template>
    <div class="other">
        <div class="title1">
            Dial 表盘
        </div>
        <div class="mItem">
            <div class="title2">
                使用
            </div>
            <div class="wrap">
                <div class="chart-wrap" id="J_dialChart1" style="height:260px;width:440px">
                    <Dial id="J_dialChart1" :value=0 name="您的分数" target-text="老师"></Dial>
                </div>
                <div class="chart-wrap" id="J_dialChart11" style="height:260px;width:440px">
                    <Dial id="J_dialChart11" :value=20 name="您的分数" target-text="老师"></Dial>
                </div>
                <div class="chart-wrap" id="J_dialChart111" style="height:260px;width:440px">
                    <Dial id="J_dialChart111" :value=60 name="您的分数" target-text="老师"></Dial>
                </div>
                <div class="chart-wrap" id="J_dialChart1111" style="height:260px;width:440px">
                    <Dial id="J_dialChart1111" :value=85 name="您的分数" target-text="老师"></Dial>
                </div>
                <div class="q-title">说明：</div>
                <div>
                    表盘，绑定唯一的id，根据分数进行动画，显示分数和评价
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义
            </div>
            <div class="wrap">
                <div class="chart-wrap" id="J_dialChart2" style="height:260px;width:480px">
                    <Dial id="J_dialChart2" :value=800 name="芝麻信用" :max=1000 :scale="[0,100,200,300,400,500,600,700,800,900,1000]" target-text="信用" :evluate-text="['很差','较差','一般','良好','极好']"></Dial>
                </div>
                <div class="q-title">说明：</div>
                <div>
                    可以对表盘自定义
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                去掉动画
            </div>
            <div class="wrap"> 
                <div class="chart-wrap" id="J_dialChart3" style="height:260px;width:480px">
                    <Dial id="J_dialChart3" :value=800 name="芝麻信用" no-move :max=1000 :scale="[0,100,200,300,400,500,600,700,800,900,1000]" target-text="信用" :evluate-text="['很差','较差','一般','良好','极好']"></Dial>
                </div>
                <div class="q-title">说明：</div>
                <div>
                    可以对表盘自定义
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.active" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Dial【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/chart/dial';
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
                    prop:'id',
                    description:'必须，id',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'value',
                    description:'值',
                    type:'Number',
                    option:'-',
                    default:'0'
                },
                {
                    prop:'name',
                    description:'表盘名',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'scale',
                    description:'刻度数组',
                    type:'Array',
                    option:'-',
                    default:"[0,'',20,'',40,'',60,'',80,'',100]"
                },
                {
                    prop:'evluateText',
                    description:'评价数组',
                    type:'String',
                    option:'-',
                    default:"['感觉很差','感觉较差','感觉一般','感觉良好','很满意']"
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
<style>
    .chart-wrap{
        display:inline-block;
    }
</style>
