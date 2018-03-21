<template>
    <div class="request">
        <div class="title1">
            请求GET&POST
        </div>
        <div class="mItem">
            <div class="title2">
                GET请求
            </div>
            <div class="wrap">
                <DCode :code="code.vueGet" lang="javascript"></DCode>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                POST请求
            </div>
            <div class="wrap">
                <DCode :code="code.vuePost" lang="javascript"></DCode>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../code/util/request';
export default {
  name: "v-request",
  data() {
    return {
        code: Code
    };
  },
  components: {
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
