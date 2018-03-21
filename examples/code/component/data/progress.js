let code = {}

code.base = `
    <Progress></Progress>
    <Progress :percent="0"></Progress>
    <Progress :percent="25"></Progress>
    <Progress :percent="50"></Progress>
    <Progress :percent="100"></Progress>
    <Progress :percent="50" hidetext></Progress>
`

code.color = `
    <Progress :percent="25" color="red"></Progress>
    <Progress :percent="50" color="yellow"></Progress>
    <Progress :percent="25" strokeWidth="10"></Progress>
    <Progress :percent="50" strokeWidth="40"></Progress>
`

code.textposition = `
    <Progress :percent="0"></Progress>
    <Progress :percent="25"></Progress>
    <Progress :percent="0" textinside></Progress>
    <Progress :percent="1" textinside></Progress>
    <Progress :percent="5" textinside></Progress>
    <Progress :percent="25" textinside></Progress>
`

code.custom = `
    <Progress :percent="25">
        <span style="margin:0 6px;">自定义的内容</span>
    </Progress>
    <Progress :percent="25">
        <div slot="text"><Icon type="leaf"></Icon>25</div>
    </Progress>
`
code.direction = `
    <div style="height:200px">
        <Progress :percent="25" vertical></Progress>
        <Progress :percent="50" vertical></Progress>
        <Progress :percent="100" vertical></Progress>
    </div>
`
code.type = `
    <Progress :percent="25"></Progress>
    <Progress :percent="25" type="strip"></Progress>
    <Progress :percent="0" type="circle"></Progress>
    <Progress :percent="25" type="circle"></Progress>
    <Progress :percent="50" type="circle"></Progress>
    <Progress :percent="100" type="circle"></Progress>
`
code.status = `
    <Progress :percent="25"></Progress>
    <Progress :percent="45" status="active"></Progress>
    <Progress :percent="65" status="error"></Progress>
    <Progress :percent="100" status="success"></Progress>
    <Progress :percent="25" type="strip"></Progress>
    <Progress :percent="45" type="strip" status="active"></Progress>
    <Progress :percent="55" type="strip" status="error"></Progress>
    <Progress :percent="100" type="strip" status="success"></Progress>
`

export default code
