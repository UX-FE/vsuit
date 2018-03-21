<template>
    <div class="other">
        <div class="title1">
            Rate 评分
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Rate v-model="rate1"></Rate>{{rate1}}
                <br/>
                <Rate v-model="rate1" color="green"></Rate>{{rate1}}
                <br/>
                <Rate v-model="rate1" size="14"></Rate>{{rate1}}
                <br/>
                <Rate v-model="ratefull" :full="10"></Rate>{{ratefull}}
                <div class="q-title">说明：</div>
                <div>
                    最简单的评分组件，默认不允许选中半星。
                    <br/>
                    设置color属性可自定义颜色；
                    <br/>
                    设置size属性可自定义大小；
                    <br/>
                    设置full属性可以设置默认多少个分值图标，默认5个
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                区分颜色：
            </div>
            <div class="wrap">
                <Rate v-model="ratecolor" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></Rate>{{ratecolor}}
                <br/>
                <Rate v-model="ratecolor" :full="10" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :rank="[0.5,0.6]"></Rate>{{ratecolor}}
                <br/>
                <Rate v-model="ratecolor" :full="10" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :rank="[0.4,0.8]"></Rate>{{ratecolor}}
                <div class="q-title">说明：</div>
                <div>
                    设置colors区分选中不同分值时的颜色。
                    <br/>
                    默认colors区分三种颜色，分值小于50%时为第一种，分值在50%到60%之间为一种，分值大于60%时为一种。
                    <br/>
                    设置rank属性可以自定义分值值数组，限定3个区间，2个分割值。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.dcolor" lang="html"></DCode>
            </div>
            <div class="title2">
                半星：
            </div>
            <div class="wrap">
                <Rate v-model="rate2" allow-half></Rate>{{rate2}}
                <div class="q-title">说明：</div>
                <div>
                    设置allow-half可选中半星
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.half" lang="html"></DCode>
            </div>
            <div class="title2">
                辅助文字：
            </div>
            <div class="wrap">
                <Rate v-model="rate3" show-text allow-half></Rate>
                <br/>
                <Rate v-model="rate4" show-text allow-half>
                    <span>你选择了{{rate4}}星</span>
                </Rate>
                <br/>
                <Rate v-model="rateText" :show-text="['很差','还行','一般','挺好','非常好']" allow-half>
                </Rate>
                <div class="q-title">说明：</div>
                <div>
                    设置show-text属性，开启辅助文字，也可自定义slot(注意，自定义slot时需要通过on-change函数获取组件内部改变的值)
                    <br/>
                    show-text属性也可为数组，限定为5个阶层
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.text" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义icon：
            </div>
            <div class="wrap">
                <Rate v-model="rate5" :icon-type="['android-star-outline','android-star-half']"></Rate>{{rate5}}
                <br/>
                <Rate v-model="rate6" :icon-type="['happy','sad']"></Rate>{{rate6}}
                <div class="q-title">说明：</div>
                <div>
                    增加自定义slot
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                只读：
            </div>
            <div class="wrap">
                <Rate v-model="rate5" :icon-type="['android-star-outline','android-star-half']" disabled></Rate>{{rate5}}
                <br/>
                <Rate v-model="rate6" :icon-type="['happy','sad']" disabled></Rate>{{rate6}}
                <div class="q-title">说明：</div>
                <div>
                    增加disabled属性，设置为只读
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.disabled" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Rate【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Rate【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/form/rate';
export default {
  data() {
    return {
        code: Code,
        rate1:2,
        ratefull:5,
        ratecolor:0,
        rate2:2,
        rate3:2,
        rate4:2,
        rateText:2,
        rate5:2,
        rate6:2,
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
                    prop:'full',
                    description:'满分/评价图标个数',
                    type:'Number',
                    option:'-',
                    default:'5'
                },
                {
                    prop:'value',
                    description:'当前评分',
                    type:'Number',
                    option:'-',
                    default:'0'
                },
                {
                    prop:'size',
                    description:'图标大小',
                    type:'Number',
                    option:'-',
                    default:'24'
                },
                {
                    prop:'allowHalf',
                    description:'允许半星',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'color',
                    description:'评分图标颜色',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'colors',
                    description:'区分颜色',
                    type:'Array',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'rank',
                    description:'区分颜色百分比分割值数组，单位100%',
                    type:'Array',
                    option:'-',
                    default:'[0.5,0.6]'
                },
                {
                    prop:'iconType',
                    description:'图标类型',
                    type:'Array',
                    option:'-',
                    default:"['android-star','android-star-half']"
                },
                {
                    prop:'disabled',
                    description:'只读',
                    type:'Boolean',
                    option:'-',
                    default:"false"
                },
                {
                    prop:'showText',
                    description:'显示分数',
                    type:'Boolean',
                    option:'-',
                    default:"false"
                },
                {
                    prop:'name',
                    description:'评分在表单之后的名字',
                    type:'string',
                    option:'-',
                    default:"-"
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
                    description:'分值改变时触发',
                    props:'改变后的分值'
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
