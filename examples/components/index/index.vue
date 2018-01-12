<template>
    <section class="contentMain">
        <ul class="menu">
            <li  v-for="n in 100" :key="n">
                {{n}}index---------------------------------------------------------------------------------------------------------------------------------
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'v-index',
    data() {       
        return {

        }
    }, 
    components: {

    },
    methods: {
        init() {
            this.getData();
        },
        getData() {

        }
    },
    mounted () {

    }
}
</script>
<style>
    ul.menu{
        width:900px;
    }
    body > .container > .content > .contentMain{
        padding-left: 0;
    }
</style>
