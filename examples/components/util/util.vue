<template>
    <section class="contentMain">
        <div class="main">
                <template v-if="type==='request'">
                    <v-request></v-request>
                </template>
                <template v-else-if="type==='format'">
                    {{type}}
                </template>
                <template v-else-if="type==='verify'">
                    <v-verify></v-verify>
                </template>
                <template v-else-if="type==='other'">
                    <v-other></v-other>
                </template>
        </div>
    </section>
</template>

<script>

import vRequest from "./request.vue";
import vOther from "./other.vue";
import vVerify from "./verify.vue";
export default {
    name: 'v-util',
    data() {       
        return {
            type:""
        }
    }, 
    components: {
        'v-request': vRequest,
        'v-verify': vVerify,
        'v-other': vOther,
    },
    watch: {
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
