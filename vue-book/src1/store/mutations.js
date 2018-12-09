import *as Types from './mutations-types.js';
const mutations={
    [Types.INCERMENT](state,count){//state实时自动放入，默认指的是当前状态（state)
         state.count+=count;
    },
    [Types.DECREMENT](state,count){
         state.count-=count;
    }
 };
 export default mutations;

 //宏 快键键