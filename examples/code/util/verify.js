let code = {}

code.verifyMobile = `
/**
    * 方法名：手机号码验证
    * @param {string} mobile - 手机号码
    * 备注：
    *   返回：""：手机号码为空，不进行验证；
    *        true：手机号码正确
    *        false：手机号码错误
    */
    verifyMobile: function(mobile){
        let m_pattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0135678]|18[0-9]|19[0-9]|16[0-9]|14[579])[0-9]{8}$/;
        mobile = mobile.replace(/(^\s*)|(\s*$)/g, "");
        if(mobile===""){
            return "";
        }else{
            return m_pattern.test(mobile);
        }
    }
`

code.verifyMail = `
/**
    * 方法名：电子邮箱验证
    * @param {string} mail - 电子邮箱
    * 备注：
    *   返回：""：电子邮箱为空，不进行验证；
    *        true：电子邮箱正确
    *        false：电子邮箱错误
    */
    verifyMail: function(mail){
        let m_pattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0135678]|18[0-9]|19[0-9]|16[0-9]|14[579])[0-9]{8}$/;
        mail = mail.replace(/(^\s*)|(\s*$)/g, "");
        if(mail===""){
            return "";
        }else{
            return m_pattern.test(mail);
        }
    }
`

export default code
