<template>
    <div :class="wrapClasses" @mouseenter="showTooltip" @mouseleave="hideTooltip" v-clickoutside="handleClose">
        <div :class="targetClasses" ref="target"
            @click="handleClick"  @mousedown="handleFocus(false)"
            @mouseup="handleBlur(false)"><slot name="target"></slot></div>
        <transition name="fade">
            <div :class="tooltipClasses" ref="tooltip" :style="tooltipStyles" @mouseenter="showTooltip" @mouseleave="hideTooltip" v-show="show">
                <div :class="contentClasses">
                    <div :class="arrowClasses"></div>
                    <div :class="textClasses">
                        <div :class="titleClasses">
                            <slot name="title">{{ title }}</slot>
                        </div>
                        <div :class="bodyClasses">
                            <slot>{{ content }}</slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>

    import clickoutside from '../../directives/clickoutside';
    import TransferDom from '../../directives/transfer-dom';
    import { oneOf } from '../../utils/assist';

    import { prefix } from '../var';
    const bubblePrefix = prefix+'bubble';
    export default {
        name: 'Bubble',
        directives: { clickoutside, TransferDom },
        props: {
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'focus', 'hover']);
                },
                default: 'click'
            },
            type:{//类型
                type:String,
                validator (value) {
                    return oneOf(value, ['dark', 'light']);
                }
            },
            size:{
                type:String,
                validator (value) {
                    return oneOf(value, ['large', 'small']);
                }
            },
            direction:{
                type:String,
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'top'
            },
            title:{
                type:[String,Number],
                default:''
            },
            width: {
                type: [String, Number]
            },
            transfer: {
                type: Boolean,
                default: false
            },
            content:{
                type:[String,Number],
                default:''
            },
            delay:{
                type:Number,
                default:100
            }
        },
        data () {
            return {
                show:false,
                tooltipStyles:{}
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${bubblePrefix}`,
                    {
                        [`${bubblePrefix}-${this.type}`]: !!this.type,
                        [`${bubblePrefix}-${this.size}`]: !!this.size
                    }
                ];
            },
            targetClasses () {
                return [
                    `${bubblePrefix}-target`
                ];
            },
            tooltipClasses () {
                return [
                    `${bubblePrefix}-wrap`,
                    {
                        [`${bubblePrefix}-${this.direction}`]: !!this.direction
                    }
                ];
            },
            contentClasses(){
                return `${bubblePrefix}-content`;

            },
            titleClasses(){
                return `${bubblePrefix}-title`;

            },
            bodyClasses(){
                return `${bubblePrefix}-body`;

            },
            arrowClasses(){
                return `${bubblePrefix}-arrow`;
            },
            textClasses(){
                return `${bubblePrefix}-text`;

            }
        },
        methods: {
            getTop(height,width){
                var tooltipHeight = this.$refs.tooltip.offsetHeight;
                switch(this.direction){
                    case 'top-start':
                    return 'initial';
                    break;
                    case 'top':
                    return 'initial';
                    break;
                    case 'top-end':
                    return 'initial';
                    break;
                    case 'bottom-start':
                    return ((height)+'px');
                    break;
                    case 'bottom':
                    return ((height)+'px');
                    break;
                    case 'bottom-end':
                    return ((height)+'px');
                    break;
                    case 'left-start':
                    return '0';
                    break;
                    case 'left':
                    return ((height/2-tooltipHeight/2)+'px');
                    break;
                    case 'left-end':
                    return 'initial';
                    break;
                    case 'right-start':
                    return '0';
                    break;
                    case 'right':
                    return ((height/2-tooltipHeight/2)+'px');
                    break;
                    case 'right-end':
                    return 'initial';
                    break;
                    default:
                    break;
                }
            },
            getBotton(height,width){
                var tooltipHeight = this.$refs.tooltip.offsetHeight;
                switch(this.direction){
                    case 'bottom-start':
                    return 'initial';
                    break;
                    case 'bottom':
                    return 'initial';
                    break;
                    case 'bottom-end':
                    return 'initial';
                    break;
                    case 'top-start':
                    return ((height)+'px');
                    break;
                    case 'top':
                    return ((height)+'px');
                    break;
                    case 'top-end':
                    return ((height)+'px');
                    break;
                    case 'left-start':
                    return 'initial';
                    break;
                    case 'left':
                    return 'initial';
                    break;
                    case 'left-end':
                    return '0';
                    break;
                    case 'right-start':
                    return 'initial';
                    break;
                    case 'right':
                    return 'initial';
                    break;
                    case 'right-end':
                    return '0';
                    break;
                    default:
                    break;
                }
            },
            getLeft(height,width){
                var tooltipWidth = this.$refs.tooltip.offsetWidth;
                switch(this.direction){
                    case 'top-start':
                    return '0';
                    break;
                    case 'top':
                    return ((width/2-tooltipWidth/2)+'px');
                    break;
                    case 'top-end':
                    return 'initial';
                    break;
                    case 'bottom-start':
                    return '0';
                    break;
                    case 'bottom':
                    return ((width/2-tooltipWidth/2)+'px');
                    break;
                    case 'bottom-end':
                    return 'initial';
                    break;
                    case 'left-start':
                    return 'initial';
                    break;
                    case 'left':
                    return 'initial';
                    break;
                    case 'left-end':
                    return 'initial';
                    break;
                    case 'right-start':
                    return ((width)+'px');
                    break;
                    case 'right':
                    return ((width)+'px');
                    break;
                    case 'right-end':
                    return ((width)+'px');
                    break;
                    default:
                    break;
                }
            },
            getRight(height,width){
                var tooltipWidth = this.$refs.tooltip.offsetWidth;
                switch(this.direction){
                    case 'top-start':
                    return 'initial';
                    break;
                    case 'top':
                    return 'initial';
                    break;
                    case 'top-end':
                    return '0';
                    break;
                    case 'bottom-start':
                    return 'initial';
                    break;
                    case 'bottom':
                    return 'initial';
                    break;
                    case 'bottom-end':
                    return '0';
                    break;
                    case 'left-start':
                    return ((width)+'px');
                    break;
                    case 'left':
                    return ((width)+'px');
                    break;
                    case 'left-end':
                    return ((width)+'px');
                    break;
                    case 'right-start':
                    return 'initial';
                    break;
                    case 'right':
                    return 'initial';
                    break;
                    case 'right-end':
                    return 'initial';
                    break;
                    default:
                    break;
                }
            },
            getTooltipStyles(){
                if(this.$refs.target){
                    var height = this.$refs.target.offsetHeight;
                    var width = this.$refs.target.offsetWidth;
                    var place = this.direction;
                    return {
                        top:this.getTop(height,width),
                        bottom:this.getBotton(height,width),
                        left:this.getLeft(height,width),
                        right:this.getRight(height,width)
                    };
                }
                return {};
            },
            handleClose () {
                if (this.trigger !== 'click') {
                    return false;
                }
                this.show = false;
            },
            handleShow(val){
                this.show = (val)?val:!this.show;
                if(this.show){
                    this.$nextTick(()=>{
                        this.tooltipStyles = this.getTooltipStyles();
                    });
                }
            },
            handleClick () {
                if (this.trigger !== 'click') {
                    return false;
                }
                this.handleShow();
            },
            showTooltip(){
                if (this.trigger !== 'hover') {
                    return false;
                }
                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.handleShow(true);
                }, this.delay);
            },
            hideTooltip(){
                if (this.trigger !== 'hover') {
                    return false;
                }
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    if (!this.controlled) {
                        this.timeout = setTimeout(() => {
                            this.handleShow(false);
                        }, 100);
                    }
                }
            },
            handleFocus (fromInput = true) {
                if (this.trigger !== 'focus') {
                    return false;
                }
                this.handleShow(true);
            },
            handleBlur (fromInput = true) {
                if (this.trigger !== 'focus') {
                    return false;
                }
                this.handleShow(false);
            },
        },
        mounted () {
        },
        beforeDestroy () {
        }
    };
</script>