<template>
    <div :class="wrapClasses">
        <div v-if="!!title" :class="[prefix + '-title']" ref="title"><slot name="title">{{title}}</slot></div>
        <div :class="tableClasses">
            <div v-if="!hiddenThead" :class="[prefix + '-header']" ref="header" :style="headerStyle">
                <slot name="header">
                    <table>
                        <thead>
                            <tr>
                                <th v-for="(item,index) in thead" :key="index" :style="cellClasses(index,true)" @click="sorting(index)">
                                    <div class="cell">
                                        <template v-if="!!multiSelect&&!!item.type&&item.type==='selection'">
                                            <span class="checkbox-wrap" :class="{active:(selectedAll)}" @click="checkAll">
                                                <span class="checkbox"></span>
                                            </span>
                                        </template>
                                        <template v-else-if="!!expand&&!!item.type&&item.type==='expand'">
                                            
                                        </template>
                                        <template v-else>
                                            <span class="" v-html="item.name"></span>
                                            <span v-if="item.sort" class="sort-wrap">
                                                <Icon type="arrow-up-c" :class="{up:true,active: currentSort === 'asc'&& currentSortType===item.column}"></Icon>
                                                <Icon type="arrow-down-c" :class="{down:true,active: currentSort === 'desc'&& currentSortType===item.column}"></Icon>
                                            </span>
                                        </template>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </slot>
            </div>
            <div :class="[prefix + '-body']" ref="body" :style="bodyStyles">
                <slot name="body">
                    <table>
                        <tbody>
                            <slot name="tr">
                                <template v-for="(item,index) in data">
                                    <tr @click="clickTr(index)" :key="index" :class="{active:(currentRow===index)}">
                                        <td v-for="(itm,i) in thead" :key="i" :style="cellClasses(i)">
                                            <div class="cell">
                                                <template v-if="!!order&&i===0">
                                                    <span>{{index+1}}</span>
                                                </template>
                                                <template v-else-if="!!multiSelect&&i===0">
                                                    <span class="checkbox-wrap" :class="{active:(currentMultiSelected.indexOf(index)>-1)}" @click="checkTr(index)">
                                                        <span class="checkbox"></span>
                                                    </span>
                                                </template>
                                                <template v-else-if="!!expand&&i===0">
                                                    <span class="expand-warp" :class="{expanded:currentExpandShow.indexOf(index)>-1}">
                                                        <Icon type="ios-arrow-right"></Icon>
                                                    </span>
                                                </template>
                                                <template v-else>
                                                    <span v-html="item[itm.column]"></span>
                                                </template>
                                            </div>  
                                        </td>
                                    </tr>
                                    <tr v-if="!!expand&&(currentExpandShow.indexOf(index)>-1)" :key="index+'_expand'" :class="[prefix + '-expand']">
                                        <td :colspan="thead.length">
                                             <Expand :key="index" :row="item" :render="getExpandRender" :index="index"></Expand>
                                        </td>
                                    </tr>
                                </template>
                                <template v-if="showSum">
                                    <slot name="sum">
                                    </slot>
                                </template>
                            </slot>
                        </tbody>
                    </table>
                </slot>
            </div>
            <div :class="[prefix + '-footer']" ref="footer">
                <slot name="footer">
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
    import { oneOf, getStyle, deepCopy, getScrollBarSize } from '../../utils/assist';
    import Expand from './expand.js';
    import Icon from '../icon';
    import { prefix } from '../var';
    const tablePrefix = prefix+'table';
    export default {
        name: 'Table',
        components: { Expand},
        props: {
            type:{
                type:String,
                validator (value) {
                    return oneOf(value, ['strip','zebra', 'bordered']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            order:{
                type:Boolean,
                default:false
            },
            clickable:{
                type:Boolean,
                default:false
            },
            multiSelect:{
                type:Boolean,
                default:false
            },
            showSum:{
                type:Boolean,
                default:false,
            },
            expand:{
                type:Function
            },
            title:{
                type:String
            },
            hiddenThead:{
                type:Boolean,
                default:false
            },
            thead:{
                type:Array,
                default(){
                    return [];
                }
            },
            data:{
                type:Array,
                default(){
                    return [];
                }
            },
            width: {
                type: [Number, String]
            },
            height: {
                type: [Number, String]
            },
            sortType:{
                type:String
            },
            sort:{
                type:String,
                default:'desc' 
            }
        },
        data () {
            return {
                prefix : tablePrefix,
                currentSortType:this.sortType,
                currentSort:this.sort,
                currentRow:0,
                currentMultiSelected:[],
                selectedAll:false,
                currentExpandShow:[],
                scrollBarWidth: getScrollBarSize(),
                headerStyle:{},
            };
        },
        computed: {
            getExpandRender () {
                let render = function () {
                    return '';
                };
                if(this.expand){
                    render = this.expand;
                }
                return render;
            },
            wrapClasses () {
                return [
                    `${tablePrefix}-wrap`
                ];
            },
            tableClasses(){
                return [
                    `${tablePrefix}`,
                    {
                        [`${tablePrefix}-${this.type}`]: !!this.type,
                        [`${tablePrefix}-clickable`]: !!this.clickable||!!this.expand,
                        [`${tablePrefix}-fixed-title`]: !!this.height,
                    }
                ];
            },
            bodyStyles(){
                let style ={};
                if(!!this.height){
                    const headerHeight = (this.$refs.header)?this.$refs.header.offsetHeight:0;
                    style.height = `${this.height-headerHeight}px`;
                    style.overflow = 'auto';
                }
                return style;
            }
        }, 
        watch:{
            height(){
                this.getHeaderStyles();
            }
        },
        methods: {
            getHeaderStyles(){
                let style = {};
                if(!!this.height){
                    style.paddingRight = `${this.scrollBarWidth}px`;
                }
                this.headerStyle = style;
            },
            cellClasses(index,isTh){
                return {
                    width:(!!this.thead[index].width)?(this.thead[index].width+'px'):'initial',
                    cursor:(isTh&&this.thead[index].sort)?'pointer':'default'
                };
            },
            sorting(index){
                if(!this.thead[index].sort){
                    return false;
                }
                if(this.currentSortType === this.thead[index].column){
                    this.currentSort = (this.currentSort==='desc')?'asc':'desc';
                }else{
                    this.currentSortType = this.thead[index].column;
                    this.currentSort = 'desc';
                }
                this.$emit('on-sorting',this.thead[index]);
            },
            clickTr(index){
                if(!this.clickable&&!this.expand){
                    return false
                }
                this.currentRow = index;
                if(!!this.expand){
                    if(this.currentExpandShow.indexOf(index)>-1){
                        this.currentExpandShow.splice(this.currentExpandShow.indexOf(index),1);
                    }else{
                        this.currentExpandShow.push(index);
                    }
                }
                this.$emit('on-click-row',index);
            },
            checkAll(){
                if(!this.multiSelect){
                    return false;
                }
                this.selectedAll = !this.selectedAll;
                this.currentMultiSelected = [];
                if(this.selectedAll){
                    for(var i = 0;i<this.data.length;i++){
                        this.currentMultiSelected.push(i);
                    }

                }
            },
            checkTr(index){
                if(!this.multiSelect){
                    return false;
                }
                if(this.currentMultiSelected.indexOf(index)>-1){
                    this.currentMultiSelected.splice(this.currentMultiSelected.indexOf(index),1);
                }else{
                    this.currentMultiSelected.push(index);
                }
            }
        },
        mounted() {
            this.getHeaderStyles();
        }
    };
</script>
