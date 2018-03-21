<template>
    <div class="other">
        <div class="title1">
            Select 选择器
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                {{baseSelect.value}}
                <br/>
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" :max-height=100>
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    最简单的选择器,设置max-height属性定义最大高度。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                尺寸：
            </div>
            <div class="wrap">
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" size="small">
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" size="large">
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    设置size属性，改变select尺寸，有large和small可以选择。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.size" lang="html"></DCode>
            </div>
            <div class="title2">
                增加箭头：
            </div>
            <div class="wrap">
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" bubble>
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    设置bubble属性，在下拉框上增加箭头
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.arrow" lang="html"></DCode>
            </div>
            <div class="title2">
                固定title：
            </div>
            <div class="wrap">
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" title="水果选择" fix-title>
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    设置fix-title属性，和title属性，可以固定title，不显示选择结果
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.arrow" lang="html"></DCode>
            </div>
            <div class="title2">
                禁用选项：
            </div>
            <div class="wrap">
                <Select v-model="disabledOpt.value" placeholder="请选择" style="width:200px;">
                    <Option v-for="(item,index) in disabledOpt.options" :key="index" :option="item" :disabled="item.disabled">
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    在选项中设置disabled属性，设置禁用
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.disabledOpt" lang="html"></DCode>
            </div>
            <div class="title2">
                禁用选择器：
            </div>
            <div class="wrap">
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" :disabled="true">
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    在Select组件中设置disabled属性禁用选择器
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.disabled" lang="html"></DCode>
            </div>
            <div class="title2">
                可清空选择：
            </div>
            <div class="wrap">
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" clearable>
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    设置clearable属性，可清空选择
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.clearable" lang="html"></DCode>
            </div>
            <div class="title2">
                类型：单选、多选，多选可全选：
            </div>
            <div class="wrap">
                <div class="q-title">多选：</div>
                <Select v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple">
                    <Option v-for="(item,index) in multiselect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <div class="q-title">多选类型：</div>
                <Select v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" multi-type="check-box">
                    <Option v-for="(item,index) in multiselect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <div class="q-title">可全选：</div>
                <Select v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" multi-type="check-box" check-all>
                    <Option v-for="(item,index) in multiselect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <div class="q-title">有可选范围：</div>
                <Select v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" :check-range="[2,3]">
                    <Option v-for="(item,index) in multiselect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <div class="q-title">有确定和取消：</div>
                <Select v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" multi-type="check-box" check-all judge>
                    <Option v-for="(item,index) in multiselect.options" :key="index" :option="item">
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    设置type为multiple可以设置成多选，
                    设置multi-type可以设置多选类型，默认为对勾样式
                    增加check-all属性增加全选功能，全选功能带有确定和取消操作,
                    增加check-range属性增加选择数目范围，少于范围不可提交，超过范围不可选择,
                    增加judge属性增加确定和取消操作
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.multiple" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义选项模板：
            </div>
            <div class="wrap">
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                        <Icon type="heart"></Icon>  {{item.label}}
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    可自定义选项内容
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                分栏：
            </div>
            <div class="wrap">
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" :col=2>
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                        {{item.label}}
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    设置col属性定义选项列数
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                可搜索：
            </div>
            <div class="wrap">
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                        {{item.label}}
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    最简单的选择器。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                远程搜索：
            </div>
            <div class="wrap">
                <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
                    <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                        {{item.label}}
                    </Option>
                </Select>
                <div class="q-title">说明：</div>
                <div>
                    最简单的选择器。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div> -->
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Select【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Select【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/form/select';
export default {
  data() {
    return {
        code: Code,
        baseSelect:{
            value:'apple',
            options:[
                {
                    value:'apple',
                    label:'苹果'
                },
                {
                    value:'pear',
                    label:'梨'
                },
                {
                    value:'banana',
                    label:'香蕉'
                },
                {
                    value:'pineapple',
                    label:'菠萝'
                }
            ]
        },
        disabledOpt:{
            value:'apple',
            options:[
                {
                    value:'apple',
                    label:'苹果'
                },
                {
                    value:'pear',
                    label:'梨'
                },
                {
                    value:'banana',
                    label:'香蕉',
                    disabled:true
                },
                {
                    value:'pineapple',
                    label:'菠萝'
                }
            ]
        },
        multiselect:{
            value:['apple','pear'],
            options:[
                {
                    value:'apple',
                    label:'苹果'
                },
                {
                    value:'pear',
                    label:'梨'
                },
                {
                    value:'banana',
                    label:'香蕉'
                },
                {
                    value:'pineapple',
                    label:'菠萝'
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
                    prop:'type',
                    description:'图标类型',
                    type:'String',
                    option:'ionicons Version 2.0.1图标类型',
                    default:'-'
                },
                {
                    prop:'size',
                    description:'图标大小',
                    type:'String，Number',
                    option:'-',
                    default:'12'
                },
                {
                    prop:'color',
                    description:'图标颜色',
                    type:'String',
                    option:'-',
                    default:'#4c5764'
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
                    name:'on-select',
                    description:'切换选项时触发',
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
</style>
