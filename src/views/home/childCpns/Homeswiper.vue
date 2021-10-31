<template>
<div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="items in banners"><a :href="items.link"><img :src="items.image"></a></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
       <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>  -->
    </swiper>
  </div></template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
 data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  props:{
      banners: Array,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper);
     // this.swiper.slideTo(3, 1000, false);
  }
}
</script>

<style scoped >
.recommendPage .swiper-container {
  position: relative;
  margin-top: 44px;
  width: 100%;
  height: 180px;
  background: pink;
}
.recommendPage .swiper-container .swiper-slide {
  width: 100%;
  line-height: 180px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
.swiper-slide a img{
  width: 100%;
  height: 100%;
}
</style>