<!--
    chart-dial 表盘
    传入数据格式：
    /*
         配置对象：chart
         @param {string}  name-表盘数据名
         @param {string}   id-唯一标志id【必填】
         @param {integer}  width-表盘宽度（单位px）
         @param {integer}  height-表盘长度（单位px）
         @param {integer}   data-数据【必填】
         @param {boolean}   noMove-是否更新
         @param {object}  colors-颜色对象，详见如下所示
         @param {string}  targetText-显示文字
         @param {object}  scale-刻度数
         @param {object}  evluateText-评价文字数组
         备注：
    */
    chart:{
        name:'网速达标率',
        id:'J_dialChart1',
        width:480,
        height:260,
        data:89,
        noMove:false,
        dpr: 1,
        colors:{
            from:"#91a1f7",//渐变开始颜色
            to:"#4b61d9",//渐变结束颜色
            text:'#4b61d9'//数字和文字颜色
        },
        targetText:'',
        scale:[0,'',20,'',40,'',60,'',80,'',100],
        evluateText:["非常惊喜","很满意","感觉良好","感觉不错","感觉一般"],
    }
-->
<template>
    <div class="dial" :style="{width:(opts.width+'px'),height:(opts.width+'px')}">
        <canvas :id="opts.id+'_dial'" class="" :width="opts.width*opts.pixelTatio" :height="opts.height*opts.pixelTatio"></canvas>
        <canvas :id="opts.id+'_pointer'" class="pointer"  :width="opts.width*opts.pixelTatio" :height="opts.height*opts.pixelTatio" :style="{position:'relative',top:('-'+(opts.height)+'px')}"></canvas>
    </div>
</template>

