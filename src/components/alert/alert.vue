<template>
    <transition name="fade">
        <div :class="wrapClasses" v-if="visible">
            <div :class="contentClasses">
                <span :class="iconClasses" v-if="showIcon">
                    <slot name="icon">
                        <Icon :type="iconType"></Icon>
                    </slot>
                </span>
                <span :class="mainClasses"><slot></slot></span>
                <a :class="closeClasses" v-if="closable" @click="close">
                    <slot name="close">
                        <Icon type="ios-close-empty"></Icon>
                    </slot>
                </a>
            </div>
        </div>
    </transition>
</template>
<script>
    import { oneOf } from '../../utils/assist';
    import Icon from '../icon';

    import { prefix } from '../var';
    const alertPrefix = prefix+'alert';
    export default {
        name: 'Alert',
        props: {
            mode:{
                type:String,
                default:'normal',
                validator (value) {
                    return oneOf(value, ['normal','fix']);
                },
            },
            autoHidden:{
                type:Boolean,
                default:false
            },
            duration:{
                type:Number,
                default:1.5
            },
            value:{
                type:Boolean,
                default:true
            },
            type: {
                validator (value) {
                    return oneOf(value, ['success', 'info', 'warn', 'error']);
                },
                default: 'info'
            },
            closable: {
                type: Boolean,
                default: true
            },
            showIcon: {
                type: Boolean,
                default: false
            },
            top:{
                type:[Number,String],
                default:60
            },
            
        },
        data(){
            return {
                visible:this.value
            }
        },
        computed: {
            wrapClasses () {
                return [
                    `${alertPrefix}`,
                    `${alertPrefix}-${this.type}`,
                    {
                        [`${alertPrefix}-${this.mode}`]: !!this.mode,
                        [`${alertPrefix}-with-icon`]: this.showIcon
                    }
                ];
            },
            contentClasses () {
                return `${alertPrefix}-content`;
            },
            mainClasses () {
                return `${alertPrefix}-message`;
            },
            closeClasses () {
                return `${alertPrefix}-close`;
            },
            iconClasses () {
                return `${alertPrefix}-icon`;
            },
            iconType () {
                let type = '';

                switch (this.type) {
                    case 'success':
                        type = 'checkmark-circled';
                        break;
                    case 'info':
                        type = 'information-circled';
                        break;
                    case 'warn':
                        type = 'android-alert';
                        break;
                    case 'error':
                        type = 'close-circled';
                        break;
                }

                return type;
            }
        },
        watch:{
            value(val){
                this.visible = val;
            },
            visible(val){
                if(val){
                    this.clearCloseTimer();

                    if (this.autoHidden&&this.duration !== 0) {
                        this.closeTimer = setTimeout(() => {
                            this.close();
                        }, this.duration * 1000);
                    }
                }
                this.$emit('input',this.visible);
            }
        },
        methods:{
            close (e) {
                this.clearCloseTimer();
                this.visible = false;
                this.$emit('on-close', this.visible,e);
            },
            clearCloseTimer () {
                if (this.closeTimer) {
                    clearTimeout(this.closeTimer);
                    this.closeTimer = null;
                }
            },
        },
        mounted(){
            this.clearCloseTimer();

            // if (this.autoHidden&&this.duration !== 0) {console.log("111")
            //     this.closeTimer = setTimeout(() => {
            //         console.log("111111")
            //         this.close();
            //     }, this.duration * 1000);
            // }

        },
        beforeDestroy () {
            this.clearCloseTimer();
        },
        created(){
            if(this.mode==='fix'){
                this.visible = false;
            }
        }
    };
</script>