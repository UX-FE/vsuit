<template>
    <div :class="wrapClasses" v-clickoutside="handleClose">
        <div :class="selectionClasses" @click="toggleDrop" @mouseenter="hover = true"  @mouseleave="hover = false">
            <input type="hidden" :name="name" v-model="currentValue"/>
            <slot name="selection">
                <div :class="prefix+'-selection-name'">
                    {{currentLabel}}
                </div>
                <Icon v-if="!!clearable&&(this.currentValue!=='')&&hover" type="close-circled" class="close-icon" @on-click-icon="clearSelect"></Icon>
                <Icon v-if="!clearable||(!!clearable&&(this.currentValue!=='')&&!hover)" type="arrow-down-b" :class="{'is-reverse':(show)}"></Icon>
            </slot>
        </div>
        <transition :name="transitionName" @before-enter="handleMenuEnter" @after-leave="handleDestroy">
            <div v-show="showDrop" :class="dropClasses" ref="popper">
                <div :class="[prefix+'-drop-body']">
                    <Scroll :max-height="maxHeight" ref="scrollbar">
                        <div v-show="status==='noData'" :class="nodataClasses"><slot name="nodata"></slot></div>
                        <div v-show="status==='hasData'" :class="listClasses">
                            <div v-show="checkAll" :class="[prefix+'-check-wrap']">
                                <Checkbox v-model="checkedAll" @on-change="handleCheckAll">全选</Checkbox>
                            </div>
                            <slot></slot>
                            <div v-show="judge" :class="[prefix+'-judge']">
                                <BaseButton type="primary" size="small" @on-click-btn="handleSubmit">确定</BaseButton>
                                <BaseButton size="small" @on-click-btn="handleCancel">取消</BaseButton>
                            </div>
                        </div>
                        <div v-show="status==='loading'" :class="loadingClasses"><slot name="loading"></slot></div>
                    </Scroll>
                </div>
                <div v-if="bubble" :class="[prefix+'-drop-arrow']"></div>
            </div>
        </transition>
    </div>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import { oneOf } from '../../utils/assist';
    import clickoutside from '../../directives/clickoutside';

    import Icon from '../icon';
    import Scroll from '../scroll';
    import Checkbox from '../checkbox';
    import BaseButton from '../button';
    import { prefix } from '../var';
    const selectPrefix = prefix+'select';

    export default {
        name: 'Select',
        mixins: [ Emitter ],
        directives: { clickoutside },
        props: {
            type:{
                type:String,
                default:'single',
                validator (value) {
                    return oneOf(value, ['single', 'multiple']);
                }
            },
            size:{
                type:String,
                validator (value) {
                    return oneOf(value, ['large', 'small']);
                }
            },
            status:{
                type:String,
                default:'hasData',
                validator (value) {
                    return oneOf(value, ['hasData', 'loading', 'noData']);
                }
            },
            judge:{
                type:Boolean,
                default:false
            },
            multiType:{
                type:String,
                default:'',
                validator (value) {
                    return oneOf(value, ['check-box','']);
                }
            },
            checkAll:{
                type:Boolean,
                default:false
            },
            checkRange:{
                type:Array,
                default(){
                    return [];
                },
            },
            title:{
                type:String,
                default:''
            },
            fixTitle:{
                type:Boolean,
                default:false,
            },
            maxHeight:{
                type:Number,
                default:200
            },
            showRow:{
                type:Number,
                default:5
            },
            clearable:{
                type:Boolean,
                default:false
            },
            search:{

            },
            operate:{

            },
            value:{
                type:[String,Number,Array],
                default:''
            },
            label:{
                type:[String,Number,Array],
                default:''
            },
            disabled:{
                type:Boolean,
                default:false
            },
            placeholder:{
                type:String
            },
            col:{
                type:Number,
                default:1  
            },
            direction:{
                type:String,
                default:'bottom',
                validator (value) {
                    return oneOf(value, ['top', 'bottom']);
                },
            },
            bubble:{
                type:Boolean,
                default:false
            },
            remote:{
                type:Boolean,
                default:false
            },
            name:String
        },
        data () {
            return {
                prefix:selectPrefix,
                options: [],
                optionInstances: [],
                show:false,
                focus:false,
                hover:false,
                checkedAll:false,
                current:this.type==='multiple'?[]:{},//这里存储选中的option
                currentLabel:'',//当前的label
                currentValue:this.value,//当前的value
                selectedSingle: this.value, //单选确定的值
                selectedMultiple: [],//多选确定的值
                // scrollStyles:{}
            };
        },
        watch: {
            value(val){
                this.currentValue = val;
            },
            currentValue(val){
                if(this.type==='multiple'){
                    this.updateMultipleSelected();
                }else{
                    this.updateSingleSelected();
                }
                this.$emit('input', this.currentValue);
                this.checkedAll = (this.type==='multiple'&&(this.currentValue.length===this.options.length))?true:false;
            },
            currentLabel(val){
                this.currentText();
            },
            // height(val){
            //     if(!!val){
            //         this.getScrollStyles()
            //     }
            // }
        },
        computed: {
            wrapClasses () {
                return [
                    `${selectPrefix}`,
                    {
                        [`${selectPrefix}-${this.type}`]: !!this.type,
                        [`${selectPrefix}-${this.size}`]: !!this.size,
                        [`${selectPrefix}-disabled`]: this.disabled,

                    }
                ];
            },
            selectionClasses(){
                return [
                    `${selectPrefix}-selection`,
                    {
                        ['isFocus']:this.focus
                    }
                ];

            },
            dropClasses () {
                return [
                    `${selectPrefix}-drop`,
                    {
                        [`${selectPrefix}-bubble`]: !!this.bubble,

                    }
                ];
            },
            nodataClasses(){
                return [
                    `${selectPrefix}-nodata`
                ];

            },
            listClasses(){
                return [
                    `${selectPrefix}-list`
                ];

            },
            loadingClasses(){
                return [
                    `${selectPrefix}-loading`
                ];

            },
            showDrop(){
                if(this.disabled){
                    return false;
                }
                if(this.show){
                    return true;
                }else{
                    return false;

                }
            },
            transitionName () {
                return this.deraction === 'bottom' ? 'slide-up' : 'slide-down';
            },
        },
        methods: {
            // getScrollStyles(){
            //     if(!!this.height){
            //         this.scrollStyles = {
            //             height:this.height+'px'
            //         }
            //     }else{
            //         this.scrollStyles = {}
            //     }
            // },
            handleMenuEnter(){
                this.$nextTick(() => this.updateScroll());
            },
            handleDestroy() {
                // this.$refs.popper && this.$refs.popper.doDestroy();
            },
            updateScroll(){
                this.$refs.scrollbar && this.$refs.scrollbar.update();
            },
            currentText(){
                if(this.fixTitle){
                    this.currentLabel =  this.title;
                    return;
                }
                if(this.currentValue===''){
                    this.currentLabel =  this.placeholder;
                }else if(this.currentLabel===''){
                    this.currentLabel = this.currentValue;
                }
                if(this.type==='multiple'&&!this.currentValue.length){
                    this.currentLabel = this.placeholder;
                }
            },
            handleSubmit(){
                if(this.type==='multiple'&&!!this.checkRange && this.currentValue.length<this.checkRange[0]){
                    return false;
                }
                this.$emit("on-submit",this.currentValue);
                this.toggleDrop();
            },
            handleCancel(){
                this.toggleDrop();
            },
            handleCheckAll(){
                if (this.type==='multiple' && Array.isArray(this.currentValue)) {
                    if(!this.checkedAll){
                        this.currentValue = [];
                    }else{
                        let tempValue = [];
                        for (let i = 0; i < this.options.length; i++) {
                            const option = this.options[i];
                            tempValue.push(option.value);
                        }
                        this.currentValue = tempValue;
                    }
                }
            },
            slotChange(){
                this.options = [];
                this.optionInstances = [];
            },
            toggleDrop(){
                if(this.disabled){
                    return false;
                }
                this.show = !this.show;
                this.focus = !this.focus;
            },
            change(option){
                this.currentValue = option.value;
                this.currentLabel = option.label;
                this.toggleDrop();
            },
            hideDrop(){
                this.show = false;
                this.focus = false;
            },
            handleClose(){
                this.hideDrop();
            },
            clearSelect(){
                this.currentValue = '';
                this.currentLabel = '';
            },
            // find option component
            findChild (cb) {
                const find = function (child) {
                    const name = child.$options.componentName;

                    if (name) {
                        cb(child);
                    } else if (child.$children.length) {
                        child.$children.forEach((innerChild) => {
                            find(innerChild, cb);
                        });
                    }
                };

                if (this.optionInstances.length) {
                    this.optionInstances.forEach((child) => {
                        find(child);
                    });
                } else {
                    this.$children.forEach((child) => {
                        find(child);
                    });
                }
            },
            updateLabel(){

            },
            updateOptions(slot = false){
                let options = [];
                let index = 1;
                
                this.findChild((child) => {
                    options.push({
                        value: child.value,
                        label: (child.label === undefined) ? child.$el.textContent : child.label
                    });
                    child.index = index++;

                    this.optionInstances.push(child);
                });

                this.options = options;

                if (!this.remote) {
                    this.updateSingleSelected(true, slot);
                    this.updateMultipleSelected(true, slot);
                }
            },
            updateSingleSelected (init = false, slot = false) {
                const type = typeof this.value;

                if (type === 'string' || type === 'number') {
                    let findModel = false;

                    for (let i = 0; i < this.options.length; i++) {
                        if (this.currentValue === this.options[i].value) {
                            this.selectedSingle = this.options[i].label;
                            this.currentLabel = this.options[i].label;
                            findModel = true;
                            break;
                        }
                    }

                    if (slot && !findModel) {
                        this.currentValue = '';
                    }
                }

                this.toggleSingleSelected(this.currentValue, init);
            },
            toggleSingleSelected(value, init = false){
                if(this.type!=='multiple'){
                    let label = '';

                    this.findChild((child) => {
                        if (child.value === value) {
                            child.selected = true;
                            label = (child.label === undefined) ? child.$el.innerHTML : child.label;
                        } else {
                            child.selected = false;
                        }
                    });

                    this.hideDrop();

                    if (!init) {
                        if (typeof(this.value)!=='string'&&typeof(this.value)!=='number') {
                            this.$emit('on-change', {
                                value: value,
                                label: label
                            });
                            this.dispatch('FormItem', 'on-form-change', {
                                value: value,
                                label: label
                            });
                        } else {
                            this.$emit('on-change', value);
                            this.dispatch('FormItem', 'on-form-change', value);
                        }
                    }

                }
            }, 
            updateMultipleSelected (init = false, slot = false) {
                if (this.type==='multiple' && Array.isArray(this.currentValue)) {
                    let selected = this.remote ? this.selectedMultiple : [];

                    for (let i = 0; i < this.currentValue.length; i++) {
                        const model = this.currentValue[i];

                        for (let j = 0; j < this.options.length; j++) {
                            const option = this.options[j];

                            if (model === option.value) {
                                selected.push({
                                    value: option.value,
                                    label: option.label
                                });
                            }
                        }
                    }

                    const selectedArray = [];
                    const selectedObject = {};
                    const selectedLabels = [];

                    selected.forEach(item => {
                        if (!selectedObject[item.value]) {
                            selectedArray.push(item);
                            selectedLabels.push(item.label);
                            selectedObject[item.value] = 1;
                        }
                    });
                    this.currentLabel = selectedLabels.join(",");

                    // #2066
                    this.selectedMultiple = this.remote ? this.currentValue.length ? selectedArray : [] : selected;

                    if (slot) {
                        let selectedModel = [];

                        for (let i = 0; i < selected.length; i++) {
                            selectedModel.push(selected[i].value);
                        }

                        // if slot change and remove a selected option, emit user
                        if (this.currentValue.length === selectedModel.length) {
                            // this.slotChangeDuration = true;
                        }

                        this.currentValue = selectedModel;
                    }
                }
                this.toggleMultipleSelected(this.currentValue, init);
            },
            // to select option for multiple
            toggleMultipleSelected (value, init = false) {
                if (this.type==='multiple') {
                    let hybridValue = [];
                    for (let i = 0; i < value.length; i++) {
                        hybridValue.push({
                            value: value[i]
                        });
                    }

                    this.findChild((child) => {
                        const index = value.indexOf(child.value);

                        if (index >= 0) {
                            child.selected = true;
                            hybridValue[index].label = (child.label === undefined) ? child.$el.innerHTML : child.label;
                        } else {
                            child.selected = false;
                        }
                    });

                    if (!init) {
                        if (this.labelInValue) {
                            this.$emit('on-change', hybridValue);
                            this.dispatch('FormItem', 'on-form-change', hybridValue);
                        } else {
                            this.$emit('on-change', value);
                            this.dispatch('FormItem', 'on-form-change', value);
                        }
                    }
                }
            },
            appendChange(){
                if(!this.remote){//非远程调用

                }else{//远程调用
                    this.findChild((child) => {
                        // child.updateSearchLabel();   // #1865
                        child.selected = this.type==='multiple' ? this.currentValue.indexOf(child.value) > -1 : this.currentValue === child.value;
                    });
                }
                this.slotChange();
                this.updateOptions(true);
            },
            handleSelect(option){console.log("handleSelect")
                if(this.currentValue===option.value){
                    this.hideDrop();
                }else{
                    if(this.type==='multiple'){console.log("multiple")
                        const index = this.currentValue.indexOf(option.value);
                        if (index >= 0) {
                            this.currentValue.splice(this.currentValue.indexOf(option.value),1);
                        } else {
                            this.currentValue.push(option.value);
                        }
                        //选择选项后，检查是否有选择数目范围，到达范围其余不可选
                        if(!!this.checkRange && this.currentValue.length>=this.checkRange[1]){
                            this.findChild((child) => {
                                if(this.currentValue.indexOf(child.value)>-1){
                                    child.forbiden = false;
                                }else{
                                    child.forbiden = true;
                                }
                            });
                        }else{
                            this.findChild((child) => {
                                child.forbiden = false;
                            });
                        }
                        console.log(this.currentValue)
                        this.checkedAll = (this.currentValue.length===this.options.length)?true:false;
                    }else{
                        this.currentValue = option.value;
                        this.hideDrop();
                    }
                }
            }
        },
        mounted(){
            this.updateOptions();
            this.currentText();
            this.$on('on-select', this.handleSelect);
            this.$on('append', this.appendChange());
        },
        created(){
            // this.getScrollStyles();
        }
    };
</script>
