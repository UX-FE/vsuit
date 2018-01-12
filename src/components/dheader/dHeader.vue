<template>
    <header class="topBar" id="J_topBar">
		<div class="logo">
        <i class="icon-f-logo"></i>
        <div class="logo-title">vsuit 组件库</div>
    </div>
    <v-nav :nav="nav"></v-nav>
	</header>
</template>
<script>
import vNav from '../dnav/dnav.vue';
    export default {
        name: 'DHeader',
        props: ['nav'],
        data () {
            return {
            };
        },
        components: {
            "v-nav": vNav
        },
        watch: {
        },
        created() {
        },
        methods: {

        },
        mounted() {
        }
    };
</script>
