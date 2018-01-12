<template>
    <!--sidebar left start-->
	<nav class="nav">
		<ul>
			<router-link tag="li"
				v-for="(item,index) in nav.data" 
				:key="index"
				:to="item.href">
				<span @click="select(index)"
					:class="{
						active: item.module === $route.meta.module
					}" 
                    v-text="item.name"></span>
			</router-link>
		</ul>
	</nav>
	<!--sidebar left end-->
</template>
<script>
import vNav from '../dnav/dnav.vue';
    export default {
        name: 'DNav',
        props: ['nav'],
        data () {
            return {
            };
        },
        watch: {
        },
        created() {
        },
        methods: {
            select(index){
                this.nav.current = this.nav.data[index].module;
            }
        },
        mounted() {
        }
    };
</script>
