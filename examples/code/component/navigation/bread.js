let code = {}

code.baseBread = `
    <template>
        <Bread separator="/">
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
                <Icon type="arrow-right-a" slot="separator"></Icon>
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
                ]
            };
        }
    </script>
`

export default code
