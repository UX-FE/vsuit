<template>
    <div class="other">
        <div class="title1">
            v-date 日期选择
        </div>
        <div class="mItem">
            <div class="title2">
                
            </div>
            <div class="wrap">
                <v-date :option="date"></v-date>
                <!-- <div class="remark"> -->
                    <pre>
<div class="comment">
/**
    * 调用方式
    * @param {object}  option-配置对象【必填】    
    */
</div>
&lt;v-date :option="date"&gt;&lt;/v-date&gt;
<div class="comment">
/**
    * 配置对象：date
    * @param {boolean}  toggle-是否展开：true-是；false-否【必填】
    * @param {string}   date-初始化选中日期，格式：YYYY-MM-DD 或者 YYYY-MM，比如："2017-01-01" 或者 "2017-01"
    * @param {integer}  year-初始化展开显示的年，比如（2017年）：2017【当date为空时，为必填】
    * @param {integer}  month-初始化展开显示的月，比如（一月）：1【当date为空时，为必填】
    * @param {string}   minDate-最小可选日期，格式：YYYY-MM-DD，比如："2015-01-01"
    * @param {string}   maxDate-最大可选日期，格式：YYYY-MM-DD，比如："2017-12-31"
    * @param {string}   placeholder-占位符，比如："暂无"
    * @param {boolean}  hasConfirmBtn-是否有确认按钮：true-是；false-否
    * @param {boolean}  clearDate-是否可清空日期：true-是；false-否
    * @param {boolean}  selectMonth-是否可选择某月：true-是；false-否
    * 备注：
    *     
    *     
    */
</div>
date:{
    toggle:false,
    date:"",
    year:new Date(moment(new Date()).format('YYYY/MM/DD')).getFullYear(),
    month:new Date(moment(new Date()).format('YYYY/MM/DD')).getMonth()+1,
    minDate:"2015-01-01",
    maxDate:moment().subtract(0, 'months').format('YYYY-MM-DD'),
    placeholder:"暂无",
    hasConfirmBtn:true,
    clearDate:true,
    selectMonth:true,
}
                    </pre>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "vDate",
  data() {
    return {
        date:{
            toggle:false,
            date:"2017-01-01",
            year:new Date(moment(new Date()).format('YYYY/MM/DD')).getFullYear(),
            month:new Date(moment(new Date()).format('YYYY/MM/DD')).getMonth()+1,
            minDate:"2015-01-01",//最小可选时限为2015-01
            maxDate:moment().subtract(0, 'months').format('YYYY-MM-DD'),//最大可选时限往未来推10年
            placeholder:"暂无",
            hasConfirmBtn:true,//有确认按钮
            clearDate:false,//能够清除日期
            selectMonth:false,//能够选择月份
        }
    };
  },
  components: {
  },
  watch: {
  },
  methods: {
    init() {
      this.getData();
    },
    getData() {}
  },
  mounted() {}
};
</script>
