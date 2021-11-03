<template>
  <swiper
    :options="swiperOption"
    ref="mySwiper"
    class="detail-swiper"
    v-if="topImages.length"
  >
    <swiper-slide v-for="items in topImages" class="detail-swiper-item"
      ><img :src="items"
    /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev" v-show="false"></div>
    <div class="swiper-button-next" slot="button-next" v-show="false"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

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
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
};
</script>

<style scope>
.detail-swiper {
  width: 100%;
  height: 220px;
  vertical-align: center;
}
.swiper-container {
  position: relative;
  background: pink;
}
.swiper-container .swiper-slide {
  line-height: 180px;
  /* background: yellowgreen; */
  color: #000;
  font-size: 16px;
  text-align: center;
}
.detail-swiper-item img {
  width: 100%;
}
</style>