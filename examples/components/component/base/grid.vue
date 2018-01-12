<template>
    <div class="other">
        <div class="title1">
            Grid 栅格
        </div>
        <div class="mItem">
            <div class="title2">
                类型：
            </div>
            <div class="wrap">
                <div class="q-title">说明：</div>
                <div>
                    按钮类型有：默认按钮、主按钮、文字按钮以及四种颜色按钮。
                    <br/>
                    通过设置type为primary、text创建不同样式的按钮，不设置为默认样式。
                </div>
                <div class="q-title">代码示例：</div>
<pre>

    &lt;BaseButton&gt;default&lt;/BaseButton&gt;
    &lt;BaseButton type="primary"&gt;primary&lt;/BaseButton&gt;
    &lt;BaseButton type="text"&gt;text&lt;/BaseButton&gt;

</pre>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {}
};
</script>
