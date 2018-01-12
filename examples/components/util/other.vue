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
                <pre>
<div class="comment">
/**
    * 方法名：请求拦截
    * @param 暂无
    * 备注：① 判断接口响应的headers中sessionstatus是否过期，
             以及登录账号是否已更新，从而回到登录页重新登录。
           ② sessionStatus和user：浏览器不一样，大小写不一样。
    */
</div>
var account = (window.user)?window.user.account:'';
Vue.http.interceptors.push(function (request, next) {
    request.headers.set('Cache-Control','no-cache');
    request.headers.set('If-Modified-Since','0');
    next(function (response) {
        if (process.env.NODE_ENV !== "development") {
            if(
              ( response.headers.map.SESSIONSTATUS && 
                response.headers.map.SESSIONSTATUS[0] &&
                response.headers.map.SESSIONSTATUS[0]==='TIMEOUT' ) ||
              ( response.headers.map.Sessionstatus &&
                response.headers.map.Sessionstatus[0] &&
                response.headers.map.Sessionstatus[0]==='TIMEOUT' )||
              ( response.headers.map.sessionstatus &&
                response.headers.map.sessionstatus[0] &&
                response.headers.map.sessionstatus[0]==='TIMEOUT' ) 
            ){
                window.location.href ='/login';
            }else if(
                ( response.headers.map.USER && 
                  response.headers.map.USER[0] && 
                  response.headers.map.USER[0] &&
                  (response.headers.map.USER[0]!==account))||
                ( response.headers.map.User && 
                  response.headers.map.User[0] && 
                  response.headers.map.User[0] &&
                  (response.headers.map.User[0]!==account))||
                ( response.headers.map.user && 
                  response.headers.map.user[0] && 
                  response.headers.map.user[0] &&
                  (response.headers.map.user[0]!==account))){
                    window.location.href ='/login';
            }
        }
        return response;
    })
});
                </pre>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "v-other",
  data() {
    return {};
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
