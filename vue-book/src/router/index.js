import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/*
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';

*/



export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:()=>import('../components/Home.vue'),
      meta:{keepAlive:true,title:'首页'}//（路由元信息）this.$route.meta.keepAlive
    },
    {
      path:'/list',
      component:()=>import('../components/List.vue'),
      meta:{title:'列表'}
    },
    {
      path:'/add',
      component:()=>import('../components/Add.vue'),
      meta:{title:'添加'}
    },
    {
      path:'/collect',
      component:()=>import('../components/Collect.vue'),
      meta:{title:'收藏'}
    },
    // /etail/1 {bid:1} 路径参数，必须有但是可以随机
    {
      path:'/detail/:bid',
      component:()=>import('../components/detail.vue'),
      name:'detail'
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})
