let code = {}

code.base = `
    <Badge count="5">
        <BaseButton>消息</BaseButton>
    </Badge>
    <Badge count="35">
        <BaseButton>消息</BaseButton>
    </Badge>
    <Badge count="5">
        <span class="text-badge">消息</span>
    </Badge>
`

code.max = `
    <Badge count="325" max="99">
        <BaseButton>消息</BaseButton>
    </Badge>
    <Badge count="325" max="10">
        <BaseButton>消息</BaseButton>
    </Badge>
`

code.scale = `
    <Badge count="325" max="99" :scale=0.8>
        <BaseButton>消息</BaseButton>
    </Badge>
    <Badge count="325" max="10" :scale=0.8>
        <BaseButton>消息</BaseButton>
    </Badge>
    <Badge count="25" :scale=0.8>
        <BaseButton>消息</BaseButton>
    </Badge>
    <br/>
    <br/>
    <Badge count="325" max="99" :scale=0.7>
        <BaseButton>消息</BaseButton>
    </Badge>
    <Badge count="325" max="10" :scale=0.7>
        <BaseButton>消息</BaseButton>
    </Badge>
    <Badge count="25" :scale=0.7>
        <BaseButton>消息</BaseButton>
    </Badge>
`

code.custom = `
    <Badge count="new">
        <BaseButton>消息</BaseButton>
    </Badge>
    <Badge count="hot">
        <BaseButton>消息</BaseButton>
    </Badge>
`
code.dot = `
    <Badge count="325" dot :scale=0.5>
        <BaseButton>消息</BaseButton>
    </Badge>
    <Badge count="325" dot :scale=0.5>
    </Badge>
`

export default code
