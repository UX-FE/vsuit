<template>
    <div class="other">
        <div class="title1">
            WaterBall 水球
        </div>
        <div class="mItem">
            <div class="title2">
                
            </div>
            <div class="wrap">
                <div class="chart-wrap" :id="chart.id" :style="{height:(chart.height+'px'),width:(chart.width+'px')}">
                    <Dial :chart="chart"></Dial>
                </div>
                <div>
                    
                </div>
                <div class="q-title">代码示例：</div>
<pre>

    &lt;Dial :chart="chart"&gt;&lt;/Dial&gt;

</pre>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        chart:{
            name:'网速达标率',
            id:'J_dialChart1',
            width:480,
            height:260,
            minHeight:290,
            radius:210,
            data:89,
            noMove:false,
            dpr: 1,
            colors:{
                from:"#91a1f7",
                to:"#4b61d9",
                text:'#4b61d9'
            },
            targetText:'',
            scale:[0,'',20,'',40,'',60,'',80,'',100],
            evluateText:["非常惊喜","很满意","感觉良好","感觉不错","感觉一般"],
        }
    };
  },
  methods: {
  },
  mounted() {}
};
</script>
<style>
    .chart-wrap{
        margin:0 auto;
    }
</style>
