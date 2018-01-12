<template>
    <!--sidebar left start-->
	<nav class="nav">
		<ul>
			<router-link tag="li"
				v-for="(item,index) in nav" 
				:key="index"
				:to="item.href">
				<span v-text="item.name"></span>
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

        },
        mounted() {
        }
    };
</script>
