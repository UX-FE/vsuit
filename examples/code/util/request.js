let code = {}

code.vueGet = `
/**
    * 方法名：GET请求
    * @param {float}  vm - vue实例【必填】
    * @param {string} url - 接口url【必填】
    * @param {object} params - 请求参数【必填】
    * @param {object} callback - 接口返回回调【必填】
    * @param {string} name - 请求接口名称
    * @param {object} sendPara - 接口回调的参数
    * @param {object} failCallback - 接口异常回调
    * 备注：
    *     ① window.domain: 项目根路径，比如"/dataBrain"；
    *     ② before(request)：当有重复请求，abort之前的，只保留最后一个；
    */
    vueGet: function(vm,url,params,callback,name,sendPara,failCallback){
        vm.$http.get(window.domain+url,{
            params: params,
            before(request) {
                if(name){
                    if (vm["previousRequest_"+name]) {
                        vm["previousRequest_"+name].abort();
                    }
                    vm["previousRequest_"+name] = request;
                }
            }
        }).then(d=>{            
            callback(d.body,(sendPara)?sendPara:'');
        },d=>{
            if(failCallback){
                failCallback(d.body);
            }
        });
    }
`

code.vuePost = `
/**
    * 方法名：POST请求
    * @param {float}  vm - vue实例【必填】
    * @param {string} url - 接口url【必填】
    * @param {object} params - 请求参数【必填】
    * @param {object} callback - 接口返回回调【必填】
    * @param {string} name - 请求接口名称
    * @param {object} sendPara - 接口回调的参数
    * @param {object} failCallback - 接口异常回调
    * 备注：
    *     ① window.domain: 项目根路径，比如"/dataBrain"；
    *     ② before(request)：当有重复请求，abort之前的，只保留最后一个；
    */
    vuePost:function(vm,url,params,callback,name,sendPara,failCallback){
        vm.$http.post(window.domain+url,params, {
            before(request) {
                if (vm["previousRequest_"+name]) {
                    vm["previousRequest_"+name].abort();
                }
                vm["previousRequest_"+name] = request;
            }
        }).then(d=>{            
            callback(d.body,(sendPara)?sendPara:'');
        },d=>{
            if(failCallback){
                failCallback(d.body);
            }
        });
    }
`

export default code
