<template>
    <div class="other">
        <div class="title1">
            Message 消息
        </div>
        <div class="mItem alert-demo-wrap">
            <div class="title2">
                类型：
            </div>
            <div class="wrap">
                <Alert type="info">这是一些提示信息</Alert>
                <Alert type="success">告诉你成功了</Alert>
                <Alert type="warn">警告你</Alert>
                <Alert type="error">大侠，报错了</Alert>
                <div class="q-title">说明：</div>
                <div>
                    直接显示在页面的重要提示信息，不是浮层元素，不会自动消失，类型有info、success、warn、error四中
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                关闭方式：
            </div>
            <div class="wrap">
                <Alert type="info" :closable="false">这是一些提示信息</Alert>
                <Alert type="info" >这是一些提示信息<span slot="close">知道了</span></Alert>
                <div class="q-title">说明：</div>
                <div>
                    设置closable为false可以设置不可关闭，可以自定义名为close的slot定义关闭方式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.close" lang="html"></DCode>
            </div>
            <div class="title2">
                显示图标：
            </div>
            <div class="wrap">
                <Alert type="info" show-icon>这是一些提示信息</Alert>
                <Alert type="success" show-icon>告诉你成功了</Alert>
                <Alert type="warn" show-icon>警告你</Alert>
                <Alert type="error" show-icon>大侠，报错了</Alert>
                <div class="q-title">说明：</div>
                <div>
                    设置show-icon显示图标
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.icon" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义消失时长：
            </div>
            <div class="wrap">
                <Alert type="info" show-icon>这是一些提示信息</Alert>
                <Alert type="success" show-icon>告诉你成功了</Alert>
                <Alert type="warn" show-icon>警告你</Alert>
                <Alert type="error" show-icon>大侠，报错了</Alert>
                <div class="q-title">说明：</div>
                <div>
                    设置show-icon显示图标
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.icon" lang="html"></DCode>
            </div>
            <div class="title2">
                对齐方式：
            </div>
            <div class="wrap">
                <Alert type="info" show-icon>这是一些提示信息</Alert>
                <Alert type="success" show-icon>告诉你成功了</Alert>
                <Alert type="warn" show-icon>警告你</Alert>
                <Alert type="error" show-icon>大侠，报错了</Alert>
                <div class="q-title">说明：</div>
                <div>
                    设置show-icon显示图标
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.icon" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Alert【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Alert【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/tip/alert';
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
                    option:'success/info/warn/error',
                    default:'info'
                },
                {
                    prop:'closable',
                    description:'是否可关闭',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'showIcon',
                    description:'显示图标',
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
                    name:'on-close',
                    description:'关闭警告时触发',
                    props:'点击事件'
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
.alert-demo-wrap{
    .vsu-alert{
        margin-bottom:20px;
    }
}
</style>
