<style lang="sass">
    @import "../src/styles/index.scss";
</style>
<template>
    <!-- 非业务内容路由，根据路由的meta.module进行渲染 -->
    <router-view v-if="$route.meta.module === 'account'"></router-view>
    <section class="container" 
            id="J_container" 
            :class="{
                    unFixedHeader: $route.meta.unFixedHeader
                    }" v-else>
        <DHeader :nav="nav"></DHeader>
        <section class="content" id="J_content">
            <template v-if="nav.current!=='index'">
                <DSider :sider="sider[nav.current]"></DSider>
            </template>
            <router-view></router-view>
        </section>
        <DFooter></DFooter>
    </section>
</template>
<script>
    module.exports = {  
        name: 'app',
        data: function() {
          return {
              nav:{
                current:'',
                data:[
                    {
                        name: "指南",
                        href: "/index",
                        module: "index"
                    },
                    {
                        name: "组件",
                        href: "/component",
                        module: "component"
                    },
                    {
                        name: "工具类",
                        href: "/util",
                        module: "util"
                    },
                    {
                        name: "文档",
                        href: "/document",
                        module: "document"
                    },
                ]
              },
              sider:{
                  current:'component',
                  component:[
                        {
                            name: "开发指南",
                            class: "title1"
                        },
                        {
                            name: "安装",
                            href: "/component/install"
                        },
                        {
                            name: "快速上手",
                            href: "/component/start"
                        },
                        {
                            name: "国际化",
                            href: "/component/i18n"
                        },
                        {
                            name: "自定义主题",
                            href: "/component/theme"
                        },
                        {
                            name: "更新日志",
                            href: "/component/update"
                        },
                        {
                            name: "组件",
                            class: "title title1"
                        },
                        {
                            name: "基础",
                            class: "title title2"
                        },
                        {
                            name: "Grid 栅格",
                            href: "/component/grid"
                        },
                        {
                            name: "Layout 布局",
                            href: "/component/layout"
                        },
                        {
                            name: "Color 色彩",
                            href: "/component/color"
                        },
                        {
                            name: "Font 字体",
                            href: "/component/font"
                        },
                        {
                            name: "Icon 图标",
                            href: "/component/icon"
                        },
                        {
                            name: "Button 按钮",
                            href: "/component/button"
                        },
                        {
                            name: "表单",
                            class: "title title2"
                        },
                        {
                            name: "Input 输入框",
                            href: "/component/input"
                            
                        },
                        {
                            name: "Textarea 文本域",
                            href: "/component/textarea"
                            
                        },
                        {
                            name: "Radio 单选按钮",
                            href: "/component/radio"
                        },
                        {
                            name: "Checkbox 复选框",
                            href: "/component/checkbox"
                        },
                        {
                            name: "Select 选择器",
                            href: "/component/select"
                        },
                        {
                            name: "Switch 开关",
                            href: "/component/switch"
                        },
                        {
                            name: "Date 日期选择",
                            href: "/component/date"
                        },
                        {
                            name: "DateRange 日期跨度选择",
                            href: "/component/dateRange"
                        },
                        {
                            name: "Rate 评分",
                            href: "/component/table"
                        },
                        {
                            name: "Upload 上传",
                            href: "/component/upload"
                        },
                        {
                            name: "Form 表单",
                            href: "/component/form"
                        },
                        {
                            name: "对话",
                            class: "title title2"
                        },
                        {
                            name: "Confirm 确认框",
                            href: "/component/confirm"
                        },
                        {
                            name: "Action 操作框",
                            href: "/component/box"
                        },
                        {
                            name: "提示",
                            class: "title title2"
                        },
                        {
                            name: "Alert 警告",
                            href: "/component/alert"
                        },
                        {
                            name: "Loading 加载",
                            href: "/component/loading"
                        },
                        {
                            name: "Notification 通知",
                            href: "/component/notification"
                        },
                        {
                            name: "Message 消息",
                            href: "/component/message"
                        },
                        {
                            name: "Tooltip 文字提示",
                            href: "/component/tooltip"
                        },
                        {
                            name: "Bubble 气泡提示",
                            href: "/component/bubble"
                        },
                        {
                            name: "数据",
                            class: "title title2"
                        },
                        {
                            name: "Table 表格",
                            href: "/component/table"
                        },
                        {
                            name: "Page 分页",
                            href: "/component/page"
                        },
                        {
                            name: "Tag 标签",
                            href: "/component/tag"
                        },
                        {
                            name: "Tree 树形控件",
                            href: "/component/tree"
                        },
                        {
                            name: "Progress 进度条",
                            href: "/component/progress"
                        },
                        {
                            name: "Badge 徽标数",
                            href: "/component/badge"
                        },
                        {
                            name: "导航",
                            class: "title title2"
                        },
                        {
                            name: "Step 步骤引导",
                            href: "/component/step"
                        },
                        {
                            name: "Bread 面包屑",
                            href: "/component/bread"
                        },
                        {
                            name: "Tab 标签切换",
                            href: "/component/tab"
                        },
                        {
                            name: "Menu 菜单",
                            href: "/component/menu"
                        },
                        {
                            name: "DropDown 下拉菜单",
                            href: "/component/dropdown"
                        },
                        {
                            name: "展示",
                            class: "title title2"
                        },
                        {
                            name: "Avatar 头像",
                            href: "/component/avatar"
                        },
                        {
                            name: "Collapse 折叠面板",
                            href: "/component/collapse"
                        },
                        {
                            name: "Card 卡片",
                            href: "/component/card"
                        },
                        {
                            name: "Carousel 走马灯",
                            href: "/component/carousel"
                        },
                        {
                            name: "Scroll 滚动条",
                            href: "/component/scroll"
                        },
                        {
                            name: "BackTop 返回顶部",
                            href: "/component/backtop"
                        },
                        {
                            name: "chart图",
                            class: "title title2"
                        },
                        {
                            name: "Bar 条形图",
                            href: "/component/bar"
                        },
                        {
                            name: "Circle 环形进度条",
                            href: "/component/Circle"
                        },
                        {
                            name: "Waterball 水球",
                            href: "/component/waterBall"
                        },
                        {
                            name: "Dial 表盘",
                            href: "/component/dial"
                        },
                  ],
                  util:[
                    {
                        name: "工具方法",
                        class: "title title1"
                    },
                    {
                        name: "请求GET&POST",
                        href: "/util/request"
                    },
                    {
                        name: "格式化文本",
                        href: "/util/format"
                    },
                    {
                        name: "字符串验证",
                        href: "/util/verify"
                    },
                    {
                        name: "其他",
                        href: "/util/other"
                    }

                  ],
                  document:[
                    {
                        name: "规范文档",
                        class: "title title1"
                    },
                    {
                        name: "前端编码规范文档",
                        href: "/document/fEndCode"
                    },
                    {
                        name: "后端编码规范文档",
                        href: "/document/bEndCode"
                    },
                    {
                        name: "接口文档规范",
                        href: "/document/port"
                    },
                    {
                        name: "项目构建文档",
                        class: "title1",
                        href: "/document/build"
                    },
                    {
                        name: "产品测试检查表",
                        class: "title title1"
                    },
                    {
                        name: "需求检查表",
                        href: "/document/require"
                    },
                    {
                        name: "视觉设计检查表",
                        href: "/document/vDesign"
                    },
                    {
                        name: "交互设计检查表",
                        href: "/document/iDesign"
                    },
                    {
                        name: "前端开发检查表",
                        href: "/document/fEndDev"
                    },
                    {
                        name: "后端开发检查表",
                        href: "/document/bEndDev"
                    },
                    {
                        name: "功能检查表",
                        href: "/document/function"
                    }

                  ]
              }
          }
        },
        components: {
        },
        watch: {
            //监听$route.path变化
            '$route.path'(newRoute,oldRoute) {
                //设置当前顶端导航选中模块
                this.nav.current = this.$route.meta.module;
            }
        },
        mounted: function() {

        },  
        beforeDestroy: function() {

        }
    }
</script>
