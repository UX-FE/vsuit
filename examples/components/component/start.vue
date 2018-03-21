<template>
    <div class="other">
        <div class="title1">
            快速上手
        </div>
        <div class="mItem">
            <div class="title2">
                使用模板：
            </div>
            <div class="wrap">
                <div>
                    vuit有一个demo工程：，以此为基础开发，可以省去大量配置调试的时间。
                </div>
                <br/>
            </div>
            <div class="title2">
                引入vsuit：
            </div>
            <div class="wrap">
                <div class="q-title">在webpack入口页面main.js中配置：</div>
                <DCode :code="code.main" lang="html"></DCode>
                <div class="q-title">组件使用规范说明：</div>
                <div>
                    <p>1、使用:prop传递数据格式为 数字、布尔值或函数时，必须带:；</p>
                    <p>2、组件命名使用驼峰命名法，比如Page、Input；</p>
                    <p>3、组件有成组嵌套时，父组件名增加"Group"后缀，比如Radio的群组父组件RadioGroup；</p>
                    <p>4、事件命名使用"on-"为前缀，如on-change/on-click-btn；</p>
                    <p>5、css前缀使用"vsu-"。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../code/component/guide/start';
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
