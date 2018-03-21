<template>
    <div class="other">
        <div class="title1">
            Input 输入框
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="请输入"></FormInput>
                {{input1}}
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300"></FormInput>
                {{input1}}
                <div class="q-title">说明：</div>
                <div>
                    最简单的输入框，通过v-model绑定值，也可以用value属性传入默认值。可通过width属性传入宽度,默认为100%宽度
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                类型（文本域）：
            </div>
            <div class="wrap">
                <FormInput v-model="input2.value" placeholder="请输入" type="textarea"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input2.value" placeholder="请输入" type="textarea" :width="300"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input2.value" placeholder="请输入" type="textarea" :width="300" :rows=5></FormInput>
                <div class="q-title">说明：</div>
                <div>
                    设置type为textarea可设置为文本域，设置rows可设置行数，默认2行
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2">
                禁用：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="请输入" :width="300" disabled></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" type="textarea" :width="300" disabled></FormInput>
                <div class="q-title">说明：</div>
                <div>
                    设置disabled设置禁用
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.disabled" lang="html"></DCode>
            </div>
            <div class="title2">
                可清空：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable></FormInput>
                <div class="q-title">说明：</div>
                <div>
                    设置clearable或清空输入
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.clear" lang="html"></DCode>
            </div>
            <div class="title2">
                带图标：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable pre-icon="ios-search-strong"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable>
                    <span slot="preIcon" class="custom-search">
                        <Icon slot="preIcon" type="ios-search-strong"></Icon>
                    </span>
                </FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300" :aft-icon="'eye-disabled'"></FormInput>
                <div class="q-title">说明：</div>
                <div>
                    设置pre-icon和aft-icon可以设置输入框前后图标，也可slot自定义
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.icon" lang="html"></DCode>
            </div>
            <div class="title2">
                尺寸：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable :pre-icon="'search'" size="large"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable :pre-icon="'search'"></FormInput>
                <br/>
                <br/>
                <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable :pre-icon="'search'" size="small"></FormInput>
                <br/>
                <br/>
                <div class="q-title">说明：</div>
                <div>
                    最简单的选框，通过v-model绑定值，也可以用value属性传入默认值
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.size" lang="html"></DCode>
            </div>
            <div class="title2">
                复合式：
            </div>
            <div class="wrap">
                <FormInput v-model="input1" placeholder="请输入">
                    <span slot="prepend" class="custom-pre">http://</span>
                    <span slot="append" class="custom-append">.com</span>
                </FormInput>
                <div class="q-title">说明：</div>
                <div>
                    可自定义slot输入框前后元素
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.fix" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                带搜索下拉：
            </div>
            <div class="wrap">
                <div class="q-title">说明：</div>
                <div>
                    最简单的选框，通过v-model绑定值，也可以用value属性传入默认值
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div> -->
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Input【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Input【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/form/input';
export default {
  data() {
    return {
        code: Code,
        input1:'',
        input2:{
            value:''
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
                    description:'类型',
                    type:'String',
                    option:'textarea',
                    default:'text'
                },
                {
                    prop:'size',
                    description:'大小',
                    type:'String',
                    option:'small/large/default',
                    default:'default'
                },
                {
                    prop:'value',
                    description:'输入值',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'width',
                    description:'宽度',
                    type:'String,Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'placeholder',
                    description:'提示',
                    type:'String',
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
                    prop:'clearable',
                    description:'是否可以清除',
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
                    description:'输入改变时触发',
                    props:'事件'
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
.custom-search{
    i{
        font-size:18px;
        margin-top: 7px;
    }
}
.custom-pre-icon{
    display: inline-block;
    width: 30px;
    height: 32px;
    border-right: 1px solid #ccc;
    text-align: center;
    i{
        font-size:20px;
        margin-top: 6px;
    }
}
.custom-pre{
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
}
.custom-append{
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
    
}
</style>
