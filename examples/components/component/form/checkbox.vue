<template>
    <div class="other">
        <div class="title1">
            Checkbox 复选框
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Checkbox v-model="checkbox1">单独的选框</Checkbox>
                <br/>
                {{checkbox1}}
                <div class="q-title">说明：</div>
                <div>
                    最简单的选框，通过v-model绑定值，也可以用value属性传入默认值
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                禁用：
            </div>
            <div class="wrap">
                <Checkbox v-model="disabledbox" disabled>单独的选框</Checkbox>
                <br/>
                {{disabledbox}}
                <div class="q-title">说明：</div>
                <div>
                    设置disabled禁用
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.disabled" lang="html"></DCode>
            </div>
            <div class="title2">
                复选框组：
            </div>
            <div class="wrap">
                <CheckboxGroup v-model="checkbox2.check">
                    <Checkbox v-for="(item,index) in checkbox2.boxs" :key="index" :value="item.value" :label="item.name">{{item.label}}</Checkbox>
                </CheckboxGroup>
                <br/>
                {{checkbox2.check}}
                <br/>
                <br/>
                <CheckboxGroup v-model="checkbox2.check" vertical>
                    <Checkbox v-for="(item,index) in checkbox2.boxs" :key="index" :value="item.value" :label="item.name">{{item.label}}</Checkbox>
                </CheckboxGroup>
                <br/>
                {{checkbox2.check}}
                <div class="q-title">说明：</div>
                <div>
                    可使用CheckboxGroup创建复选框组,设置vertical可设置复选框组为垂直排列
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.group" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                可选数组限制：
            </div>
            <div class="wrap">
                <CheckboxGroup v-model="checkbox3.check" :min="1" :max="2">
                    <Checkbox v-for="(item,index) in checkbox3.boxs" :key="index" v-model="item.value" :label="item.name">{{item.label}}</Checkbox>
                </CheckboxGroup>
                {{checkbox3.check}}
                <br/>
                <div class="q-title">说明：</div>
                <div>
                    设置min和max设置复选框组的选择个数范围
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.number" lang="html"></DCode>
            </div> -->
            <div class="title2">
                类型：
            </div>
            <div class="wrap">
                <CheckboxGroup v-model="checkbox2.check">
                    <Checkbox type="button" v-for="(item,index) in checkbox2.boxs" :key="index" v-model="item.value" :label="item.name">{{item.label}}</Checkbox>
                </CheckboxGroup>
                <br/>
                <br/>
                <CheckboxGroup v-model="checkbox2.check">
                    <Checkbox type="bordered" v-for="(item,index) in checkbox2.boxs" :key="index" v-model="item.value" :label="item.name">{{item.label}}</Checkbox>
                </CheckboxGroup>
                <br/>
                <div class="q-title">说明：</div>
                <div>
                    增加type属性，设置复选框类型，有button、bordered两种类型，默认为无边框类型
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义内容：
            </div>
            <div class="wrap">
                <CheckboxGroup v-model="checkbox2.check">
                    <Checkbox v-for="(item,index) in checkbox2.boxs" :key="index" v-model="item.value">
                        <Icon type="android-cloud"></Icon>自定义的box{{index}}
                    </Checkbox>
                </CheckboxGroup>
                {{checkbox2.check}}
                <div class="q-title">说明：</div>
                <div>
                    增加slot,自定义内容
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                全选：
            </div>
            <div class="wrap">
                <Checkbox v-model="all.isCheckAll" @on-change="CheckAll">全选</Checkbox>
                <br/>
                <br/>
                <CheckboxGroup v-model="all.check" @on-change="handleCheckAll">
                    <Checkbox v-for="(item,index) in all.boxs" :key="index" v-model="item.value">
                        <Icon type="android-cloud"></Icon>自定义的box{{index}}
                    </Checkbox>
                </CheckboxGroup>
                {{all.check}}
                <div class="q-title">说明：</div>
                <div>
                    CheckBox与CheckBoxGroup一起使用实现全选
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.all" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义图标：
            </div>
            <div class="wrap">
                <CheckboxGroup v-model="checkbox2.check">
                    <Checkbox :icon-type="checkbox2.iconType" v-for="(item,index) in checkbox2.boxs" :key="index" v-model="item.value" :label="item.name">{{item.label}}</Checkbox>
                </CheckboxGroup>
                {{checkbox2.check}}
                <div class="q-title">说明：</div>
                <div>
                    增加icon-type属性自定义选择图标，改变选择样式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.icon" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">CheckBox【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">CheckBox【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
                <div class="q-title">CheckBoxGroup【props】：</div>
                <Table type="bordered" :thead="api1.thead" :data="api1.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/form/checkbox';
