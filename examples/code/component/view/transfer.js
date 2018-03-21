let code = {}

code.base = `
    <template>
        <Transfer id="transfer1" :data="transfer1.data" sumable></Transfer>
        <Transfer id="transfer2" :data="transfer1.data" :check-all=false></Transfer>
    </template>
    export default {
        data() {
          return {
              transfer1:{
                  data:this.generateData()
              }
          };
        },
        methods: {
            generateData(){
                const data = [];
                for(let i = 0;i<=20;i++){
                    data.push({
                      value:i,
                      label:'选项'+i,
                      disabled:false
                    })
                }
                return data;
            }
        }
    };
`
code.custom = `
    <template>
        <Transfer id="transfer4" :data="transfer1.data" :titles="['source','target']">
            <span slot="back">《到左边</span>
            <span slot="to">到右边》</span>
        </Transfer>
    </template>
    export default {
        data() {
          return {
              transfer1:{
                  data:this.generateData()
              }
          };
        },
        methods: {
            generateData(){
                const data = [];
                for(let i = 0;i<=20;i++){
                    data.push({
                      value:i,
                      label:'选项'+i,
                      disabled:false
                    })
                }
                return data;
            }
        }
    };
`

code.disabled = `
    <template>
        <Checkbox v-model="disabledbox" disabled>单独的选框</Checkbox>
    </template>
    export default {
        data() {
            return {
                disabledbox:true,
            };
        }
    };
`


export default code
