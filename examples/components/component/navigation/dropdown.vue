<template>
    <div class="other">
        <div class="title1">
            DropDown 下拉菜单
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap dropdown-demo">
                <DropDown>
                    <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <DropDown align="center">
                    <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <DropDown align="right">
                    <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <div class="q-title">说明：</div>
                <div>
                    设置align属性，可以设置对齐方式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                触发方式：
            </div>
            <div class="wrap dropdown-demo">
                <DropDown trigger="hover">
                    <div class="drop-title">hover触发<Icon type="ios-arrow-down"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <DropDown trigger="click">
                    <div class="drop-title">click触发<Icon type="ios-arrow-down"></Icon></div>
                    <DropDownList slot="list">
                        <DropDownItem>产品管理</DropDownItem>
                        <DropDownItem>账号管理</DropDownItem>
                    </DropDownList>
                </DropDown>
                <div class="q-title">说明：</div>
                <div>
                    设置trigger属性，设置下拉触发方式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.trigger" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">DropDown【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">DropDown【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/navigation/dropdown';
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
                    prop:'trigger',
                    description:'触发方式',
                    type:'String',
                    option:'click、hover',
                    default:'hover'
                },
                {
                    prop:'align',
                    description:'对齐方式',
                    type:'String',
                    option:'left，center，right',
                    default:'left'
                },
            ]
        },
        slot:{

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
                    name:'on-click',
                    description:'点击菜单时触发',
                    props:'菜单名'
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
.dropdown-demo{
    .vsu-dropdown{
        margin-right:40px;
    }
    .vsu-dropdown-header{
        display:inline-block;
    }
    .drop-title{
        i{
            margin-left:8px;
        }
    }
}
</style>
