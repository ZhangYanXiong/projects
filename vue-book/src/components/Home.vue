<template>
    <div>
        <MHeader>首页</MHeader>
        <div class="content">
            <loading v-if="loading"></loading>
            <template v-else>
                <Swiper :swiperSlides="sliders"></Swiper>
                <div class="container">
                    <h3>热门图书</h3>
                    <ul>
                        <li v-for="hot in hotBooks">
                            <img :src="hot.bookCover" alt="book">
                            <b>{{hot.bookName}}</b>
                        </li>
                    </ul>
                </div>
            </template>  
        </div>
    </div>
</template>
<script>
    // 1、引入组件2、注册组件3、使用组件
    import MHeader from '../base/MHeader.vue';
    import Swiper from '../base/Swiper.vue';
    import {getAll} from '../api'
    import loading from '../base/loading.vue';
    export default{
        created () {
            this.getData();
        },
        data(){
            return {
               sliders:[],
               hotBooks:[],
               loading:true
            }
        },
        methods:{
            async getData(){
                let[sliders,hotBooks]=await getAll();//[sliders,books]
                this.sliders=sliders;
                this.hotBooks=hotBooks;
                // ...轮播图和热门图书以获取完成
                this.loading=false;
            }
        },
        computed: {
            
        },
        components:{
            MHeader,
            Swiper,
            loading
        }
    }
</script>
<style scoped lang="less">
    h3{
        color:#999;
        padding: 5px 0;
    }
    .container{
        width: 90%;
        margin: auto;
        ul{
            display: flex;
            flex-wrap: wrap;/*默认不换行*/
            padding-bottom:10px; 
            li{
                width: 50%;
                text-align: center;
                margin:5px 0;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>
