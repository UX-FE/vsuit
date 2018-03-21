let code = {}

code.base = `
    <Bubble trigger="hover" title="这是标题" content="我是气泡，你看到我了">
        <BaseButton slot="target" type="primary">hover</BaseButton>
    </Bubble>
    <Bubble trigger="click" title="这是标题" content="我是气泡，你看到我了">
        <BaseButton slot="target" type="primary">click</BaseButton>
    </Bubble>
    <Bubble trigger="focus" title="这是标题" content="我是气泡，你看到我了">
        <BaseButton slot="target" type="primary">focus</BaseButton>
    </Bubble>
`

code.type = `
    <Bubble type="dark" title="这是标题" content="type is dark">
        <BaseButton slot="target">dark</BaseButton>
    </Bubble>
    <Bubble type="light" title="这是标题" content="type is light">
        <BaseButton slot="target">light</BaseButton>
    </Bubble>
`

code.direction = `
    <Bubble direction="top-start" content="direction is top-start">
        <BaseButton slot="target">top-start</BaseButton>
    </Bubble>
    <Bubble direction="top" content="direction is top">
        <BaseButton slot="target">top</BaseButton>
    </Bubble>
    <Bubble direction="top-end" content="direction is top-end">
        <BaseButton slot="target">top-end</BaseButton>
    </Bubble>
    <br/>
    <br/>
    <Bubble direction="bottom-start" content="direction is bottom-start">
        <BaseButton slot="target">bottom-start</BaseButton>
    </Bubble>
    <Bubble direction="bottom" content="direction is bottom">
        <BaseButton slot="target">bottom</BaseButton>
    </Bubble>
    <Bubble direction="bottom-end" content="direction is bottom-end">
        <BaseButton slot="target">bottom-end</BaseButton>
    </Bubble>
    <br/>
    <br/>
    <Bubble direction="left-start" content="direction is left-start">
        <BaseButton slot="target">left-start</BaseButton>
    </Bubble>
    <Bubble direction="left" content="direction is left">
        <BaseButton slot="target">left</BaseButton>
    </Bubble>
    <Bubble direction="left-end" content="direction is left-end">
        <BaseButton slot="target">left-end</BaseButton>
    </Bubble>
    <br/>
    <br/>
    <Bubble direction="right-start" content="direction is right-start">
        <BaseButton slot="target">right-start</BaseButton>
    </Bubble>
    <Bubble direction="right" content="direction is right">
        <BaseButton slot="target">right</BaseButton>
    </Bubble>
    <Bubble direction="right-end" content="direction is right-end">
        <BaseButton slot="target">right-end</BaseButton>
    </Bubble>
`

code.custom = `
    <Bubble direction="bottom" content="direction is right-start">
        <BaseButton slot="target">?</BaseButton>
        <div>
            <table>
                <tr>
                    <td>Q1</td>
                    <td>A1</td>
                </tr>
                <tr>
                    <td>Q2</td>
                    <td>A2</td>
                </tr>
            </table>
        </div>
    </Bubble>
`

export default code