<script>
export default {
    name: 'Dial',
    props: ['chart'],
    data() {
        return {
            opts:{
                name:'网速达标率',
                id:'J_dialChart1',
                width:480,
                height:260,
                minHeight:290,
                maxWidth:365,
                cirY:210,
                maxRadius:165,
                data:89,
                noMove:false,
                pixelTatio: 1,
                colors:{
                    from:"#91a1f7",//渐变颜色
                    to:"#4b61d9",
                    text:'#4b61d9'
                },
                targetText:'',
                scale:[0,'',20,'',40,'',60,'',80,'',100],
                scaleStyle:{
                    lineWidth:'1',
                    strokeStyle:'#fff',
                    valueStyle:'#6b7c83',
                    scaleFont:'12px "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif',
                },
                nameFont:'14px "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif',
                valueFont:'400 90px "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif',
                evluateText:["非常惊喜","很满意","感觉良好","感觉不错","感觉一般"]
            }
        }
    },
    water:{
        'opts':'renderChart'
    },
    methods: {
        renderChart (){
            //设置像素比率
            this.opts.pixelTatio = this.getDevicePixelRatio(this.opts.dpr);
            if(this.opts.id){
                this.$nextTick(function(){
                    this.drawDial();
                });
            }else{
                console.error("no id");
            }
        },
        drawDial(){
            //获取画布
            var canvas=document.getElementById(this.opts.id+'_dial');
            var ctx=canvas.getContext('2d');//获取2d上下文

            //获取中心坐标
            var cirX = (this.opts.width/2);//外圆心x坐标，宽度的中心
            var cirY = (this.opts.height<this.opts.minHeight)?(this.opts.height-80):this.opts.cirY;//外圆心y坐标
            //获取半径
            var cirR;
            if(this.opts.height<this.opts.minHeight){//当图表当前高度小于最小高度时
                cirR = (this.opts.width<(this.opts.height+45))?(this.opts.width/2-20):(this.opts.height/2+20);//外圆半径
            }else{//图表高度大于等于最小高度时
                cirR = (this.opts.width<(this.opts.maxWidth))?(this.opts.width/2-25):this.opts.maxRadius;//外圆半径
            }
            //内环半径
            var cirR_inner = (cirR-20);

            // 绘制表盘外环
            ctx.beginPath();
            ctx.arc(cirX,cirY,cirR,22/180*Math.PI,158/180*Math.PI,true);
            //设置渐变颜色
            var outlingrad = ctx.createLinearGradient((this.opts.width/2-cirR),cirY,(this.opts.width/2+cirR),cirY);
            outlingrad.addColorStop(0, this.opts.colors.from);
            outlingrad.addColorStop(1, this.opts.colors.to);
            ctx.strokeStyle = outlingrad;
            //外环宽度
            ctx.lineWidth='4';
            ctx.stroke();
            ctx.closePath();

            // 绘制内环
            ctx.beginPath();
            ctx.arc(cirX,cirY,cirR_inner,22/180*Math.PI,158/180*Math.PI,true);
            //设置渐变颜色
            var innerlingrad = ctx.createLinearGradient((this.opts.width/2-cirR),cirY,(this.opts.width/2+cirR),cirY);
            innerlingrad.addColorStop(0, this.opts.colors.from);
            innerlingrad.addColorStop(1, this.opts.colors.to);
            ctx.strokeStyle = innerlingrad;
            //内环宽度
            ctx.lineWidth='15';
            ctx.stroke();
            ctx.closePath();

            //画笔平移到中心
            ctx.translate(cirX,cirY);

            // 绘制刻度
            for(var i=0;i<17;i++){
                if(i%6===3){
                    ctx.beginPath();
                    ctx.lineWidth=this.opts.scaleStyle.lineWidth;
                    ctx.strokeStyle=this.opts.scaleStyle.strokeStyle;
                    ctx.moveTo((cirR_inner-6)*Math.sin(7.5*i/180*Math.PI),-(cirR_inner-6)*Math.cos(7.5*i/180*Math.PI));
                    ctx.lineTo((cirR_inner+6)*Math.sin(7.5*i/180*Math.PI),-(cirR_inner+6)*Math.cos(7.5*i/180*Math.PI));
                    ctx.moveTo(-(cirR_inner-6)*Math.sin(7.5*i/180*Math.PI),-(cirR_inner-6)*Math.cos(7.5*i/180*Math.PI));
                    ctx.lineTo(-(cirR_inner+6)*Math.sin(7.5*i/180*Math.PI),-(cirR_inner+6)*Math.cos(7.5*i/180*Math.PI));
                    ctx.stroke();
                    ctx.closePath();
                }else{
                    ctx.beginPath();
                    ctx.lineWidth=this.opts.scaleStyle.lineWidth;
                    ctx.strokeStyle=this.opts.scaleStyle.strokeStyle;
                    ctx.moveTo((cirR_inner-6)*Math.sin(7.5*i/180*Math.PI),-(cirR_inner-6)*Math.cos(7.5*i/180*Math.PI));
                    ctx.lineTo((cirR_inner)*Math.sin(7.5*i/180*Math.PI),-(cirR_inner)*Math.cos(7.5*i/180*Math.PI));
                    ctx.moveTo(-(cirR_inner-6)*Math.sin(7.5*i/180*Math.PI),-(cirR_inner-6)*Math.cos(7.5*i/180*Math.PI));
                    ctx.lineTo(-(cirR_inner)*Math.sin(7.5*i/180*Math.PI),-(cirR_inner)*Math.cos(7.5*i/180*Math.PI));
                    ctx.stroke();
                    ctx.closePath();
                }
            }
            
            //绘制刻度文字
            ctx.font=this.opts.scaleStyle.font;
            ctx.fillStyle=this.opts.scaleStyle.valueStyle;
            ctx.textAlign='center';
            ctx.textBaseline='bottom';
            //画布旋转到表盘左侧
            ctx.rotate((-7.5*15)/180*Math.PI);
            for(var i=0;i<11;i++){
                ctx.fillStyle=i%2? "#6b7c83" : "#6b7c83";
                ctx.fillText(this.opts.scale[i],0,-(cirR_inner-28));
                ctx.rotate((7.5*3)/180*Math.PI);
            }

            //绘制表盘名
            ctx.rotate(-7.5*18/180*Math.PI);
            ctx.fillStyle="#6b7c83";
            ctx.font=this.opts.nameFont;
            ctx.fillText(this.opts.name,0,-(cirR/2-8));

            // 绘制动画，重置幕布，重建一个canvas
            var pointer=document.getElementById(this.opts.id+'_pointer');
            var ctxPoint=pointer.getContext('2d');

            var vm = this;
            function run(inputValue){
                var timer;
                var i=0;
                ctxPoint.translate(cirX,cirY);
                ctxPoint.fillStyle =vm.opts.colors.text;
                ctxPoint.strokeStyle=vm.opts.colors.text;
                // 设置最终的值
                var finalValue=inputValue;
                var value=0;
                // 根据值的大小确定应该到达的位置
                if(finalValue<0){
                    value = 7.5;
                }else if(finalValue>100){
                    value=232.5;
                }else{
                    value=finalValue*2.25+7.5;
                }
                //根据值的大小设置文字内容
                var evluate='';
                if(inputValue<vm.opts.scale[2]){
                    evluate=vm.opts.evluateText[0];
                }else if(inputValue<vm.opts.scale[4]){
                    evluate=vm.opts.evluateText[1];
                }else if(inputValue<vm.opts.scale[6]){
                    evluate=vm.opts.evluateText[2];
                }else if(inputValue<vm.opts.scale[8]){
                    evluate=vm.opts.evluateText[3];
                }else{
                    evluate=vm.opts.evluateText[4];
                }
                ctxPoint.font=vm.opts.valueFont;
                ctxPoint.textAlign='center';
                ctxPoint.shadowColor=vm.opts.colors.text;

                // 所有的动画事件
                function slideValue(){
                    ctxPoint.translate(-cirX,-cirY);
                    ctxPoint.clearRect(0,0,pointer.width,pointer.height);
                    ctxPoint.translate(cirX,cirY);
                    i++;
                    // 绘制滚动元素
                    ctxPoint.beginPath();
                    ctxPoint.shadowBlur=5;
                    if(i<=7.5){
                        ctxPoint.arc(-cirR*Math.sin((i+67)/180*Math.PI),(cirR*Math.cos((i+67)/180*Math.PI)-4),8,0,2*Math.PI,true);
                        ctxPoint.fillStyle=vm.opts.colors.from;
                        ctxPoint.fill();
                        ctxPoint.arc(-cirR*Math.sin((i+67)/180*Math.PI),(cirR*Math.cos((i+67)/180*Math.PI)-4),8,0,2*Math.PI,true);
                        ctxPoint.fillStyle=vm.opts.colors.text;
                        ctxPoint.fill();
                    }else if(i>=232.5){
                        ctxPoint.arc(-cirR*Math.sin((i+60)/180*Math.PI),(cirR*Math.cos((i+60)/180*Math.PI)-4),8,0,2*Math.PI,true);
                        ctxPoint.fillStyle=vm.opts.colors.from;
                        ctxPoint.fill();
                        ctxPoint.arc(-cirR*Math.sin((i+60)/180*Math.PI),(cirR*Math.cos((i+60)/180*Math.PI)-4),8,0,2*Math.PI,true);
                        ctxPoint.fillStyle=vm.opts.colors.text;
                        ctxPoint.fill();
                    }else{
                        ctxPoint.arc(-cirR*Math.sin((i+60)/180*Math.PI),(cirR*Math.cos((i+60)/180*Math.PI)-4),8,0,2*Math.PI,true);
                        ctxPoint.fillStyle=vm.opts.colors.from;
                        ctxPoint.fill();
                        ctxPoint.arc(-cirR*Math.sin((i+60)/180*Math.PI),(cirR*Math.cos((i+60)/180*Math.PI)-4),8,0,2*Math.PI,true);
                        ctxPoint.fillStyle=vm.opts.colors.text;
                        ctxPoint.fill();
                    }
                    
                    // 填充分数和评分
                    ctxPoint.font='400 90px "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif';
                    var text=0;
                    if(i<7.5){
                        text = 0;
                    }else if(i>232.5){
                        text = 100;
                    }else{
                        text = (i-7.5)*(20/45);
                        text = text>100?100:text/*parseInt(text).toFixed(0)*/;
                    }

                    ctxPoint.shadowBlur=0;
                    ctxPoint.fillText(parseInt(text,10),0,20);
                    ctxPoint.stroke();
                    ctxPoint.font='20px "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif';
                    ctxPoint.stroke();
                    ctxPoint.closePath();
                    // 如果到达所需要的弧度，则停止，否则继续跳动
                    if(i>value){
                        setTimeout(function(){
                            ctxPoint.fillText(vm.opts.targetText+evluate,0,55);
                        },0);
                        clearTimeout(timer);
                    }else{
                        timer=setTimeout(slideValue,text/finalValue*10);
                    }
                }
                //判断是否需要动画，不需要动画时直接到大终点
                if(vm.opts.noMove){
                    i=value;
                }
                //滚动
                slideValue();
            }

            //判断传入的数据，判断异常设为0
            if(isNaN(parseInt(this.opts.data))){
                return 0;
            }
            //执行动画
            run(parseInt(this.opts.data,10));
        },
        /*
        获取设备的像素比率值
        */
        getDevicePixelRatio(dpr){
            /*接收外部传入设置的dpr,web默认传入2，其他设备通过判断devicePixelRatio*/		
            dpr = dpr ? dpr : window.devicePixelRatio || 1;
            return dpr;
        }
    },
    mounted() {
        //js扩展object
        Object.extend = function(destination, source) {
            for (var property in source) {
                destination[property] = source[property];
            }
            return destination;
        }
        //当有传入配置对象，扩展覆盖默认对象
        if(this.chart){
            Object.extend(this.opts,this.chart);
            //获取长宽
            if(document.getElementById(this.chart.id)){
                this.opts.width = document.getElementById(this.chart.id).offsetWidth;
                this.opts.height = document.getElementById(this.chart.id).offsetHeight;
            }
        }
        //渲染图
        this.renderChart();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
