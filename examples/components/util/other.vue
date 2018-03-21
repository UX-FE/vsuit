<template>
    <div class="other">
        <div class="title1">
            其他
        </div>
        <div class="mItem">
            <div class="title2">
                请求拦截
            </div>
            <div class="wrap">
                <DCode :code="code.vueHttp" lang="javascript"></DCode>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../code/util/other';
export default {
  name: "v-other",
  data() {
    return {
        code: Code
    };
  },
  components: {},
  methods: {
    init() {
      this.getData();
    },
    getData() {}
  },
  mounted() {}
};
</script>
