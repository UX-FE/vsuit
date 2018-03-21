<template>
    <div :class="wrapClasses">
        <div v-if="showOpts" :class="infoClasses">
            <Select v-model="currentPageSize" @on-select="handleSelect">
                <Option v-for="(item,index) in pageOpts" :key="index" :option="item">
                </Option>
            </Select>
        </div>
        <ul :class="pagingClasses">
            <li :class="[prefix + '-pre']" @click="pre">
                <slot name="pre"><span><Icon class="arrow-left"></Icon></span></slot>
            </li>
            <li :class="pageClasses(1)" @click="page(1)"><span>1</span></li>
            <li v-if="currentPage - 3 > 1" :class="[prefix + '-prefold']" @click="preFold">
                <span class="fold-body"><slot name="prefold"><Icon class="arrow-double-left"></Icon></slot></span>
            </li>
            <li v-if="currentPage - 2 > 1" :class="pageClasses(currentPage-2)" @click="page(currentPage - 2)"><span>{{ currentPage - 2 }}</span></li>
            <li v-if="currentPage - 1 > 1" :class="pageClasses(currentPage-1)" @click="page(currentPage - 1)"><span>{{ currentPage - 1 }}</span></li>
            <li v-if="currentPage != 1 && currentPage != totalPages" :class="pageClasses(currentPage)" @click="page(currentPage)"><span>{{ currentPage }}</span></li> 
            <li v-if="currentPage + 1 < totalPages" :class="pageClasses(currentPage+1)" @click="page(currentPage + 1)"><span>{{ currentPage + 1 }}</span></li>
            <li v-if="currentPage + 2 < totalPages" :class="pageClasses(currentPage+2)" @click="page(currentPage + 2)"><span>{{ currentPage + 2 }}</span></li>
            <li v-if="currentPage + 3 < totalPages" :class="[prefix + '-nextfold']" @click="nextFold">
                <span class="fold-body"><slot name="nextfold"><Icon class="arrow-double-right"></Icon></slot></span>
            </li>
            <li v-if="totalPages>1" :class="pageClasses(totalPages)" @click="page(totalPages)"><span>{{totalPages}}</span></li>
            <li :class="[prefix + '-next']" @click="next">
                <slot name="next"><span><Icon class="arrow-right"></Icon></span></slot>
            </li>
        </ul>
        <div v-if="showJump&&totalPages>1" :class="jumpClasses">
            <div :class="[prefix + '-edit']">
                第<input class="pageEdit" v-model="editPage" autocomplete="off" spellcheck="false" @keyup.enter="jumpPage(editPage)">页
            </div>
            <div :class="[prefix + '-search']" @click="jumpPage(editPage)">
                GO
            </div>
        </div>
    </div>
</template>
<!--
    page:{
		"limit": 10,//一页显示多少条
		"slider": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],//分页数组
		"lastPage": false,//是否是最后一页
		"hasNextPage": true,//是否有下一页
		"nextPage": 2,//下一页
		"hasPrePage": false,//是否有上一页
		"endRow": 10,//当前页结束行标
		"prePage": 1,//上一页
		"totalCount":102,//总数
		"page": 1,//当前页
		"startRow": 1,//当前页开始行标
		"firstPage": true,//是否第一页
		"offset": 0,//与第一页的便宜
		"totalPages": 10//总页数
    }
-->
<script>
    import Icon from '../icon';
    import Select from '../select';
    import { findComponentUpward, oneOf } from '../../utils/assist';
    import { prefix } from '../var';
    const pagePrefix = prefix+'page';

    export default {
        name: 'Page',
        props: {
            current:{
                type:Number,
                default:1
            },
            pageSize:{
                type:Number,
                default:10
            },
            pageOpts:{
                type:Array,
                default(){
                    return [10,20,30,40]
                }
            },
            noborder:{
                type:Boolean,
                default:false
            },
            type:{
                type:String,
                default:'',
                validator (value) {
                    return oneOf(value, ['', '']);
                }
            },
            size:{
                type:String,
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            pages:{
                type:Object,
                required:true,
                default(){
                    return {};
                }
            },
            showOpts:{
                type:Boolean,
                default:false
            },
            showJump:{
                type:Boolean,
                default:false
            }
        },
        data () {
            return {
                prefix:pagePrefix,
                currentPage:this.current,
                currentPageSize:this.pageSize,
                editPage:''
            };
        },
        computed: {
            totalPages () {
                return (this.pages.totalPages!==undefined)?this.pages.totalPages:0
            },
            wrapClasses () {
                return [
                    `${pagePrefix}`,
                    {
                        [`${pagePrefix}-noborder`]: !!this.noborder,
                        [`${pagePrefix}-${this.size}`]: !!this.size,
                        [`${pagePrefix}-${this.type}`]: !!this.type
                    }
                ];
            },
            infoClasses () {
                return `${pagePrefix}-info`;
            },
            pagingClasses () {
                return `${pagePrefix}-paging`;
            },
            jumpClasses(){
                return `${pagePrefix}-jump`;

            }
        },
        mounted () {

        },
        methods: {
            pageClasses (page) {
                return [
                    `${pagePrefix}-item`,
                    {
                        [`${pagePrefix}-item-active`]:(page===this.currentPage)
                    }
                ];
            },
            handleSelect(){
                this.$emit("on-change-size",this.currentPageSize);
            },
            page (page) {
                if(this.currentPage!=page){
                    this.currentPage = page;
                    this.$emit('on-change',page);
                }
            },
            jumpPage(page){
                if(isNaN(page)||!page||(page>this.totalPages)){
                    return false
                }
                this.page(page);
            },
            pre () {
                if(this.currentPage<=1){
                    return false;
                }
                this.page(this.currentPage - 1);
            },
            next () {
                if(this.currentPage>=this.totalPages){
                    return false;
                }
                this.page(this.currentPage + 1);
            },
            preFold (){
                if(this.currentPage-5>0){
                    this.page(this.currentPage-5);
                }else{
                    this.page(1);
                }
            },
            nextFold (){
                if(this.currentPage+5>this.totalPages){
                    this.page(this.totalPages);
                }else{
                    this.page(this.currentPage+5);
                }
                
            }
        },
        watch:{
            current (val) {
                this.currentPage = val;
            },
            pageSize (val) {
                this.currentPageSize = val;
            }
        }
    };
</script>
