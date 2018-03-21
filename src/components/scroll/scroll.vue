<template>
  <div :class="[prefix]">
    <div ref="wrap" :style="styles" @scroll="handleScroll()" :class="classes" 
          @mouseenter="handleEnter"
          @mouseleave="handleLeave">
      <div ref="resize" :class="viewClasses" :style="viewStyles">
        <slot></slot>
      </div>
      <!-- <template v-if="back">

      </template> -->
    </div >
    <template v-if="!native">
        <Bar v-if="showX" ref="xbar"
        :move="moveX" 
        :size="sizeWidth"></Bar>
      <Bar v-if="showY" ref="ybar"
        vertical
        :move="moveY" 
        :size="sizeHeight"></Bar>
    </template>
  </div>
</template>
<script>
    import { on, off } from '../../utils/dom';
  import {prefix} from '../var'
  const scrollPrefix = prefix + 'scroll'
  import Bar from './bar';
  function scrollbarWidth(className) {
    let scrollBarWidth;
      if (scrollBarWidth !== undefined) return scrollBarWidth;
    
      const outer = document.createElement('div');
      outer.className = className;
      outer.style.visibility = 'hidden';
      outer.style.width = '100px';
      outer.style.position = 'absolute';
      outer.style.top = '-9999px';
      document.body.appendChild(outer);
    
      const widthNoScroll = outer.offsetWidth;
      outer.style.overflow = 'scroll';
    
      const inner = document.createElement('div');
      inner.style.width = '100%';
      outer.appendChild(inner);
    
      const widthWithScroll = inner.offsetWidth;
      outer.parentNode.removeChild(outer);
      scrollBarWidth = widthNoScroll - widthWithScroll;
    
      return scrollBarWidth;
    };
  function toObject(arr) {
    var res = {};
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res;
  };
  export default {
    name: 'Scroll',
    components: { Bar },
    props: {
      native: {
        type:Boolean,
        default:false
      },
      wrapStyle: {},
      wrapClass: {},
      viewClass: {},
      viewStyle: {},
      noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
      showY:{
        type:Boolean,
        default:true
      },
      showX:{
        type:Boolean,
        default:false
      },
      always:{
        type:Boolean,
        default:false
      },
      back:{
        type:Boolean,
        default:false
      },
      // autoX:{
      //   type:Boolean,
      //   default:false
      // },
      maxHeight:Number
    },
    data() {
      return {
        prefix:scrollPrefix,
        sizeWidth: '0',
        sizeHeight: '0',
        moveX: 0,
        moveY: 0,
        gutter:0,
        isAways:this.always
      };
    },
    computed: {
      wrap() {
        return this.$refs.wrap;
      },
      styles(){
        let style = this.wrapStyle;
        if (this.gutter) {
          const gutterWith = `-${this.gutter}px`;
          const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`;
          const maxH = `max-height: ${this.maxHeight}px;`;
          const autoX = `overflow-x:auto;`;

          if (Array.isArray(this.wrapStyle)) {
            style = toObject(this.wrapStyle);
            if(!!this.maxHeight){
              style.maxHeight = this.maxHeight+'px';
            }
            if(!this.maxHeight){
              style.overflowX = 'auto';
            }
            style.marginRight = style.marginBottom = gutterWith;
          } else if (typeof this.wrapStyle === 'string') {
            style += gutterStyle;
            if(!!this.maxHeight){
              style += maxH;
            }
            if(!this.maxHeight){
              style += autoX;
            }
          } else {
            style = gutterStyle;
            if(!!this.maxHeight){
              style += maxH;
            }
            if(!this.maxHeight){
              style += autoX;
            }
          }
        }
        return style;
      },
      classes () {
        return [
          `${scrollPrefix}-wrap`,
          {

          }
        ]
      },
      viewClasses() {
        return [
          `${scrollPrefix}-view`,
          {

          }
        ]
      },
      viewStyles(){
        return this.viewStyle;
      }

    },
    methods: {
      handleEnter(){
        if(this.$refs.xbar){
          this.$refs.xbar.opacity = 1;
        }
        if(this.$refs.ybar){
          this.$refs.ybar.opacity = 1;
        }
      },
      handleLeave(){
        if(this.$refs.xbar){
          this.$refs.xbar.opacity = 0;
        }
        if(this.$refs.ybar){
          this.$refs.ybar.opacity = 0;
        }
      },
      handleScroll() {
        const wrap = this.wrap;

        this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
        this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
      },

      update() {
        let heightPercentage, widthPercentage;
        const wrap = this.wrap;
       
        if (!wrap) return;


        heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight);
        widthPercentage = (wrap.clientWidth * 100 / wrap.scrollWidth);

        this.sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '';
        this.sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '';
      }
    },

    mounted() {
      if (this.native) return;
      this.$nextTick(this.update);
      if(!this.noresize){
          on(window, 'resize', this.update);
      }
    },

    beforeDestroy() {
      if (this.native) return;
      if(!this.noresize){
          off(window, 'resize', this.update);
      }
    },
    created(){
      if(!this.native){
        this.gutter = scrollbarWidth(scrollPrefix+'-wrap');
      }
    }

  }
</script>