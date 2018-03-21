let code = {}

code.baseTab = `
    <template>
        <Tab v-model="tab1" @on-click-tab="handleTabs1">
            <TabContent label="待办事项" name="1">
                待办事项
            </TabContent>
            <TabContent label="在办事项" name="2">
                在办事项
            </TabContent>
            <TabContent label="办结事项" name="3">
                办结事项
            </TabContent>
        </Tab>
    </template>
    <script>
        export default {
            data() {
                return {
                    tab1:'1'
                };
            },
            methods: {
                handleTabs(){

                }
            }
        }
    </script>
`

code.customSeparator = `
    <template>
        <Bread separator=">">
            <BreadItem v-for="(item,index) in bread" :key="index" to="item.to">
                {{item.title}}
            </BreadItem>
        </Bread>
        <Bread separator=">>">
            <BreadItem v-for="(item,index) in bread" :key="index" to="item.to">
                {{item.title}}
            </BreadItem>
        </Bread>
        <Bread separator="=>">
            <BreadItem v-for="(item,index) in bread" :key="index" to="item.to">
                {{item.title}}
            </BreadItem>
        </Bread>
    </template>
    <script>
        export default {
        data() {
            return {
                bread:[
                    {
                        to:'/',
                        title:'首页'
                    },
                    {
                        to:'/',
                        title:'组件'
                    },
                    {
                        to:'/',
                        title:'资源'
                    },
                    {
                        to:'/',
                        title:'文档'
                    }
                ]
            };
        }
    </script>
`

code.iconSeparator = `
    <template>
        <Bread>
            <BreadItem v-for="(item,index) in bread1" :key="index" to="item.to">
                {{item.title}}
                <Icon type="search" slot="separator"></Icon>
            </BreadItem>
        </Bread>
    </template>
    <script>
        export default {
        data() {
            return {
                bread:[
                    {
                        to:'/',
                        title:'首页'
                    },
                    {
                        to:'/',
                        title:'组件'
                    },
                    {
                        to:'/',
                        title:'资源'
                    },
                    {
                        to:'/',
                        title:'文档'
                    }
                ]
            };
        }
    </script>
`

code.customBread = `
    <template>
        <Bread separator="/">
            <BreadItem v-for="(item,index) in bread1" :key="index" to="item.to">
                <Icon type="search"></Icon>
                {{item.title}}
            </BreadItem>
        </Bread>
    </template>
    <script>
        export default {
        data() {
            return {
                bread:[
                    {
                        to:'/',
                        title:'首页'
                    },
                    {
                        to:'/',
                        title:'组件'
                    },
                    {
                        to:'/',
                        title:'资源'
                    },
                    {
                        to:'/',
                        title:'文档'
                    }
                ]
            };
        }
    </script>
`

export default code
