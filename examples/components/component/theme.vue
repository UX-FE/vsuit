<template>
    <div class="other">
        <div class="title1">
            自定义主题
        </div>
        <div class="mItem">
            <div class="title2">
                默认主题
            </div>
            <div class="wrap">
                <div>
                   查看demo:
                </div>
            </div>
            <div class="title2">
                自定义主题
            </div>
            <div class="wrap">
                <div class="q-title">新建一个样式文件vsuit-variables.scss：</div>
                <DCode :code="code.new" lang="html"></DCode>
                <div class="q-title">在项目的入口文件引入新建的样式文件：</div>
                <DCode :code="code.main" lang="html"></DCode>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../code/component/guide/theme';
export default {
  data() {
    return {
        code: Code,
    };
  },
  methods: {
  },
  mounted() {}
};
</script>
