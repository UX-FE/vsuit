<template>
    <div class="datePicker" 
        :id = "option.id" 
        :class="[option.class,{active:option.toggle,focus:option.focus}]"
        @click="stopPropagation">        
        <div class="inputWrap" @click="toggled">
            <input type="text" readonly="readonly" :value="date" />
            <span v-if="option.placeholder && date===''"
                    class="placeholder" v-text="option.placeholder"></span>
            <i class="icon-f-date"></i>
            <i :class="{'icon-f-down':!option.toggle,'icon-f-up':option.toggle}"></i>
            <i v-if="option.clearDate&&date!==''" class="icon-f-clear" @click="clearDate"></i>
        </div>
        <transition enter-active-class="animated fadeInDown fast" leave-active-class="animated fadeOutUp fast">
            <div class="pickerWrap" v-if="option.toggle">
                <div class="header">
                    <div class="left">
                        <i class="icon-f-left" :class="{'disable':lastNextDisable.lastMonth}" @click="toYearOrMonth('lastMonth')"></i>
                        <div class="yearSelect" @click="stopProp">
                            <span class="year" @click="toggledSelect('yearToggle')">
                                {{year}}年
                                <i :class="{'icon-f-down':!yearSelect.toggle,'icon-f-up':yearSelect.toggle}"></i>
                            </span>
                            <ul class="list ps-white" v-show="yearSelect.toggle" id="J_yearList">
                                <li v-for="(y,idx) in yearSelect.maxYear-yearSelect.minYear+1" 
                                    :class="{active:y+yearSelect.minYear-1===year}"
                                    :key="idx"
                                    @click="selectedYearOrMonth('yearToggle',y+yearSelect.minYear-1)">
                                    {{y+yearSelect.minYear-1}}月
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="right">
                        <div class="monthSelect"  @click="stopProp">
                            <span class="month" @click="toggledSelect('monthToggle');">
                                {{month}}月
                                <i :class="{'icon-f-down':!monthSelect.toggle,'icon-f-up':monthSelect.toggle}"></i>
                            </span>
                            <ul class="list ps-white" v-show="monthSelect.toggle" id="J_monthList">
                                <li v-for="(m,idx) in 12" 
                                    :class="{active:m===month}"
                                    :key="idx"
                                    v-if="new Date(year+'/'+(m<10?('0'+m):m)+'/01').getTime()>=new Date(minDate).getTime() && 
                                    new Date(year+'/'+(m<10?('0'+m):m)+'/01').getTime()<=new Date(maxDate).getTime()"
                                    @click="selectedYearOrMonth('monthToggle',m)">
                                    {{m}}月
                                </li>
                            </ul>
                        </div>
                        <i class="icon-f-right" :class="{'disable':lastNextDisable.nextMonth}" @click="toYearOrMonth('nextMonth')"></i>
                    </div>
                </div>
                <div class="body">
                    <table>
                        <thead>
                            <th v-for="(itm,idx) in datePicker.week" :key="idx">
                                {{itm}}
                            </th>
                        </thead>
                        <tbody>
                            <tr v-for="(item,idx) in dateRows" :key="idx">
                                <td v-for="(itm,i) in item" :key="i" :class="{'thisMonth':itm.thisMonth,
                                                                                                                    'curDay':itm.curDay,
                                                                                                                    'disableDay':itm.disableDay}" @click="selected(itm)">
                                    <span>
                                        <label>{{itm.text}}</label>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="footer" v-if="option.hasConfirmBtn">
                    <div class="inputs" 
                        :class="{placeholder:date===''}">
                        <span v-text="selectedDate===''?'请选择日期':selectedDate.replace(/-/g,'/')"></span>
                    </div>
                    <div class="btns">
                        <span class="btn btn-primary btn-blue" @click="confirmed">确定</span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'Date',
        props: ['option','curKey'],
        data() {
            return {
                datePicker: {
                    week: ['日', '一', '二', '三', '四', '五', '六']
                },
                date: "",//当前日
                year:new Date(moment(new Date()).format('YYYY/MM/DD')).getFullYear(),
                month:new Date(moment(new Date()).format('YYYY/MM/DD')).getMonth()+1,
                selectedDate:"",//当前选中
                //最小可选日期
                minDate: moment().subtract(1, 'days').format('YYYY/MM/DD'),
                //最大可选日期 //默认为当天
                maxDate: moment().subtract(1, 'days').format('YYYY/MM/DD'),
                yearToggle: false,//年选择是否展开
                monthToggle: false//月选择是否展开
            }
        },
        computed: {
            //展现的日历数组对象
            dateRows() {
                //声明当前年月
                return this.rows(this.year, this.month);
            },
            //是否可上翻/下翻 年/月
            lastNextDisable() {
                let lastNextDisable = {
                    lastMonth: false,
                    nextMonth: false
                }
                //声明当前年月
                const year = this.year;
                const month = this.month;

                //声明最小/大可选日期的毫秒数
                const minTime = this.getTimestamp(this.minDate);
                const maxTime = this.getTimestamp(this.maxDate);

                //判断上一月的最后一天是否小于最小可选日期
                const lastMonthDay = new Date(month === 1 ? year - 1 : year, month === 1 ? 12 : month - 1, 0).getTime();
                if (lastMonthDay < minTime) {
                    lastNextDisable.lastMonth = true;
                }

                //判断下一月的第一天是否超过最大可选日期
                const nextMonthDay = new Date(month === 12 ? year + 1 : year, month === 12 ? 1 : month, 1).getTime();
                if (nextMonthDay > maxTime) {
                    lastNextDisable.nextMonth = true;
                }
                return lastNextDisable;
            },
            //年选择
            yearSelect() {
                let yearSelect = {
                    toggle: this.yearToggle,
                    maxYear: new Date(this.maxDate).getFullYear(),
                    minYear: new Date(this.minDate).getFullYear()
                }
                return yearSelect;
            },
            //月选择
            monthSelect() {
                let monthSelect = {
                    toggle: this.monthToggle,
                    maxMonth: new Date(this.maxDate).getMonth() + 1,
                    minMonth: new Date(this.minDate).getMonth() + 1
                }
                return monthSelect;
            }
        },
        methods: {
            //点击document，组件以外的部分，收起产品选择，需要阻止组件冒泡
            stopPropagation(e) {
                this.toggledSelect();
                e.stopPropagation();
            },
            stopProp(e){
                e.stopPropagation();
            },
            /*根据年月，生成此月份日历数组对象：
                day中 code：该日秒数；text：该日；
                    thisMonth：是否在该月中；
                    curDay：是否在当前日期区间中；
                    disableDay：不可选日期；
            */
            rows(year, month) {
                //声明第一天是礼拜几
                const firstDayWeek = (new Date(year, month - 1,0)).getDay();
                //声明当前月有多少天
                const monthDays = (new Date(year, month, 0)).getDate();
                //声明上一个月有多少天
                const lastMonthDays = (new Date(month === 1 ? year - 1 : year, month === 1 ? 12 : month - 1, 0)).getDate();
                //定义渲染日历的数组
                let rows = [[], [], [], [], [], []];
                //总共6行
                for (var i = 0; i < 6; i++) {
                    //定义当前行
                    let row = rows[i];
                    //总共week.length列（即一周7天，7列）
                    for (let [index, item] of this.datePicker.week.entries()) {
                        //定义当前天
                        let day = {
                            text: "",
                            code: ""
                        }
                        if (i === 0) {
                            //第一行，考虑上一个月最后几天
                            if (firstDayWeek === 0) {
                                //第一天即为周日，不考虑上一个月
                                day = {
                                    text: i * 7 + index + 1,
                                    code: new Date(year, month - 1, i * 7 + index + 1).getTime(),
                                    thisMonth: true
                                }
                            } else {
                                //第一周不为周日，填充上一个月的最后几天
                                if (index < firstDayWeek) {
                                    //当前日为上一个月的，进行填充
                                    day = {
                                        text: lastMonthDays - firstDayWeek + index + 1,
                                        code: new Date(month === 1 ? year - 1 : year, month === 1 ? 11 : month - 1 - 1, lastMonthDays - firstDayWeek + index + 1).getTime(),
                                    }
                                } else {
                                    //否则为当前月的天
                                    day = {
                                        text: i * 7 + index + 1 - firstDayWeek,
                                        code: new Date(year, month - 1, i * 7 + index + 1 - firstDayWeek).getTime(),
                                        thisMonth: true
                                    }
                                }
                            }
                        } else {
                            //(最后一、两行)如果超出了当前月，考虑下一个月前几天
                            if (i * 7 + index + 1 - firstDayWeek > monthDays) {
                                //下一个月的前几天
                                day = {
                                    text: i * 7 + index + 1 - firstDayWeek - monthDays,
                                    code: new Date(month === 12 ? year + 1 : year, month === 12 ? 1 : month + 1 - 1, i * 7 + index + 1 - firstDayWeek - monthDays).getTime()
                                }
                            } else {
                                //当前月
                                day = {
                                    text: i * 7 + index + 1 - firstDayWeek,
                                    code: new Date(year, month - 1, i * 7 + index + 1 - firstDayWeek).getTime(),
                                    thisMonth: true
                                }
                            }
                        }
                        //当前日期的毫秒数
                        const dateTime = this.selectedDate.split('/').length===3?this.getTimestamp(this.selectedDate):"";
                        //判断该日是否为当前选中
                        if (day.code == dateTime) {
                            day.curDay = true;
                        }
                        //最小/大可选日期的毫秒数
                        const minTime = this.getTimestamp(this.minDate);
                        const maxTime = this.getTimestamp(this.maxDate);                    
                        //判断该日是否在可选范围中
                        if (day.code < minTime || day.code > maxTime) {
                            day.disableDay = true;
                        }
                        //添加该日到当前行中
                        this.$set(row, index, day);
                    }
                }
                return rows;
            },
            //去到上/下一月，修改option中year和month的值
            toYearOrMonth(toType) {
                //判断当前是否可翻到上/下月
                if (!this.lastNextDisable[toType]) {
                    switch (toType) {
                        case "lastMonth":
                            if (this.month === 1) {
                                this.year = this.year - 1;
                                this.month = 12;
                            } else {
                                this.month = this.month - 1;
                            }
                            break;
                        case "nextMonth":
                            if (this.month === 12) {
                                this.year = this.year + 1;
                                this.month = 1;
                            } else {
                                this.month = this.month + 1;
                            }
                            break;
                        default:
                            break;
                    }
                }
            },
            //显示/隐藏 pickerWrap
            toggled(confirm) {
                //显示或隐藏弹框
                this.option.toggle = !this.option.toggle;
                if(!confirm && this.option.hasConfirmBtn){
                    this.selectedDate = this.date;
                }
                //重置日期
                if(this.selectedDate){
                    if(this.selectedDate.split("/").length===3){
                        this.year = new Date(this.selectedDate).getFullYear();
                        this.month = new Date(this.selectedDate).getMonth() + 1;
                    }else{
                        this.year = new Date(this.selectedDate+"/01").getFullYear();
                        this.month = new Date(this.selectedDate+"/01").getMonth() + 1;
                    }
                }else{
                    if(this.option.selectMonth){
                        this.selectedDate = this.year+"/"+this.month;
                    }else{
                        this.selectedDate = "";
                    }
                }
                this.$emit('toggled',this.curKey);//用以隐藏其他下拉回调
            },
            //选中该天
            selected(itm) {
                //判断该天是否此月中，以及是否在可选区间中
                if (itm.thisMonth && !itm.disableDay) {
                    //格式化此次选中日期
                    const date = new Date(itm.code);
                    
                    if(this.option&&!this.option.hasConfirmBtn){
                        //如果没有确定按钮---直接设置选中日期
                        this.selectedDate = moment(date).format('YYYY/MM/DD');
                        //设置选中日期
                        this.date = moment(date).format('YYYY/MM/DD');
                        //更新option的值
                        this.option.date = this.date.replace(/\//g,'-');
                        //隐藏弹框
                        this.toggled();
                        this.$emit("cb");
                    }else{
                        //如果有确定按钮---如果选中了，则移除选择
                        if(this.selectedDate.split('/').length===3 && 
                            this.getTimestamp(this.selectedDate)===itm.code){
                            this.selectedDate = moment(date).format('YYYY/MM')
                        }else{
                            //设置已选中日期
                            this.selectedDate = moment(date).format('YYYY/MM/DD');
                        }
                    }
                }
            },
            //清除日期
            clearDate(e){
                e.stopPropagation();
                this.date = "";
                this.option.date = this.date;
                if(this.selectedDate.split("/").length===3){
                    this.selectedDate = this.year+"/"+this.month;
                }
            },
            //确认已选择
            confirmed() {
                //将当前选中日期赋值为已选中的日期
                this.date = this.selectedDate;
                //更新option的值
                this.option.date = this.date.replace(/\//g,'-');
                //隐藏弹框，并传入true，不重置当前选择
                this.toggled(true);
                this.$emit("cb");
            },
            //显示/隐藏 yearSelect、monthSelect
            toggledSelect(type){
                switch (type) {
                    case "yearToggle":
                        this.monthToggle = false;
                        break;
                    case "monthToggle":
                        this.yearToggle = false;
                        break;
                    default:
                        this.monthToggle = false;
                        this.yearToggle = false;
                        break;
                }
                this[type]= !this[type];
                this.$nextTick(function(){
                    $("#J_yearList").perfectScrollbar();
                    $("#J_monthList").perfectScrollbar();
                    $("#J_yearList").perfectScrollbar('update');
                    $("#J_monthList").perfectScrollbar('update');
                });
            },
            //选中该年/该月
            selectedYearOrMonth(type,val){
                switch (type) {
                    case "yearToggle":
                        this.year = val;
                        //切换年份，需要判断当前年可选的月区间，并更新month的值
                        if(this.getTimestamp(this.year+'/'+this.month+"/01")<this.getTimestamp(this.minDate)){
                            this.month = new Date(this.minDate).getMonth()+1;
                        }else if(this.getTimestamp(this.year+'/'+this.month+"/01")>this.getTimestamp(this.maxDate)){
                            this.month = 1;
                        }
                        break;
                    case "monthToggle":
                        this.month = val;
                        break;
                    default:
                        break;
                }
                this[type]= !this[type];
            },
            //获取年月日的日期时间戳：比如2017/01/02
            getTimestamp(date){
                if(date===''){return "";}
                date = new Date(date).getTime();
                return date;
            },
            //初始化option配置
            initOption(){
                if(this.option.date){
                    this.date = this.option.date.replace(/-/g,'/');
                    this.selectedDate = this.date;
                    this.year = new Date(this.date).getFullYear();
                    this.month = new Date(this.date).getMonth() + 1;
                }else{
                    if(this.option.year&&this.option.month){
                        this.year = this.option.year;
                        this.month = this.option.month;
                    }
                    if(this.option.selectMonth){
                        this.selectedDate = this.year+"/"+this.month;
                    }else{
                        this.selectedDate = "";
                    }
                }
                this.minDate = this.option.minDate?this.option.minDate.replace(/-/g,'/'):this.minDate;
                this.maxDate = this.option.maxDate?this.option.maxDate.replace(/-/g,'/'):this.maxDate;
            }
        },
        watch: {
            'option.date':'initOption',
            'option.toggle':'toggledSelect'
        },
        mounted() {
            this.initOption();
            $(document).not($("#"+this.option.id+" .datePicker")).click(e => {
                if(this.option.toggle){
                    this.toggled();
                }
                this.option.focus = false;
            });
        }
    };
</script>
