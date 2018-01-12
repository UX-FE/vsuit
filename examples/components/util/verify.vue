<template>
    <div class="request">
        <div class="title1">
            字符串验证
        </div>
        <div class="mItem">
            <div class="title2">
                手机号码验证
            </div>
            <div class="wrap">
                <pre>
<div class="comment">
/**
    * 方法名：手机号码验证
    * @param {string} mobile - 手机号码
    * 备注：
    *   返回：""：手机号码为空，不进行验证；
    *        true：手机号码正确
    *        false：手机号码错误
    */
</div>
formateMobile: function(mobile){
    let m_pattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0135678]|18[0-9]|19[0-9]|16[0-9]|14[579])[0-9]{8}$/;
    mobile = mobile.replace(/(^\s*)|(\s*$)/g, "");
    if(mobile===""){
        return "";
    }else{
        return m_pattern.test(mobile);
    }
}
                </pre>
            </div>
        </div>
        <div class="mItem">
            <div class="title2">
                电子邮箱验证
            </div>
            <div class="wrap">
                <pre>
<div class="comment">
/**
    * 方法名：电子邮箱验证
    * @param {string} mail - 电子邮箱
    * 备注：
    *   返回：""：电子邮箱为空，不进行验证；
    *        true：电子邮箱正确
    *        false：电子邮箱错误
    */
</div>
formateMail: function(mail){
    let m_pattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0135678]|18[0-9]|19[0-9]|16[0-9]|14[579])[0-9]{8}$/;
    mail = mail.replace(/(^\s*)|(\s*$)/g, "");
    if(mail===""){
        return "";
    }else{
        return m_pattern.test(mail);
    }
}
                </pre>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "v-verify",
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
