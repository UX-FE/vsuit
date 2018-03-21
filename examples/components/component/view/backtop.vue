<template>
    <div class="other">
        <div class="title1">
            BackTop 返回顶部
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <div class="demo-text">滚动页面看看</div>
                <div class="q-title">说明：</div>
                <div>
                    简单的返回顶部组件，与Scroll组件一起使用，默认位置在页面右下角，滚动距离顶端500px时显示。
                    默认容器为窗口，当前不是窗口滚动时，需要设置target属性，指定为滚动元素的id
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                位置：
            </div>
            <div class="wrap">
                <div class="demo-text">滚动页面看看位置</div>
                <div class="q-title">说明：</div>
                <div>
                    设置bottom和right可以设置返回div的位置
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.position" lang="html"></DCode>
            </div>
            <div class="title2">
                滚动速率：
            </div>
            <div class="wrap">
                <div class="demo-text">点击不同的返回按钮</div>
                <div class="q-title">说明：</div>
                <div>
                    设置duration可以设置滚动速率
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.speed" lang="html"></DCode>
            </div>
            <div class="title2">
                显示高度：
            </div>
            <div class="wrap">
                <div class="demo-text">滚动页面查看</div>
                <div class="q-title">说明：</div>
                <div>
                    设置height可以设置滚动多少高度后返回div显示
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.height" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义样式：
            </div>
            <div class="wrap">
                <div class="demo-text">滚动页面查看自定义样式</div>
                <div class="q-title">说明：</div>
                <div>
                    自定义样式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">BackTop【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">BackTop【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/view/backtop'
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
                    prop:'height',
                    description:'显示返回按钮的高度',
                    type:'Number',
                    option:'-',
                    default:'500'
                },
                {
                    prop:'bottom',
                    description:'返回按钮距离底部高度',
                    type:'Number',
                    option:'-',
                    default:'30'
                },
                {
                    prop:'right',
                    description:'返回按钮距离右边高度',
                    type:'Number',
                    option:'-',
                    default:'30'
                },
                {
                    prop:'duration',
                    description:'滚动速率',
                    type:'Number',
                    option:'-',
                    default:'800'
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
                    name:'on-back',
                    description:'点击返回时触发',
                    props:'此时的滚动高度'
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
.demo-text{
    font-size:14px;
}
.custom-top{
    height: 60px;
    width: 60px;
    background: red;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    color: #fff;
}
</style>
