<template>
  <div class="main" id="J_main">
    <ul>
        <li  v-for="n in 100" :key="n">
            {{n}}document---------------------------------------------------------------------------------------------------------------------------------
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'v-document',
  data () {
    return {}
  },
  components: {},
  watch: {
    '$route.path': 'getData'
  },
  methods: {
    init () {
      this.getData()
    },
    getData () {}
  },
  mounted () {}
}
</script>
