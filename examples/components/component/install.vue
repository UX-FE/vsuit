<template>
    <div class="other">
        <div class="title1">
            安装
        </div>
        <div class="mItem">
            <div class="title2">
                npm安装：
            </div>
            <div class="wrap">
                <div>
                    使用npm方式安装
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.npm" lang="html"></DCode>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../code/component/guide/install';
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
