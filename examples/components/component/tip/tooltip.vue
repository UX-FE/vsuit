<template>
    <div class="other">
        <div class="title1">
            Tooltip 文字提示
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Tooltip content="你看到我了">
                    <BaseButton slot="target" type="primary">鼠标移到我身上</BaseButton>
                </Tooltip>
                <Tooltip>
                    <p>1、第1行</p>
                    <p>2、第2行</p>
                    <BaseButton slot="target" type="primary">多行</BaseButton>
                </Tooltip>
                <div class="q-title">说明：</div>
                <div>
                    最简单的tooltip，设置content属性获取文字提示，注意需要增加slot为target。也可自定义slot内容
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.baseTooltip" lang="html"></DCode>
            </div>
            <div class="title2">
                类型：
            </div>
            <div class="wrap">
                <Tooltip type="dark" content="type is dark">
                    <BaseButton slot="target">dark</BaseButton>
                </Tooltip>
                <Tooltip type="light" content="type is light">
                    <BaseButton slot="target">light</BaseButton>
                </Tooltip>
                <div class="q-title">说明：</div>
                <div>
                    设置type改变类型，有两个类型：dark和light
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2">
                方向：
            </div>
            <div class="wrap">
                <div class="tooltip-deraction" style="text-align:center">
                    <Tooltip direction="top-start" content="direction is top-start">
                        <BaseButton slot="target">top-start</BaseButton>
                    </Tooltip>
                    <Tooltip direction="top" content="direction is top">
                        <BaseButton slot="target">top</BaseButton>
                    </Tooltip>
                    <Tooltip direction="top-end" content="direction is top-end">
                        <BaseButton slot="target">top-end</BaseButton>
                    </Tooltip>
                    <br/>
                    <br/>
                    <Tooltip direction="bottom-start" content="direction is bottom-start">
                        <BaseButton slot="target">bottom-start</BaseButton>
                    </Tooltip>
                    <Tooltip direction="bottom" content="direction is bottom">
                        <BaseButton slot="target">bottom</BaseButton>
                    </Tooltip>
                    <Tooltip direction="bottom-end" content="direction is bottom-end">
                        <BaseButton slot="target">bottom-end</BaseButton>
                    </Tooltip>
                    <br/>
                    <br/>
                    <Tooltip direction="left-start" content="direction is left-start">
                        <BaseButton slot="target">left-start</BaseButton>
                    </Tooltip>
                    <Tooltip direction="left" content="direction is left">
                        <BaseButton slot="target">left</BaseButton>
                    </Tooltip>
                    <Tooltip direction="left-end" content="direction is left-end">
                        <BaseButton slot="target">left-end</BaseButton>
                    </Tooltip>
                    <br/>
                    <br/>
                    <Tooltip direction="right-start" content="direction is right-start">
                        <BaseButton slot="target">right-start</BaseButton>
                    </Tooltip>
                    <Tooltip direction="right" content="direction is right">
                        <BaseButton slot="target">right</BaseButton>
                    </Tooltip>
                    <Tooltip direction="right-end" content="direction is right-end">
                        <BaseButton slot="target">right-end</BaseButton>
                    </Tooltip>
                </div>
                <div class="q-title">说明：</div>
                <div>
                    设置direction改变方向，方向类型如上所示
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.direction" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Tooltip【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/tip/tooltip';
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
                    prop:'type',
                    description:'类型',
                    type:'String',
                    option:'light',
                    default:'-'
                },
                {
                    prop:'direction',
                    description:'方向',
                    type:'String',
                    option:'top/top-start/top-end...',
                    default:'top'
                },
                {
                    prop:'content',
                    description:'内容',
                    type:'String',
                    option:'-',
                    default:'-'
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
</style>
