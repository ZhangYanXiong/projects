<template>
    <div class="detail">
        <MHeader :back="true">详情页</MHeader>
            <ul>
                <li>
                    <label for="bookName">名字</label>
                    <input type="text" v-model="book.bookName" id="bookName" placeholder="名字">
                </li>
                 <li>
                    <label for="bookInfo">信息</label>
                    <input type="text" v-model="book.bookInfo" id="bookInfo">
                </li>
                 <li>
                    <label for="bookPrice">价格</label>
                    <input type="text" v-model="book.bookPrice" id="bookPrice">
                </li>
                <li>
                    <button @click="update">确认修改</button>
                </li>
            </ul>
    </div>
</template>
<script>
import MHeader from '../base/MHeader.vue';
import {findOneBook,updateBook} from '../api';
    export default{
        data(){
            return {
               book:{}
            }
        },
        watch:{
            $route(){//只要路径变化，重新获取数据
                this.findBook();
            }
        },
        created(){//页面加载，需要根据数据id 发送请求
            this.findBook();
        },
        methods:{
           async findBook(){//通过id找到某一项后，赋给book
               this.book=await findOneBook(this.bid);
                // 如果是空对象需要跳转回列表页
                Object.keys(this.book).length>0?void 0:this.$router.push('/list');
           },
           async update(){//点击修改图书信息
               await updateBook(this.bid,this.book);
               this.$router.push('/list');//修改完成后跳转
           }
        },
        computed: {
            bid(){
                return this.$route.params.bid;//将路径参数的id映射到bid上
            }
        },
        components:{
            MHeader
        }
    }
</script>
<style scoped lang="less">
    .detail{
        position: absolute;
        top:0;
        left: 0;
        bottom:0;
        right:0;
        background:#fff;
        z-index: 100;
    }
    ul{
        margin:50px 20px 0 20px;
        li{
            label{
                display: block;
                font-size:25px; 
            }
            input{
                height: 25px;
                width: 100%;
                margin: 10px 0;
            }
            button{
                display: block;
                width: 80px;
                height: 35px;
                background:#2aabd2;
                color:#fff;
                border:none;
                border-radius: 5px;
                outline: none;
            }
        }



    }
</style>
