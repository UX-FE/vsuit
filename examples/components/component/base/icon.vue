<template>
    <div class="other">
        <div class="title1">
            Icon 图标
        </div>
        <div class="mItem">
            <div class="title2">
                概述：
            </div>
            <div class="wrap">
                <div>
                   vsuit的图标使用开源项目<a href="http://ionicons.com/">ionicons</a>
                </div>
                <br/>
            </div>
            <div class="title2">
                使用：
            </div>
            <div class="wrap">
                <Icon type="arrow-up-a" size="12"></Icon>
                <Icon type="arrow-up-a" size="24"></Icon>
                <Icon type="arrow-up-a" size="48"></Icon>
                <br/>
                <Icon type="arrow-up-a" size="24" color="red"></Icon>
                <Icon type="arrow-up-a" size="24" color="yellow"></Icon>
                <Icon type="arrow-up-a" size="24" color="blue"></Icon>
                <div class="q-title">说明：</div>
                <div>
                   设置type属性设置icon类型，type从ionicons官网中获取：<a href="http://ionicons.com/">ionicons</a>，例如官网中图标类型为ion-arrow-up-a，type去除ion-前缀，为arrow-up-a。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Icon【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Icon【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/base/icon';
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
                    name:'on-click-icon',
                    description:'点击图标时触发',
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
