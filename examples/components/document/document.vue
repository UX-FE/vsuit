<template>
    <section class="contentMain">
      <div class="main">
        <ul>
            <li  v-for="n in 100" :key="n">
                {{n}}document---------------------------------------------------------------------------------------------------------------------------------
            </li>
        </ul>
      </div>
    </section>
</template>

<script>
export default {
  name: "v-document",
  data() {
    return {};
  },
  components: {},
  watch: {
  },
  methods: {
    init() {
      this.getData();
    },
    getData() {}
  },
  mounted() {}
};
</script>
