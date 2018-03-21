<template>
    <div class="other">
        <div class="title1">
            单日期选择
        </div>
        <div class="mItem">
            <div class="title2">
                使用：
            </div>
            <div class="wrap">
                {{date1}}
                <Date v-model="date1" placeholder="暂无日期"></Date>
                <div class="q-title">说明：</div>
                <div>
                    单日期选择
                    <br/>
                    通过设置date的相关配置，设置显示样式，不设置为默认样式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                可清除：
            </div>
            <div class="wrap">{{date1}}
                <Date v-model="date1" clearable></Date>
                <div class="q-title">说明：</div>
                <div>
                    设置clearable属性可清除选择
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.clearable" lang="html"></DCode>
            </div>
            <div class="title2">
                无确定操作：
            </div>
            <div class="wrap">{{date1}}
                <Date v-model="date1" :confirm=false></Date>
                <div class="q-title">说明：</div>
                <div>
                    设置confirm属性为false可去掉确定操作
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.confirm" lang="html"></DCode>
            </div>
            <div class="title2">
                格式化：
            </div>
            <div class="wrap">{{date1}}
                <Date v-model="date1" date-format="YYYY~MM~DD"></Date>
                <div class="q-title">说明：</div>
                <div>
                    设置date-format属性可自定义日期格式化
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.format" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Date【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Date【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment/moment'
import Code from '../../../code/component/form/date'
export default {
  name: 'vDate',
  data () {
    return {
      code: Code,
      date1:'',
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
                    prop:'name',
                    description:'表单标志',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'value',
                    description:'日期',
                    type:'String',
                    option:'-',
                    default:''
                },
                {
                    prop:'placeholder',
                    description:'提示',
                    type:'String',
                    option:'-',
                    default:'暂无'
                },
                {
                    prop:'clearable',
                    description:'可清除',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'confirm',
                    description:'确定操作',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'dateFormat',
                    description:'格式化',
                    type:'String',
                    option:'-',
                    default:'YYYY/MM/DD'
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
                    description:'切换日期时触发',
                    props:'切换的日期'
                }
            ]
        },
      date: {
        toggle: false, // 是否显示
        week: ['日', '一', '二', '三', '四', '五', '六'], // 星期
        date: '', // 当前日期
        selectedDate: '', // 当前已选
        year: moment().year(), // 当前视图的年
        month: moment().month() + 1, // 当前视图的月
        minDate: moment().subtract(30, 'days').format('YYYY/MM/DD'), // 最小可选日期（默认为最近30天）
        maxDate: moment().subtract(0, 'days').format('YYYY/MM/DD'), // 最大可选日期（默认为当天）
        yearToggle: false, // 年选择是否展开
        monthToggle: false, // 月选择是否展开
        placeholder: '暂无', // 暂位符
        hasConfirmBtn: true, // 有确认按钮
        clearDate: true, // 能够清除日期
        selectMonth: false // 能够选择月份

      }
    }
  },
  components: {
  },
  watch: {
  },
  methods: {
  },
  mounted () {}
}
</script>
