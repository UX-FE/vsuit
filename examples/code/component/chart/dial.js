let code = {}

code.base = `
    <div class="chart-wrap" id="J_dialChart1" style="height:260px;width:440px">
        <Dial id="J_dialChart1" :value=0 name="您的分数" target-text="老师"></Dial>
    </div>
    <div class="chart-wrap" id="J_dialChart11" style="height:260px;width:440px">
        <Dial id="J_dialChart11" :value=20 name="您的分数" target-text="老师"></Dial>
    </div>
    <div class="chart-wrap" id="J_dialChart111" style="height:260px;width:440px">
        <Dial id="J_dialChart111" :value=60 name="您的分数" target-text="老师"></Dial>
    </div>
    <div class="chart-wrap" id="J_dialChart1111" style="height:260px;width:440px">
        <Dial id="J_dialChart1111" :value=85 name="您的分数" target-text="老师"></Dial>
    </div>
`

code.custom = `
    <div class="chart-wrap" id="J_dialChart2" style="height:260px;width:480px">
        <Dial id="J_dialChart2" :value=800 name="芝麻信用" :max=1000 
        :scale="[0,100,200,300,400,500,600,700,800,900,1000]" target-text="信用" 
        :evluate-text="['很差','较差','一般','良好','极好']"></Dial>
    </div>
`

code.active = `
    <div class="chart-wrap" id="J_dialChart3" style="height:260px;width:480px">
        <Dial id="J_dialChart3" :value=800 name="芝麻信用" no-move :max=1000 
        :scale="[0,100,200,300,400,500,600,700,800,900,1000]" target-text="信用" 
        :evluate-text="['很差','较差','一般','良好','极好']"></Dial>
    </div>
`


export default code
