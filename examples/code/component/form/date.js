let code = {}

code.base = `
  <Date v-model="date1" placeholder="暂无日期"></Date>
`
code.clearable = `
  <Date v-model="date1" clearable></Date>
`
code.confirm = `
  <Date v-model="date1" :confirm=false></Date>
`
code.format = `
  <Date v-model="date1" date-format="YYYY~MM~DD"></Date>
`

code.js = `
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
  * @param {string}   dateFormat-默认为：'YYYY/MM/DD'
  *               比如：   
  *                   'YYYY/MM/DD' : '2017/01/11'
  *                   'YYYY~MM~DD' : '2017~01~11'
  *                   'YYYY-MM-DD' : '2017-01-11'
  *                   'YYYY年MM月DD日' : '2017年01月11日'
  *                   'YYYY/M/D' : '2017/1/11'
  *                   'YYYY~M~D' : '2017~1~11'
  *                   'YYYY-M-D' : '2017-1-11'
  *                   'YYYY年M月D日' : '2017年1月11日'  
  * 备注：   
  */
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
`

export default code