export default {
  data() {
    return {
        code: Code,
        checkbox1:true,
        disabledbox:true,
        checkbox2:{
            iconType:['android-checkbox-outline-blank','android-checkbox-outline'],
            check:[2],
            boxs:[{
                value:1,
                label:'选择1'
            },{
                value:2,
                label:'选择2'
            },{
                value:3,
                label:'选择3'
            }]
        },
        checkbox3:{
            check:[2],
            boxs:[{
                value:1,
                label:'选择1'
            },{
                value:2,
                label:'选择2'
            },{
                value:3,
                label:'选择3'
            }]
        },
        all:{
            isCheckAll:false,
            check:[2],
            boxs:[{
                value:1,
                label:'选择1'
            },{
                value:2,
                label:'选择2'
            },{
                value:3,
                label:'选择3'
            }]
        },
        checkboxapi:{
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
                    option:"'button', 'bordered','default'",
                    default:'default'
                },
                {
                    prop:'size',
                    description:'图标大小',
                    type:'Number',
                    option:'-',
                    default:'18'
                },
                {
                    prop:'shape',
                    description:'形状',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'iconType',
                    description:'图标类型',
                    type:'Array',
                    option:'-',
                    default:"['android-checkbox-outline-blank','android-checkbox']"
                },
                {
                    prop:'value',
                    description:'当前值',
                    type:'String, Number, Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'disabled',
                    description:'不可用',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                }
            ]
        },
        checkGroupapi:{
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
                    prop:'min',
                    description:'最小选中个数',
                    type:'Number',
                    option:'',
                    default:'-'
                },
                {
                    prop:'max',
                    description:'最大选中个数',
                    type:'Number',
                    option:'',
                    default:'-'
                },
                {
                    prop:'value',
                    description:'当前选中值',
                    type:'Array',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'vertical',
                    description:'是否垂直',
                    type:'Boolean',
                    option:'-',
                    default:'false'
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
                    description:'类型',
                    type:'String',
                    option:'button/bordered/default',
                    default:'-'
                },
                {
                    prop:'value',
                    description:'选择值',
                    type:'String, Number, Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'iconType',
                    description:'图标',
                    type:'Array',
                    option:'-',
                    default:'["android-checkbox-outline-blank","android-checkbox"]'
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
                    description:'复选框组值',
                    type:'Array',
                    option:'-',
                    default:'[]'
                },
                {
                    prop:'vertical',
                    description:'是否垂直',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                // {
                //     prop:'min',
                //     description:'最小选择数',
                //     type:'String,Number',
                //     option:'-',
                //     default:'-'
                // },
                // {
                //     prop:'max',
                //     description:'最大选择数',
                //     type:'String,Number',
                //     option:'-',
                //     default:'-'
                // }
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
                    description:'点击选框触发',
                    props:'选框值'
                }
            ]
        },
    };
  },
  methods: {
      CheckAll(){
          this.all.isCheckAll = !this.all.isCheckAll;
          this.all.check = [];
          if(this.all.isCheckAll){
              for(var i = 0;i<this.all.boxs.length;i++){
                  this.all.check.push(this.all.boxs[i].value)
              }
          }
      },
      handleCheckAll(){
          if(this.all.check.length===this.all.boxs.length){
              this.all.isCheckAll = true;
          }else{
              this.all.isCheckAll = false;
          }
      }
  },
  mounted() {}
};
</script>
<style lang="sass">
</style>
