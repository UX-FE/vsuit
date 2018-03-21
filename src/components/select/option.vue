<template>
    <li :class="optionClasses" @click.stop="select" @mouseout.stop="blur"  v-show="!hidden">
        <slot>
            <template v-if="multiple">
                <template v-if="multiType==='check-box'">
                    <Checkbox v-model="selected">{{ getOptionLabel() }}</Checkbox>
                </template>
                <template v-else>
                    {{ getOptionLabel() }}
                    <Icon type="checkmark-round" class="check-icon"></Icon>
                </template>
            </template>
            <template v-else>
                {{ getOptionLabel() }}
            </template>
        </slot>
    </li>
</template>
<!--
    option:{
        label:'',
        value:'',
        disabled:false
    }
-->
<script>
    import Emitter from '../../mixins/emitter';
    import { findComponentUpward } from '../../utils/assist';
    import Icon from '../icon';
    import { prefix } from '../var';
    const optionPrefix = prefix+'option';

    export default {
        name: 'Option',
        componentName: 'Option',
        mixins: [ Emitter ],
        props: {
            option:{
                type:[Object,Number],
                required:true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                selected:false,
                multiple:false,
                multiType:'',
                forbiden:this.disabled,
                label:'',
                value:'',
                index:-1,
                isFocus:false,
                hidden: false,    // for search
                searchLabel: '',    // the value is slot,only for search
            };
        },
        computed: {
            optionClasses () {
                return [
                    `${optionPrefix}`,
                    {
                        [`${optionPrefix}-disabled`]: this.forbiden,
                        [`${optionPrefix}-selected`]: this.selected
                    }
                ];
            }
        },
        methods: {
            select () {console.log("select")
                if (this.forbiden) {
                    return false;
                }
                this.selected = !this.selected;
                this.dispatch('Select', 'on-select', this);
            },
            blur () {
                this.isFocus = false;
            },
            getOptionLabel(){
                return (typeof(this.option)==='string'||typeof(this.option)==='number') ? this.option : ((this.option.label)?this.option.label:this.option.value);
            },
            getOptionValue(){
                return (typeof(this.option)==='string'||typeof(this.option)==='number') ? this.option : ((this.option.value)?this.option.value:this.option.value);
            },
            // queryChange (val) {
            //     const parsedQuery = val.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
            //     this.hidden = !new RegExp(parsedQuery, 'i').test(this.searchLabel);
            // },
            // // 在使用函数防抖后，设置 key 后，不更新组件了，导致SearchLabel 不更新 #1865
            // updateSearchLabel () {
            //     this.searchLabel = this.$el.textContent;
            // }
        },
        mounted () {
            this.label = this.getOptionLabel();
            this.value = this.getOptionValue();
            this.dispatch('Select','append');
            // this.updateLabel();
            // this.updateOptions();
            // this.dispatch('FormSelect', 'append');
            // this.$on('on-select-close', () => {
            //     this.isFocus = false;
            // });
            // this.updateSearchLabel();
            // this.dispatch('Select', 'append');
            // this.$on('on-query-change', (val) => {
            //     this.queryChange(val);
            // });
        },
        watch:{
            disabled(val){
                this.forbiden  = val;
            }

        },
        created(){
            const Select = findComponentUpward(this, 'Select');
            if (Select){
                this.multiple = Select.type==='multiple';
                this.multiType = Select.multiType;
                
            }
            // this.parentS.options.push(this);
            // this.parentS.optionInstances.push(this);
        },
    };
</script>
