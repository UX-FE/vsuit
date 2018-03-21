let code = {}

code.baseTooltip = `
    <Tooltip content="你看到我了">
        <span slot="target">鼠标移到我身上</span>
    </Tooltip>
`

code.type = `
    <Tooltip type="dark" content="type is dark">
        <BaseButton slot="target">dark</BaseButton>
    </Tooltip>
    <Tooltip type="light" content="type is light">
        <BaseButton slot="target">light</BaseButton>
    </Tooltip>
`

code.direction = `
    <Tooltip direction="top-start" content="direction is top-start">
        <BaseButton slot="target">top-start</BaseButton>
    </Tooltip>
    <Tooltip direction="top" content="direction is top">
        <BaseButton slot="target">top</BaseButton>
    </Tooltip>
    <Tooltip direction="top-end" content="direction is top-end">
        <BaseButton slot="target">top-end</BaseButton>
    </Tooltip>
    <br/>
    <br/>
    <Tooltip direction="bottom-start" content="direction is bottom-start">
        <BaseButton slot="target">bottom-start</BaseButton>
    </Tooltip>
    <Tooltip direction="bottom" content="direction is bottom">
        <BaseButton slot="target">bottom</BaseButton>
    </Tooltip>
    <Tooltip direction="bottom-end" content="direction is bottom-end">
        <BaseButton slot="target">bottom-end</BaseButton>
    </Tooltip>
    <br/>
    <br/>
    <Tooltip direction="left-start" content="direction is left-start">
        <BaseButton slot="target">left-start</BaseButton>
    </Tooltip>
    <Tooltip direction="left" content="direction is left">
        <BaseButton slot="target">left</BaseButton>
    </Tooltip>
    <Tooltip direction="left-end" content="direction is left-end">
        <BaseButton slot="target">left-end</BaseButton>
    </Tooltip>
    <br/>
    <br/>
    <Tooltip direction="right-start" content="direction is right-start">
        <BaseButton slot="target">right-start</BaseButton>
    </Tooltip>
    <Tooltip direction="right" content="direction is right">
        <BaseButton slot="target">right</BaseButton>
    </Tooltip>
    <Tooltip direction="right-end" content="direction is right-end">
        <BaseButton slot="target">right-end</BaseButton>
    </Tooltip>
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
