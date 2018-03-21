<template>
    <div class="other">
        <div class="title1">
            Switch 开关
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <FormSwitch v-model="switch1"></FormSwitch>{{switch1}}
                <FormSwitch :value="switch1"></FormSwitch>
                <div class="q-title">说明：</div>
                <div>
                    最简单的开关，通过v-model绑定值，也可以用value属性传入默认值
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.baseSwitch" lang="html"></DCode>
            </div>
            <div class="title2">
                尺寸：
            </div>
            <div class="wrap">
                <FormSwitch size="large" v-model="switch1"></FormSwitch>
                <FormSwitch v-model="switch1"></FormSwitch>
                <FormSwitch size="small" v-model="switch1"></FormSwitch>
                <div class="q-title">说明：</div>
                <div>
                    设置size改变尺寸，尺寸有large和small，不设置默认尺寸
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.size" lang="html"></DCode>
            </div>
            <div class="title2">
                不可用：
            </div>
            <div class="wrap">
                <FormSwitch disabled v-model="switch1"></FormSwitch>
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
                <FormSwitch v-model="switch1">
                    <span slot="open">开</span>
                    <span slot="shut">关</span>
                </FormSwitch>
                <FormSwitch size="large" v-model="switch1">
                    <span slot="open">ON</span>
                    <span slot="shut">OFF</span>
                </FormSwitch>
                <div class="q-title">说明：</div>
                <div>
                    增加自定义slot
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                文字标签：
            </div>
            <div class="wrap">
                <FormSwitch v-model="switch1" label="是否选中">
                </FormSwitch>
                <br/>
                <br/>
                <FormSwitch v-model="switch1" openlabel="按年付费" shutlabel="按月付费">
                </FormSwitch>
                <div class="q-title">说明：</div>
                <div>
                    增加label属性，设置唯一文字标签，增加openlabel和shutlabel属性，设置开启和关闭文字标签
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.text" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">FromSwitch【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">FromSwitch【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/form/switch';
export default {
  data() {
    return {
        code: Code,
        switch1:true,
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
                    prop:'size',
                    description:'大小',
                    type:'String',
                    option:'large/small',
                    default:'-'
                },
                {
                    prop:'value',
                    description:'值',
                    type:'String, Number, Boolean',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'disabled',
                    description:'禁用',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'label',
                    description:'文字标签',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'openlabel',
                    description:'打开文字',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'shutlabel',
                    description:'关闭文字',
                    type:'String',
                    option:'-',
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
                    name:'on-toggle',
                    description:'切换开关时触发',
                    props:'开关是否打开的值，true/false'
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
