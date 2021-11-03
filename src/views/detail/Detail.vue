<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
  </div>
</template>

<script>
import DetailNavBar from "./childCpns/DetailNavBar.vue";
import { getDetail } from "../../network/detail";
import DetailSwiper from "./childCpns/DetailSwiper.vue";

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  data() {
    return {
      iid: null,
      topImages: [],
    };
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;
    console.log(this.iid);
    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      // 1.获取顶部的图片轮播数据
      this.topImages = res.data.result.itemInfo.topImages;
      console.log(this.topImages);
    });
  },
};
</script>

<style>
#detail {
  width: 100%;
}
</style>