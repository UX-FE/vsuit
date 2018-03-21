<template>
    <div class="other">
        <div class="title1">
            Bread 面包屑
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Bread separator="/">
                    <BreadItem v-for="(item,index) in bread1" :key="index" to="item.to">
                        {{item.title}}
                    </BreadItem>
                </Bread>
                <div class="q-title">说明：</div>
                <div>
                    最简单的面包屑，通过separator设置分隔符，通过to设置链接
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.baseBread" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义分隔符：
            </div>
            <div class="wrap">
                <Bread separator=">">
                    <BreadItem v-for="(item,index) in bread1" :key="index" to="item.to">
                        {{item.title}}
                    </BreadItem>
                </Bread>
                <Bread separator=">>">
                    <BreadItem v-for="(item,index) in bread1" :key="index" to="item.to">
                        {{item.title}}
                    </BreadItem>
                </Bread>
                <Bread separator="=>">
                    <BreadItem v-for="(item,index) in bread1" :key="index" to="item.to">
                        {{item.title}}
                    </BreadItem>
                </Bread>
                <div class="q-title">说明：</div>
                <div>
                    自定义分隔符
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.customSeparator" lang="html"></DCode>
            </div>
            <div class="title2">
                图标分隔符：
            </div>
            <div class="wrap">
                <Bread>
                    <BreadItem v-for="(item,index) in bread1" :key="index" to="item.to">
                        {{item.title}}
                        <Icon type="arrow-right-a" slot="separator"></Icon>
                    </BreadItem>
                </Bread>
                <div class="q-title">说明：</div>
                <div>
                    自定义分隔符,不加separator属性，slot进去，如图标
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.iconSeparator" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义面包屑内容：
            </div>
            <div class="wrap">
                <Bread separator="/">
                    <BreadItem v-for="(item,index) in bread1" :key="index" to="item.to">
                        <Icon :type="item.icon"></Icon>
                        {{item.title}}
                    </BreadItem>
                </Bread>
                <div class="q-title">说明：</div>
                <div>
                    自定义面包屑内容，如增加图标
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.customBread" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Bread【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/navigation/bread';
export default {
  data() {
    return {
        code: Code,
        bread1:[
            {
                to:'/',
                title:'首页',
                icon:'android-home'
            },
            {
                to:'/',
                title:'组件',
                icon:'android-list'
            },
            {
                to:'/',
                title:'资源',
                icon:'android-globe'
            },
            {
                to:'/',
                title:'文档',
                icon:'android-folder'
            }
        ],
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
                    prop:'separator',
                    description:'分隔符',
                    type:'String',
                    option:'-',
                    default:'-'
                },
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
