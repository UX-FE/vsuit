<template>
  <div :class = "classes" v-clickoutside="handleClose">
    <div class="dateWrap" @click="toggled">
      <input type="hidden" :name="name" v-model="date"/>
      <div class="date">{{ date | formatDate(dateFormat) }}</div>
      <span v-if="placeholder && date===''" class="placeholder" v-text="placeholder"></span>
      <Icon type="calendar"></Icon>
      <Icon :type="toggle?'arrow-up-b':'arrow-down-b'"></Icon>
      <Icon type="close-circled" v-if="clearable&&date!==''" @on-click-icon="clearabled"></Icon>
    </div>
    <transition v-if="toggle" enter-active-class="animated fadeInDown slow" leave-active-class="animated fadeOutUp slow">
      <div class="pickerWrap">
        <div class="header">
          <div class="left">
            <Icon type="arrow-left-b" :class="{'disable':lastNextDisable.lastMonth}" @on-click-icon="toYearOrMonth('lastMonth')"></Icon>
            <div class="yearSelect" @click="stopProp">
              <span class="year" @click="toggledSelect('yearToggle')">
                {{year}}年
                <Icon :type="yearSelect.toggle?'arrow-up-b':'arrow-down-b'"></Icon>
              </span>
              <ul class="list ps-white" v-show="yearSelect.toggle" id="J_yearList">
                <li v-for="(y,idx) in yearSelect.maxYear-yearSelect.minYear+1" :class="{active:y+yearSelect.minYear-1===year}" :key="idx"
                  @click="selectedYearOrMonth('yearToggle',y+yearSelect.minYear-1)">
                  {{y+yearSelect.minYear-1}}月
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="monthSelect" @click="stopProp">
              <span class="month" @click="toggledSelect('monthToggle');">
                {{month}}月
                <Icon :type="monthSelect.toggle?'arrow-up-b':'arrow-down-b'"></Icon>
              </span>
              <ul class="list ps-white" v-show="monthSelect.toggle" id="J_monthList">
                <li v-for="(m,idx) in 12" 
                  :class="{active:m===month}" 
                  :key="idx" 
                  v-if="Moment(year+'/'+((m+1)<10?('0'+(m+1)):(m+1)),'YYYY/MM').valueOf()>=Moment(minDate,'YYYY/MM/DD').valueOf() && 
                        Moment(year+'/'+(m<10?('0'+m):m)+'/01','YYYY/MM/DD').valueOf()<=Moment(maxDate,'YYYY/MM/DD').valueOf()" 
                  @click="selectedYearOrMonth('monthToggle',m)">
                  {{m}}月
                </li>
              </ul>
            </div>
            <Icon type="arrow-right-b" :class="{'disable':lastNextDisable.nextMonth}" @on-click-icon="toYearOrMonth('nextMonth')"></Icon>
          </div>
        </div>
        <div class="body">
          <table>
            <thead>
              <th v-for="(itm,idx) in week" :key="idx">
                {{itm}}
              </th>
            </thead>
            <tbody>
              <tr v-for="(item,idx) in dateRows" :key="idx">
                <td v-for="(itm,i) in item" :key="i" 
                  :class="{'thisMonth':itm.thisMonth,'curDay':itm.curDay,'disableDay':itm.disableDay,behindDay:itm.text>=20}"
                  @click="selected(itm)">
                  <span>
                    <label>{{itm.text}}</label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="footer" v-if="confirm">
          <div class="selectedDate" :class="{placeholder:date===''}">
            <span v-text="selectedDate===''?'请选择日期':selectedDate.replace(/-/g,'/')"></span>
          </div>
          <div class="btns">
            <BaseButton type="primary" shape="circle" @on-click-btn="confirmed">确定</BaseButton>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import clickoutside from '../../directives/clickoutside';
  import filters from '@/components/_filter'
  import moment from 'moment/moment'
  import { prefix } from '../var'
  const datePrefix = prefix + 'date'
  export default {
    name: 'Date',
    filters,
    directives: { clickoutside },
    props: {
      name:String,
      value:{
        type:String,
        default:''
      },
      placeholder:{
        type:String,
        default:'暂无'
      },
      clearable:{
        type:Boolean,
        default:false
      },
      confirm:{
        type:Boolean,
        default:true
      },
      selectMonth:{
        type:Boolean,
        default:false
      },
      min:{
        type:String,
      },
      max:{
        type:String,
      },
      dateFormat:{
        type:String,
        default:'YYYY/MM/DD'/*
            'YYYY/MM/DD' : '2017/01/11'
            'YYYY~MM~DD' : '2017~01~11'
            'YYYY-MM-DD' : '2017-01-11'
            'YYYY年MM月DD日' : '2017年01月11日'
            'YYYY/M/D' : '2017/1/11'
            'YYYY~M~D' : '2017~1~11'
            'YYYY-M-D' : '2017-1-11'
            'YYYY年M月D日' : '2017年1月11日'
          */
      }
    },
    data () {
      return {
        Moment: moment,
        toggle: false,
        week: ['日', '一', '二', '三', '四', '五', '六'], // 星期
        date: (this.value)?this.value.replace(/-/g, '/'):'', // 当前日期
        selectedDate: this.selectMonth ? (this.year + '/' + this.month) : this.date, // 当前已选
        year:(this.date)? new Date(this.date).getFullYear():(new Date()).getFullYear(), // 当前视图的年
        month: (this.date)? (new Date(this.date).getMonth() + 1):((new Date()).getMonth() + 1), // 当前视图的月
        minDate: (!!this.min)?this.min.replace(/-/g, '/'):moment().subtract(30, 'days').format('YYYY/MM/DD'), // 最小可选日期（默认为最近30天）
        maxDate: (!!this.max)?this.max.replace(/-/g, '/'):moment().subtract(1, 'days').format('YYYY/MM/DD'), // 最大可选日期（默认为当天）
        yearToggle: false, // 年选择是否展开
        monthToggle: false, // 月选择是否展开
      }
    },
    computed: {
      classes () {
        return `${datePrefix}`
      },
      // 展现的日历数组对象
      dateRows () {
        // 声明当前年月
        return this.rows(this.year, this.month)
      },
      // 是否可上翻/下翻 年/月
      lastNextDisable () {
        let lastNextDisable = {
          lastMonth: false,
          nextMonth: false
        }
        // 声明当前年月
        const year = this.year
        const month = this.month

        // 声明最小/大可选日期的毫秒数
        const minTime = this.getTimestamp(this.minDate)
        const maxTime = this.getTimestamp(this.maxDate)

        // 判断上一月的最后一天是否小于最小可选日期
        const monthDays = moment((month === 1 ? year - 1 : year) + '/' + (month === 1 ? 12 : month - 1), 'YYYY/MM').daysInMonth()
        const lastMonthDay = moment((month === 1 ? year - 1 : year) + '/' + (month === 1 ? 12 : month - 1) + '/' + monthDays, 'YYYY/MM/DD').valueOf()
        if (lastMonthDay < minTime) {
          lastNextDisable.lastMonth = true
        }

        // 判断下一月的第一天是否超过最大可选日期
        const nextMonthDay = moment((month === 12 ? year + 1 : year) + '/' + (month === 12 ? 1 : month + 1), 'YYYY/MM/DD').valueOf()
        if (nextMonthDay > maxTime) {
          lastNextDisable.nextMonth = true
        }
        return lastNextDisable
      },
      // 年选择
      yearSelect () {
        let yearSelect = {
          toggle: this.yearToggle,
          maxYear: moment(this.maxDate, 'YYYY/MM/DD').year(),
          minYear: moment(this.minDate, 'YYYY/MM/DD').year()
        }
        return yearSelect
      },
      // 月选择
      monthSelect () {
        let monthSelect = {
          toggle: this.monthToggle,
          maxMonth: moment(this.maxDate, 'YYYY/MM/DD').month() + 1,
          minMonth: moment(this.minDate, 'YYYY/MM/DD').month() + 1
        }
        return monthSelect
      }
    },
    methods: {
      // 点击document，组件以外的部分，收起产品选择，需要阻止组件冒泡
      // stopPropagation (e) {
      //   e.stopPropagation()
      // },
      handleClose(){
          this.toggle = false;
      },
      // 点击年月下拉选择以外，收起下拉选择，需要阻止组件冒泡
      stopProp (e) {
        e.stopPropagation()
      },
      /* 根据年月，生成此月份日历数组对象：
          day中 code：该日秒数；text：该日；
              thisMonth：是否在该月中；
              curDay：是否在当前日期区间中；
              disableDay：不可选日期；
      */
      rows (year, month) {
        // 声明第一天是周几(1为周一)
        const firstDayWeek = moment(year + '/' + month, 'YYYY/MM/DD').day()
        // 声明当前月有多少天
        const monthDays = moment(year + '/' + month, 'YYYY/MM/DD').daysInMonth()
        // 声明上一个月有多少天
        const lastMonthDays = moment((month === 1 ? year - 1 : year) + '/' + (month === 1 ? 12 : month - 1), 'YYYY/MM/DD').daysInMonth()
        // 定义渲染日历的数组
        let rows = [[], [], [], [], [], []]
        // 总共6行
        for (var i = 0; i < rows.length; i++) {
          // 定义当前行
          let row = rows[i]
          // 总共week.length列（即一周7天，7列）
          for (let j = 0; j < this.week.length; j++) {
            // 定义当前天
            let day = {text: '', code: ''}
            // 判断是否为第一行
            if (i === 0) {
              // 第一行，考虑上一个月最后几天
              if (firstDayWeek === 0) {
                // 第一天即为周日，不考虑上一个月
                day = {
                  text: i * 7 + j + 1,
                  code: moment(year + '/' + month + '/' + (i * 7 + j + 1), 'YYYY/MM/DD').valueOf(),
                  thisMonth: true
                }
              } else {
                // 第一天不为周日，填充上一个月的最后几天
                if (j < firstDayWeek) {
                  // 当前日为上一个月的，进行填充
                  day = {
                    text: lastMonthDays - firstDayWeek + j + 1,
                    code: moment((month === 1 ? year - 1 : year) + '/' +
                                 (month === 1 ? 12 : month - 1) + '/' +
                                 (lastMonthDays - firstDayWeek + j + 1), 'YYYY/MM/DD').valueOf()
                  }
                } else {
                  // 否则为当前月的天
                  day = {
                    text: i * 7 + j + 1 - firstDayWeek,
                    code: moment(year + '/' + month + '/' + (i * 7 + j + 1 - firstDayWeek), 'YYYY/MM/DD').valueOf(),
                    thisMonth: true
                  }
                }
              }
            } else {
              // (最后一、两行)如果超出了当前月，考虑下一个月前几天
              if (i * 7 + j + 1 - firstDayWeek > monthDays) {
                // 下一个月的前几天
                day = {
                  text: i * 7 + j + 1 - firstDayWeek - monthDays,
                  code: moment((month === 12 ? year + 1 : year) + '/' +
                            month === 12 ? 1 : month + 1 + '/' +
                            (i * 7 + j + 1 - firstDayWeek - monthDays), 'YYYY/MM/DD').valueOf()
                }
              } else {
                // 当前月
                day = {
                  text: i * 7 + j + 1 - firstDayWeek,
                  code: moment(year + '/' + month + '/' + (i * 7 + j + 1 - firstDayWeek), 'YYYY/MM/DD').valueOf(),
                  thisMonth: true
                }
              }
            }
            // 当前日期的毫秒数
            const dateTime = this.getTimestamp(this.selectedDate)
            // 判断该日是否为当前选中
            if (day.code === dateTime) {
              day.curDay = true
            }
            // 最小/大可选日期的毫秒数
            const minTime = this.getTimestamp(this.minDate)
            const maxTime = this.getTimestamp(this.maxDate)
            // 判断该日是否在可选范围中
            if (day.code < minTime || day.code > maxTime) {
              day.disableDay = true
            }
            // 添加该日到当前行中
            this.$set(row, j, day)
          }
        }
        return rows
      },
      // 去到上/下一月，修改option中year和month的值
      toYearOrMonth (toType) {
        // 判断当前是否可翻到上/下月
        if (!this.lastNextDisable[toType]) {
          switch (toType) {
            case 'lastMonth':
              if (this.month === 1) {
                this.year = this.year - 1
                this.month = 12
              } else {
                this.month = this.month - 1
              }
              break
            case 'nextMonth':
              if (this.month === 12) {
                this.year = this.year + 1
                this.month = 1
              } else {
                this.month = this.month + 1
              }
              break
            default:
              break
          }
        }
      },
      // 显示/隐藏 pickerWrap
      toggled (confirm) {
        // 显示或隐藏弹框
        this.toggle = confirm === false ? false : !this.toggle
        if (!confirm && this.confirm) {
          this.selectedDate = this.date
        }
        // 重置日期
        if (this.selectedDate) {
          this.year = moment(this.selectedDate, 'YYYY/MM/DD').year()
          this.month = moment(this.selectedDate, 'YYYY/MM/DD').month() + 1
        } else {
          if (this.selectMonth) {
            this.selectedDate = this.year + '/' + this.month
          } else {
            this.selectedDate = ''
          }
        }
        this.$emit('toggled') // 用以隐藏其他下拉回调
      },
      // 选中该天
      selected (itm) {
        // 判断该天是否此月中，以及是否在可选区间中
        if (itm.thisMonth && !itm.disableDay) {
          // 格式化此次选中日期
          const date = new Date(itm.code)
          if (this.confirm) {
            // 有确定按钮---选中了，则移除选择
            if (this.getTimestamp(this.selectedDate) === itm.code) {
              this.selectedDate = moment(date, 'YYYY/MM/DD').format('YYYY/MM')
            } else {
              // 设置已选中日期
              this.selectedDate = moment(date, 'YYYY/MM/DD').format('YYYY/MM/DD')
            }
          } else {
            // 没有确定按钮---直接设置选中日期
            this.selectedDate = moment(date, 'YYYY/MM/DD').format('YYYY/MM/DD')
            // 设置选中日期
            this.date = this.selectedDate
            // 隐藏弹框
            this.toggled()
            // 执行回调
            this.$emit('input',this.date);
            this.$emit('on-change',this.date)
          }
        }
      },
      // 清除日期
      clearabled (e) {
        e.stopPropagation()
        this.date = ''
        this.selectedDate = this.year + '/' + (this.month < 10 ? ('0' + this.month) : this.month) // 设置视图选中的月份
      },
      // 确认已选择
      confirmed () {
        // 将当前选中日期赋值为已选中的日期
        this.date = this.selectedDate
        // 隐藏弹框，并传入true，不重置当前选择
        this.toggled(true)
        this.$emit('input',this.date);
        this.$emit('cb',this.date)
      },
      // 显示/隐藏 yearSelect、monthSelect
      toggledSelect (type) {
        switch (type) {
          case 'yearToggle':
            this.monthToggle = false
            this[type] = !this[type]
            break
          case 'monthToggle':
            this.yearToggle = false
            this[type] = !this[type]
            break
          default:
            this.monthToggle = false
            this.yearToggle = false
            break
        }
      },
      // 选中该年/该月
      selectedYearOrMonth (type, val) {
        switch (type) {
          case 'yearToggle':
            this.year = val
            // 切换年份，需要判断当前年可选的月区间，并更新month的值
            if (this.getTimestamp(this.year + '/' + this.month + '/01') <
                this.getTimestamp(this.minDate)) {
              this.month = new Date(this.minDate).getMonth() + 1
            } else if (this.getTimestamp(this.year + '/' + this.month + '/01') >
                       this.getTimestamp(this.maxDate)) {
              this.month = 1
            }
            break
          case 'monthToggle':
            this.month = val
            break
          default:
            break
        }
        this.toggledSelect(type) // 收起下拉框
      },
      // 获取年月日的日期时间戳：比如2017/01/02
      getTimestamp (date) {
        if (date === '' || date.split('/').length !== 3) {
          return ''
        }
        date = moment(date, 'YYYY/MM/DD').valueOf()
        return date
      },
    },
    watch: {
      'date' (date) {
        this.date = date // 日期变化，对应更新option的date值
      },
      'toggle': 'toggledSelect' // toggle变化，处理对应年月下拉框
    },
    mounted () {
    }
  }
</script>