let code = {}

code.base = `
    <template>
        <Rate v-model="rate1"></Rate>
        <br/>
        <Rate v-model="rate1" color="green"></Rate>
        <br/>
        <Rate v-model="rate1" size="14"></Rate>
        <br/>
        <Rate v-model="ratefull" :full="10"></Rate>
    </template>
    export default {
        data() {
            return {
                rate1:2,
                ratefull:5,
            };
        }
    };
`

code.dcolor = `
    <template>
        <Rate v-model="ratecolor" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></Rate>
        <br/>
        <Rate v-model="ratecolor" :full="10" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :rank="[0.5,0.6]"></Rate>
        <br/>
        <Rate v-model="ratecolor" :full="10" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :rank="[0.4,0.8]"></Rate>
    </template>
    export default {
        data() {
            return {
                ratecolor:0,
            };
        }
    };
`

code.half = `
    <template>
        <Rate v-model="rate2" allow-half></Rate>
    </template>
    export default {
        data() {
            return {
                rate2:2
            };
        }
    };
`
code.text = `
    <template>
        <Rate v-model="rate3" show-text allow-half></Rate>
        <br/>
        <Rate v-model="rate4" show-text allow-half>
            <span>你选择了{{rate4}}星</span>
        </Rate>
        <br/>
        <Rate v-model="rateText" :show-text="['很差','还行','一般','挺好','非常好']" allow-half>
        </Rate>
    </template>
    export default {
        data() {
            return {
                rate3:2,
                rate4:2,
                rateText:2
            };
        },
    };
`

code.custom = `
    <template>
        <Rate v-model="rate5" :icon-type="['android-star-outline','android-star-half']"></Rate>
        <br/>
        <Rate v-model="rate6" :icon-type="['happy','sad']"></Rate>
    </template>
    export default {
        data() {
            return {
                rate5:2,
                rate6:2,
            };
        }
    };
`

code.disabled = `
    <template>
        <Rate v-model="rate5" :icon-type="['android-star-outline','android-star-half']" disabled></Rate>
        <br/>
        <Rate v-model="rate6" :icon-type="['happy','sad']" disabled></Rate>
    </template>
    export default {
        data() {
            return {
                rate5:2,
                rate6:2,
            };
        }
    };
`

export default code
