<template>
    <div>
        <MHeader>列表页</MHeader>
        <div class="content" ref="scroll" @scroll="loadMore">
            <ul>
                <router-link :to="{name:'detail',params:{bid:book.bookId}}" tag="li" v-for="(book,index) in books" :key="index">
                    <img v-lazy="book.bookCover" alt="">
                    <div>
                        <h4>{{book.bookName}}</h4>
                        <p>{{book.bookInfo}}</p>
                        <b>{{book.bookPrice}}</b>
                        <div class="btn-list">
                             <button @click.stop="remove(book.bookId)">删除</button>
                              <button @click.stop="">添加</button>
                        </div>
                       
                    </div>
                </router-link>
            </ul>
            <div @click="more" class="more">加载更多</div>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import {pagination,removeBook} from '../api';
    export default{
        data(){
            return {
                books:[],
                offset:0,//偏移量
                hasMore:true,//是否有更多
                isLoading:false//默认不是正在加载
            }
        },
        mounted () {
            //加载
            //  this.$refs.scroll.addEventListener('scroll',function(){

            // });
            let scroll=this.$refs.scroll;
            let top=scroll.offsetTop;
            let distance=0;
            let isMove=false;
            scroll.addEventListener('touchstart',(e)=>{
                //滚动天在最顶端时，并且当前盒子在顶端时，才继续走
                if(scroll.scrollTop!=0 || scroll.offsetTop!=top){
                    return;
                }
                let start=e.touches[0].pageY;//点击的开始
                let move=(e)=>{
                    isMove=true;
                    let current=e.touches[0].pageY;
                    distance=current-start;//求拉动的距离，负的不要
                    if(distance>0){
                        if(distance<=50){//如果大于50，就是50
                            scroll.style.top=distance+top+'px';
                            distance=distance;
                        }else{
                            distance=50;
                            scroll.style.top=top+50+'px';
                        }
                        
                    }else{
                        //如果不在考虑范围内，移除掉move和end事件
                        scroll.removeEventListener('touchmove',move);
                        scroll.removeEventListener('touchend',end);
                    }
                };
                let end=(e)=>{
                    if(!isMove){
                         return;
                         isMove=false;
                    }
                    clearInterval(this.timers);
                    this.timers=setInterval(()=>{
                        if(distance<=0){
                            clearInterval(this.timers);
                            distance=0;
                            scroll.style.top=top+'px';
                            scroll.addEventListener('touchmove',move);
                            scroll.addEventListener('touchend',end);
                            this.books=[];//先清空数据
                            this.offset=0
                            this.getData();
                            return
                        }
                        distance -= 1;
                        scroll.style.top=top+distance+'px';  
                    },1)
                   
                };
                scroll.addEventListener('touchmove',move);
                scroll.addEventListener('touchend',end);
            },false);

        },
        created () {
            this.getData();
        },
        methods:{
            loadMore(){
                // 卷取的高度、当前可见区域、总高
                //触发scroll事件，可能n次，先进开一个定时器，下次触发时将上一次定时器清除掉
                clearTimeout(this.timer);//防抖
                this.timer=setTimeout(()=>{
                    let {scrollTop,clientHeight,scrollHeight}=this.$refs.scroll;
                    if(scrollTop+clientHeight+20>scrollHeight){
                        this.getData();//获取更多
                    }
                },60 );
            },
            async getData(){
               if(this.hasMore&& !this.isLoading){//有更多的时候获取数据
                    this.isLoading=true;
                    let {hasMore,books}=await pagination(this.offset);
                    this.books=[...this.books, ...books];//获取的书放到books属性上
                    this.hasMore=hasMore;
                    this.isLoading=false;//加载完毕
                    this.offset=this.books.length;//维护偏移量，就是总书读的长度
               }
            },
            async remove(id){
                await removeBook(id);//删除某一项
                // 要删除前台数据
                this.books=this.books.filter(item=>item.bookId!==id);
               
            },
            more(){
                this.getData();
            },
            
        },
        computed: {
            
        },
        components:{
            MHeader
        }
    }
</script>
<style scoped>
    .content ul{
        padding: 10px;
    }
    .content ul li{
        display: flex;
        padding: 10px 0;
        border-bottom:1px solid #f1f1f1;           
    }
    .content ul li img{
        width:130px;
        height: 150px;
    }
    .content h4{
        font-size: 20px;
        line-height: 35px;
    }
    .content p{
        color:#2a2a2a;
        line-height: 25px;
    }
     .content b{
        color:red;
    }
    .content button{
        display: block;
        width: 60px;
        height: 25px;
        background:orangered;
        color:#fff;
        border:none;
        border-radius: 15px;
        outline: none;
    }
    .more{
        margin: 10px;
        background: #2afedd;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 20px;
    }
    .btn-list{
        display: flex;
        justify-content:space-around;
    }
</style>
