//vuex 平级组件交互，找共同的父级解决，跨组件交互 eventBus 混乱（发布，订阅）

//vuex 主要借 （flux redux），vuex只能在vue中使用（单独为vue开发）

//vuex 为了大型项目，主要是(状态state)管理，将数据统一管理
import Vue from 'vue';
import App from './App.vue';
/*
import Vuex from 'vuex';
Vue.use(Vuex);
import logger from 'vuex/dist/logger.js';//logger是一个日志插件
// 容器是唯一的
const state={count:0};
const mutations={
   add(state,count){//state实时自动放入，默认指的是当前状态（state)
        state.count+=count;
   },
   minus(state,count){
        state.count-=count;
   }
};
const store=new Vuex.Store({
    state,
    mutations,
    plugins:[logger()],
    strict:true //只能通过mutation（管理员）来更改状态，mutation不支持异步
});
 */
import store from './store';
//计数器
new Vue({
    el:'#app',
    ...App,
    store//store被注册到实例，所有的组件都会有一个属性this.$store
});