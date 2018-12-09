// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
// 使用轮播图插件
//Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;

import VueLazyload from 'vue-lazyload';
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1600627195,2172472304&fm=26&gp=0.jpg',
  loading: 'http://img.zcool.cn/community/01896559151e0da801216a3e164867.gif',
  attempt: 1
});

//在进入路由之前，每次都会执行,全局钩子，有拦截
router.beforeEach(function(to,from,next){
  document.title=to.meta.title;
  if(to.path==='/list'){
    next();
  }else{
    next();
  }
  
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
