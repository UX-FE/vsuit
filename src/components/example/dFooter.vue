<template>
	<footer class="footer">
		<ul class="link">
            <li>链接</li>
            <li><a href="https://github.com/vuejs/vue" target="_blank">代码仓库</a></li>
            <li>更新日志</li>
            <li>常见问题</li>
            <li>脚手架</li>
            <li>自定义主题工具</li>
            <li>在线主题生成</li>
        </ul>
        <ul class="bbs">
            <li>社区</li>
            <li>在线讨论</li>
            <li>反馈建议</li>
            <li>贡献指南</li>
            <li>脚手架</li>
        </ul>
        <div class="us">
            <a class="item" href="http://ux.21cn.com/login" target="_blank">
                <i class="icon icon-yt"></i>云涛
            </a>
            <a class="item" href="http://uvoice.21cn.com/" target="_blank">
                <i class="icon icon-yj"></i>云集
            </a>
        </div>
	</footer>
</template>

<script>
export default {
    name: 'DFooter',
    data() {
        return {
			
        };
    },
    methods: {
    },
    created() {
    },
    components: {
    },
    watch: {
    },
    mounted() {
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@charset "UTF-8";
.footer{
    height: 340px;
    width: 100%;
    background-color: rgba(74, 95, 217, 0.03); 
    margin-top: 20px;
    position: relative;
    &>ul{
        display: inline-block;
        vertical-align: top;
        margin: 30px 60px 0;
        &:nth-child(1){
            margin-left: 200px;
        }
        li{
            margin: 14px 0;
            &:not(:first-child){
                cursor: pointer;
                &:hover{
                    color: #4B61D9;
                }
            }
            &:nth-child(1){
                font-weight: bold;
                font-size: 16px;
                margin-bottom: 20px;
            }
        }
    }
    .us{
        display: inline-block;
        position: absolute;
        right: 100px;
        top: 46px;
        .item{
            font-size: 18px;
            cursor: pointer;
            display: inline-block;
            margin-right: 30px;
            &:hover{
                color: #4B61D9;
                font-weight: bold;
            }
        }
        i.icon{
            vertical-align: middle;
            margin-right: 10px;
        }
    }
}
/*img icon style*/
/*.icon-yt{
  background-image: url(./assets/icon-yt@2x.png);
  width: 40px;
  height: 40px;
}
.icon-yj{
  background-image: url(./assets/icon-yj@2x.png);
  width: 40px;
  height: 40px;
}*/
</style>
