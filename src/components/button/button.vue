<template>
    <button :type="type" :class="classes" :disabled="disabled" @click="buttonClick">
        <span>
            <slot></slot>
        </span>
    </button>
</template>
<script>
import { oneOf } from '../../utils/assist';
const prefix = 'uxk-btn';
export default {
    name: 'BaseButton',
    props: {
        type:{//按钮类型
            type:String,
            validator (value) {
                return oneOf(value, ['default','primary', 'ghost','text', 'info', 'success', 'warning', 'error']);
            }

        },
        shape:{//按钮形状
            type:String,
            validator (value) {
                return oneOf(value, ['square','circle', 'circle-outline']);
            }
        },
        size:{//按钮大小
            type:String,
            validator (value) {
                return oneOf(value, ['small', 'large', 'middle']);
            }
        },
        status:String,//按钮状态（是否加载中）
        disabled: Boolean,//按钮是否不可用
    },
    data () {
        return {
        };
    },
    computed: {
        classes () {
            return [
                `${prefix}`,
                {
                    [`${prefix}-${this.type}`]: !!this.type,
                    [`${prefix}-${this.shape}`]: !!this.shape,
                    [`${prefix}-${this.size}`]: !!this.size
                }
            ];
        }
    },
    methods: {
        buttonClick(event){
            this.$emit('click', event);
        }
    },
    mounted() {
    }
};
</script>
