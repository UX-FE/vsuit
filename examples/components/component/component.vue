<template>
    <section class="contentMain">
        <div class="main" id="J_component_main">
            <template v-if="type==='install'">
                <v-install></v-install>
            </template>
            <template v-if="type==='start'">
                <v-start></v-start>
            </template>
            <template v-if="type==='i18n'">
                <v-i18n></v-i18n>
            </template>
            <template v-if="type==='theme'">
                <v-theme></v-theme>
            </template>
            <template v-if="type==='update'">
                <v-update></v-update>
            </template>
            <template v-else-if="type==='grid'">
                <v-grid></v-grid>
            </template>
            <template v-else-if="type==='button'">
                <v-button></v-button>
            </template>
            <template v-else-if="type==='dial'">
                <v-dial></v-dial>
            </template>
        </div>
    </section>
</template>

<script>

import vInstall from './install'
import vStart from './start'
import vI18n from './i18n'
import vTheme from './theme'
import vUpdate from './update'
import vGrid from './base/grid'
import vButton from './base/button'
import vDail from './chart/dial'
export default {
    name: 'v-component',
    data() {       
        return {
            type:""
        }
    }, 
    components: {
        'v-install': vInstall,
        'v-start': vStart,
        'v-i18n': vI18n,
        'v-theme': vTheme,
        'v-update': vUpdate,
        'v-grid': vGrid,
        'v-button': vButton,
        'v-dial': vDail,
        // 'v-date': vDate,
        // 'v-linechart':vLineChart,
        // 'v-areaChart':vAreaChart,
        // 'v-barchart':vBarChart,
        // 'v-piechart':vPieChart,
        // 'v-ringprogress':vRingProgress,
        // 'v-waterball':vWaterBall,
        // 'v-dial':vDialChart
    },
    watch: {
        '$route.path':'getData'
    },
    methods: {
        init() {
            this.getData();
        },
        getData() {
            this.type = this.$route.params.type;

        }
    },
    mounted () {
        this.init();

    }
}
</script>
