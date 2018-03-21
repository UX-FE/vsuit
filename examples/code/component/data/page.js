let code = {}

code.base = `
    <template>
        <Page :pages="pages1" :current=6>
            <span slot="pre">上一页</span>
            <span slot="next">下一页</span>
            <span slot="prefold"><<</span>
            <span slot="nextfold">>></span>
        </Page>
    </template>
    export default {
        data() {
            return {
                pages1:{
                    "limit": 10,//一页显示多少条
                    "slider": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],//分页数组
                    "lastPage": false,//是否是最后一页
                    "hasNextPage": true,//是否有下一页
                    "nextPage": 2,//下一页
                    "hasPrePage": false,//是否有上一页
                    "endRow": 10,//当前页结束行标
                    "prePage": 1,//上一页
                    "totalCount":102,//总数
                    "page": 1,//当前页
                    "startRow": 1,//当前页开始行标
                    "firstPage": true,//是否第一页
                    "offset": 0,//与第一页的便宜
                    "totalPages": 10//总页数
                }
            };
        }
    };
`

code.jump = `
    <template>
        <Page :pages="pages1" :current=6 showJump>
            <span slot="pre">上一页</span>
            <span slot="next">下一页</span>
            <span slot="prefold"><<</span>
            <span slot="nextfold">>></span>
        </Page>
    </template>
    export default {
        data() {
            return {
                pages1:{
                    "limit": 10,//一页显示多少条
                    "slider": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],//分页数组
                    "lastPage": false,//是否是最后一页
                    "hasNextPage": true,//是否有下一页
                    "nextPage": 2,//下一页
                    "hasPrePage": false,//是否有上一页
                    "endRow": 10,//当前页结束行标
                    "prePage": 1,//上一页
                    "totalCount":102,//总数
                    "page": 1,//当前页
                    "startRow": 1,//当前页开始行标
                    "firstPage": true,//是否第一页
                    "offset": 0,//与第一页的便宜
                    "totalPages": 10//总页数
                }
            };
        }
    };
`
code.noborder = `
    <template>
        <Page :pages="pages1" :current=6 noborder showJump>
            <span slot="pre">上一页</span>
            <span slot="next">下一页</span>
            <span slot="prefold"><<</span>
            <span slot="nextfold">>></span>
        </Page>
    </template>
    export default {
        data() {
            return {
                pages1:{
                    "limit": 10,//一页显示多少条
                    "slider": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],//分页数组
                    "lastPage": false,//是否是最后一页
                    "hasNextPage": true,//是否有下一页
                    "nextPage": 2,//下一页
                    "hasPrePage": false,//是否有上一页
                    "endRow": 10,//当前页结束行标
                    "prePage": 1,//上一页
                    "totalCount":102,//总数
                    "page": 1,//当前页
                    "startRow": 1,//当前页开始行标
                    "firstPage": true,//是否第一页
                    "offset": 0,//与第一页的便宜
                    "totalPages": 10//总页数
                }
            };
        }
    };
`

export default code
