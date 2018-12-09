<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img :src="slide" alt="轮播"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  
  export default {
    name: 'carousel',
    props:['swiperSlides'],//this.swiperSlides
    data() {
      return {
        swiperOption: {
          autoplay:3500,
          setWrapperSize:true,
          pagination:{
            el:'.swiper-pagination'
          },
          observeParents:true,
        },
        //swiperSlides: [1, 2, 3, 4, 5]
      };  
    }
  }
</script>
<style scoped>
    img{
      width:100%;
    }
</style>