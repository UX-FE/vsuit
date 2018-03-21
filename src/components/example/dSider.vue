<template>
    <!--sidebar left start-->
    <aside class="sider">
        <Scroll>
            <ul id="J_siderList">
                <li v-for="(item,index) in sider" :key="index" :class="[
                        item.class,
                        {
                            active: item.href === $route.path
                        }
                    ]">
                    <template v-if="item.href">
                        <router-link tag="span" v-text="item.name" :to="item.href"></router-link>
                    </template>
                    <template v-else>
                        <span v-text="item.name"></span>
                    </template>
                </li>
            </ul>
        </Scroll>
    </aside>
    <!--sidebar left end-->
</template>
<script>
    export default {
      name: 'DSider',
      props: ['sider'],
      data () {
        return {
          siderBar: {
            index: 'i_sider',
            component: 'c_sider',
            util: 'u_sider',
            document: 'd_sider'
          },
        }
      },
      watch: {},
      created () {},
      methods: {

      },
      mounted () {
        this.$nextTick(function () {

        })
      }
    }
</script>