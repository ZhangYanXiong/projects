<template>
    <div class="footer">
       <router-link to="/home">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
       </router-link>
       <router-link to="/list">
            <i class="iconfont icon-liebiaoyemian"></i>
            <span>列表</span>
       </router-link>
       <router-link to="/add">
            <i class="iconfont icon-icon02"></i>
           <span>添加</span> 
        </router-link>
       <router-link to="/collect">
            <i class="iconfont icon-shoucang"></i>
            <span>购物车</span>
       </router-link>
    </div>
</template>
<!--
    display:flex
    flex-direction:row/column
    justify-content:center垂直居中
    align-items:center横向居中
    flex：1每份占1
    /home home/a
    router-link-exact-active（确切激活的） router-link-active(激活的)
-->
<style scoped lang="less">
    .footer{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height: 50px;
        display:flex;
        border-top:1px solid #ccc;
        a{
            display:flex;
            color:yellowgreen;
            flex-direction:column;
            flex:1;
            align-items:center;
            justify-content: center;
        }
        a.router-link-active{
            color:red;
        }
    }
</style>
