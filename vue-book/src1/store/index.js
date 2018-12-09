import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
import logger from 'vuex/dist/logger.js';//logger是一个日志插件
// 容器是唯一的
const state={count:0};
const getters={
    val:(state)=>state.count%2?'奇数':'偶数'
};
/*
const mutations={
   add(state,count){//state实时自动放入，默认指的是当前状态（state)
        state.count+=count;
   },
   minus(state,count){
        state.count-=count;
   }
};
*/
import mutations from './mutations'
export default new Vuex.Store({
    state,
    mutations,
    getters,
    plugins:[logger()],
    strict:true //只能通过mutation（管理员）来更改状态，mutation不支持异步
});