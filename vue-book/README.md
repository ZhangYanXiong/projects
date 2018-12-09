# vue-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
```
# 热门图书功能
--先写服务器，确保数据能正常返回
--增加api方法，实现调取数据的功能
--在哪个组件中应用这个api，如果是一个基础组件需要用这些数据，在使用这个组件的父级中调用这个方法，将数据传递给基础组件
--写一个基础组件 
    -创建一个.vue文件
    -在需要使用这个组件的父级中引用这个组件
    -在组件中注册
    -以标签的形式引入
##路由元信息

#下拉加载
    -默认每次给5条，前端告诉后台现在要熊第几条开始给
    -/path?pffset=5
    -后台返回时,还要告诉前端是否有更多数据hasMoore：false
## coding split 代码分割

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
