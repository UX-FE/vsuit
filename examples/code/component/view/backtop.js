let code = {}

code.base = `
    <BackTop target="J_contentMain"></BackTop>
`

code.position = `
    <BackTop target="J_contentMain" bottom="100" right="100"></BackTop>
`
code.speed = `
    <BackTop target="J_contentMain" :bottom=10 :right=10 :duration=200></BackTop>
`
code.height = `
    <BackTop target="J_contentMain" bottom="100" right="100"></BackTop>
`
code.custom = `
    <BackTop target="J_contentMain" :bottom=180 :right=180>
        <div class="custom-top">TOP</div> 
    </BackTop>
`

export default code
