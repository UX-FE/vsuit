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
    <div :class="[prefix]" :style="{width:(width+'px'),height:(height+'px')}">
        <canvas :id="id+'_dial'" class="" :width="width*pixelTatio" :height="height*pixelTatio"></canvas>
        <canvas :id="id+'_pointer'" class="pointer"  :width="width*pixelTatio" :height="height*pixelTatio" :style="{position:'relative',top:('-'+(height)+'px')}"></canvas>
    </div>
</template>

<script>
    import { prefix } from '../var';
    const dialPrefix = prefix+'dial';
    export default {
        name: 'Dial',
        props:{
            id:{
                type:String,
                required:true
            },
            name:{
                type:String,
                default:''
            },
            minHeight:{
                type:Number,
                default:290
            },
            maxWidth:{
                type:Number,
                default:365
            },
            value:{
                type:Number
            },
            max:{
                type:Number,
                default:100
            },
            colors:{
                type:Object,
                default(){
                    return {
                        from:'#91a1f7',//渐变颜色
                        to:'#4b61d9',
                        text:'#4b61d9'
                    }
                }
            },
            scaleStyle:{
                type:Object,
                default(){
                    return {
                        lineWidth:'1',
                        strokeStyle:'#fff',
                        valueStyle:'#6b7c83',
                        scaleFont:'12px "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif',
                    }
                }
            },
            scale:{
                type:Array,
                default(){
                    return [0,'',20,'',40,'',60,'',80,'',100]
                }
            },
            evluateText:{
                type:Array,
                default(){
                    return ['感觉很差','感觉较差','感觉一般','感觉良好','很满意']
                }
            },
            pixel:{
                type:Number,
                default:1
            },
            maxRadius:{
                type:Number,
                default:165
            },
            cirY:{
                type:Number,
                default:210

            },
            noMove:{
                type:Boolean,
                default:false
            },
            targetText:{
                type:String,
                default:''
            },
            begin:{
                type:Number,
                default:22
            },
            end:{
                type:Number,
                default:158
            },
            nameSize:{
                type:Number,
                default:14
            },
            valueSize:{
                type:Number,
                default:90
            },
            valueFeight:{
                type:Number,
                default:400
            }
        },
        data() {
            return {
                width:480,
                height:260,
                prefix:dialPrefix,
                data:(this.value)?this.value:0,
                pixelTatio: this.pixel,
                per:(180+2*this.begin)/30,//每一刻度对应的度数
                du:(180+2*this.begin)/100,//以百分制为参照，百分制中的1分对应的度数
                allReg:(180+2*this.begin)
                // nameFont:'14px "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif',
                // valueFont:'400 90px "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif',
            };
        },
        water:{
            'value':'renderChart'
        },
        computed:{
            nameFont() {
                return this.nameSize+'px "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif'
            },
            valueFont(){
                return this.valueFeight+' '+this.valueSize+'px "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif'
            }
        },
        methods: {
            runData(val){
                if(val!==100){
                    return this.data*(100/this.max)
                }
                return 100;
            },
            renderChart (){
                if(this.id){
                    this.$nextTick(function(){
                        this.drawDial();
                    });
                }else{
                    console.error('no id');
                }
            },
            drawDial(){
                //获取画布
                var canvas=document.getElementById(this.id+'_dial');
                var ctx=canvas.getContext('2d');//获取2d上下文

                //获取中心坐标
                var cirX = (this.width/2);//外圆心x坐标，宽度的中心
                var cirY = (this.height<this.minHeight)?(this.height-80):this.cirY;//外圆心y坐标
                //获取半径
                var cirR;
                if(this.height<this.minHeight){//当图表当前高度小于最小高度时
                    cirR = (this.width<(this.height+45))?(this.width/2-20):(this.height/2+20);//外圆半径
                }else{//图表高度大于等于最小高度时
                    cirR = (this.width<(this.maxWidth))?(this.width/2-25):this.maxRadius;//外圆半径
                }
                //内环半径
                var cirR_inner = (cirR-20);

                // 绘制表盘外环
                ctx.beginPath();
                //逆时针画曲线，从22度逆时针画到158度（度数是从x正轴顺时针数）
                ctx.arc(cirX,cirY,cirR,this.begin/180*Math.PI,this.end/180*Math.PI,true);
                //设置渐变颜色
                var outlingrad = ctx.createLinearGradient((this.width/2-cirR),cirY,(this.width/2+cirR),cirY);
                outlingrad.addColorStop(0, this.colors.from);
                outlingrad.addColorStop(1, this.colors.to);
                ctx.strokeStyle = outlingrad;
                //外环宽度
                ctx.lineWidth='4';
                ctx.stroke();
                ctx.closePath();

                // 绘制内环
                ctx.beginPath();
                ctx.arc(cirX,cirY,cirR_inner,this.begin/180*Math.PI,this.end/180*Math.PI,true);
                //设置渐变颜色
                var innerlingrad = ctx.createLinearGradient((this.width/2-cirR),cirY,(this.width/2+cirR),cirY);
                innerlingrad.addColorStop(0, this.colors.from);
                innerlingrad.addColorStop(1, this.colors.to);
                ctx.strokeStyle = innerlingrad;
                //内环宽度
                ctx.lineWidth='15';
                ctx.stroke();
                ctx.closePath();

                //画笔平移到中心
                ctx.translate(cirX,cirY);

                // 绘制刻度
                /*
                共5段刻度，每段刻度6条，共30条刻度
                以中线为界，对称画刻度，到达第3条和第9条画长线，即画15次。
                */ 
                for(var i=0;i<15;i++){
                    if(i%6===3){
                        ctx.beginPath();
                        ctx.lineWidth=this.scaleStyle.lineWidth;
                        ctx.strokeStyle=this.scaleStyle.strokeStyle;
                        ctx.moveTo((cirR_inner-6)*Math.sin(this.per*i/180*Math.PI),-(cirR_inner-6)*Math.cos(this.per*i/180*Math.PI));
                        ctx.lineTo((cirR_inner+6)*Math.sin(this.per*i/180*Math.PI),-(cirR_inner+6)*Math.cos(this.per*i/180*Math.PI));
                        ctx.moveTo(-(cirR_inner-6)*Math.sin(this.per*i/180*Math.PI),-(cirR_inner-6)*Math.cos(this.per*i/180*Math.PI));
                        ctx.lineTo(-(cirR_inner+6)*Math.sin(this.per*i/180*Math.PI),-(cirR_inner+6)*Math.cos(this.per*i/180*Math.PI));
                        ctx.stroke();
                        ctx.closePath();
                    }else{
                        ctx.beginPath();
                        ctx.lineWidth=this.scaleStyle.lineWidth;
                        ctx.strokeStyle=this.scaleStyle.strokeStyle;
                        ctx.moveTo((cirR_inner-6)*Math.sin(this.per*i/180*Math.PI),-(cirR_inner-6)*Math.cos(this.per*i/180*Math.PI));
                        ctx.lineTo((cirR_inner)*Math.sin(this.per*i/180*Math.PI),-(cirR_inner)*Math.cos(this.per*i/180*Math.PI));
                        ctx.moveTo(-(cirR_inner-6)*Math.sin(this.per*i/180*Math.PI),-(cirR_inner-6)*Math.cos(this.per*i/180*Math.PI));
                        ctx.lineTo(-(cirR_inner)*Math.sin(this.per*i/180*Math.PI),-(cirR_inner)*Math.cos(this.per*i/180*Math.PI));
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
                
                //绘制刻度文字
                ctx.font=this.scaleStyle.font;
                ctx.fillStyle=this.scaleStyle.valueStyle;
                ctx.textAlign='center';
                ctx.textBaseline='bottom';
                //画布旋转到表盘左侧
                ctx.rotate((-this.per*15)/180*Math.PI);
                for(var i=0;i<11;i++){
                    ctx.fillStyle=i%2? '#6b7c83' : '#6b7c83';
                    ctx.fillText(this.scale[i],0,-(cirR_inner-28));
                    ctx.rotate((this.per*3)/180*Math.PI);
                }

                //绘制表盘名
                ctx.rotate(-this.per*18/180*Math.PI);
                ctx.fillStyle='#6b7c83';
                ctx.font=this.nameFont;
                ctx.fillText(this.name,0,-(cirR/2-8));

                // 绘制动画，重置幕布，重建一个canvas
                var pointer=document.getElementById(this.id+'_pointer');
                var ctxPoint=pointer.getContext('2d');

                var vm = this;
                function run(inputValue){
                    var timer;
                    var i=0;
                    ctxPoint.translate(cirX,cirY);
                    ctxPoint.fillStyle =vm.colors.text;
                    ctxPoint.strokeStyle=vm.colors.text;
                    // 设置最终的值,inputValue以百分制为参照
                    var finalValue=inputValue;
                    var value=0;
                    // 根据值的大小确定应该到达的位置
                    if(finalValue<0){
                        value = vm.per;
                    }else if(finalValue>=100){
                        value=vm.allReg;
                    }else{
                        value=finalValue*vm.du+vm.per;
                    }
                    //根据值的大小设置文字内容
                    var evluate='';
                    if(inputValue<vm.runData(vm.scale[2])){
                        evluate=vm.evluateText[0];
                    }else if(inputValue<vm.runData(vm.scale[4])){
                        evluate=vm.evluateText[1];
                    }else if(inputValue<vm.runData(vm.scale[6])){
                        evluate=vm.evluateText[2];
                    }else if(inputValue<vm.runData(vm.scale[8])){
                        evluate=vm.evluateText[3];
                    }else{
                        evluate=vm.evluateText[4];
                    }
                    ctxPoint.font=vm.valueFont;
                    ctxPoint.textAlign='center';
                    ctxPoint.shadowColor=vm.colors.text;

                    //所有的动画事件
                    function slideValue(){
                        ctxPoint.translate(-cirX,-cirY);
                        ctxPoint.clearRect(0,0,pointer.width,pointer.height);
                        ctxPoint.translate(cirX,cirY);
                        if(!vm.noMove){
                            i=i+vm.max/100;
                        }
                        if(i>=value){
                            i=value;
                        }
                        
                        // 绘制滚动元素
                        ctxPoint.beginPath();
                        ctxPoint.shadowBlur=10;
                        if(i<=0){
                            // ctxPoint.arc(-cirR*Math.sin((i+67)/180*Math.PI),(cirR*Math.cos((i+67)/180*Math.PI)-4),8,0,2*Math.PI,true);
                            // ctxPoint.fillStyle=vm.colors.from;
                            // ctxPoint.fill();
                            ctxPoint.arc(-cirR*Math.sin((i+67)/180*Math.PI),(cirR*Math.cos((i+67)/180*Math.PI)-4),8,0,2*Math.PI,true);
                            ctxPoint.fillStyle=vm.colors.text;
                            ctxPoint.fill();
                        }else if(i>=vm.allReg){
                            // ctxPoint.arc(-cirR*Math.sin((i+60)/180*Math.PI),(cirR*Math.cos((i+60)/180*Math.PI)-4),8,0,2*Math.PI,true);
                            // ctxPoint.fillStyle=vm.colors.from;
                            // ctxPoint.fill();
                            ctxPoint.arc(-cirR*Math.sin((i+60)/180*Math.PI),(cirR*Math.cos((i+60)/180*Math.PI)-4),8,0,2*Math.PI,true);
                            ctxPoint.fillStyle=vm.colors.text;
                            ctxPoint.fill();
                        }else{
                            // ctxPoint.arc(-cirR*Math.sin((i+60)/180*Math.PI),(cirR*Math.cos((i+60)/180*Math.PI)-4),8,0,2*Math.PI,true);
                            // ctxPoint.fillStyle=vm.colors.from;
                            // ctxPoint.fill();
                            ctxPoint.arc(-cirR*Math.sin((i+60)/180*Math.PI),(cirR*Math.cos((i+60)/180*Math.PI)-4),8,0,2*Math.PI,true);
                            ctxPoint.fillStyle=vm.colors.text;
                            ctxPoint.fill();
                        }
                        
                        // 填充分数和评分
                        ctxPoint.font=vm.valueFont;
                        var text=0;
                        if(i<vm.per){
                            text = 0;
                        }else if(i>vm.allReg){
                            text = vm.max;
                        }else{
                            text = (i-vm.per)*(vm.max/vm.allReg);
                            text = text>vm.max?vm.max:text/*parseInt(text).toFixed(0)*/;
                        }

                        ctxPoint.shadowBlur=0;
                        ctxPoint.fillText(parseInt(text,10),0,20);
                        ctxPoint.stroke();
                        ctxPoint.font='20px "Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif';
                        ctxPoint.stroke();
                        ctxPoint.closePath();
                        // 如果到达所需要的弧度，则停止，否则继续跳动
                        
                        if(i>=value){
                            setTimeout(function(){
                                ctxPoint.fillText(vm.targetText+evluate,0,55);
                            },0);
                            clearTimeout(timer);
                        }else{
                            timer=setTimeout(slideValue,text/finalValue*10);
                        }
                    }
                    //判断是否需要动画，不需要动画时直接到大终点
                    if(vm.noMove){
                        i=value;
                    }
                    //滚动
                     slideValue();
                }

                //判断传入的数据，判断异常设为0
                if(isNaN(parseInt(this.data))){
                    return 0;
                }
                //执行动画
                run(this.runData(this.data));
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
            //设置像素比率
            this.pixelTatio = this.getDevicePixelRatio(this.pixel);

            // //js扩展object
            // Object.extend = function(destination, source) {
            //     for (var property in source) {
            //         destination[property] = source[property];
            //     }
            //     return destination;
            // };
            //当有传入配置对象，扩展覆盖默认对象
            if(this.id){
                // Object.extend(this.opts,this.chart);
                //获取长宽
                if(document.getElementById(this.id)){
                    this.width = document.getElementById(this.id).offsetWidth;
                    this.height = document.getElementById(this.id).offsetHeight;
                }
            }
            //渲染图
            this.renderChart();
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
