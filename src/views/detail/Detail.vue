<template>
  <div id="detail">
    <detail-nav-bar @itemclk="itemclk" ref="nav" />
    <better-scroll
      class="content"
      ref="scroll"
      :pullUpLoad="true"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <!-- <div>{{ $store.state.cartList.length }}</div> -->
      <detail-swiper :top-images="topImages" />
      <detail-base-info :detailGoods="detailGoods" />
      <shop-info :shop="shop" />
      <detail-info
        :detail-info="detailInfo"
        @detailImgLoad="detailImgLoad"
        ref="detailInfo"
      />
      <detail-params-info :paramsInfo="paramsInfo" ref="params" />
      <detail-rate-info :rateInfo="rateInfo" ref="rates" />
      <goods-list :goods="recommends" ref="recommend" />
    </better-scroll>
    <detail-bottom-bar @addtocart="addtocart" />
    <back-top @click.native="MbackTopclk" v-show="isShow" />
    <!-- <toast :message="message" :isshow="isshow" /> -->
  </div>
</template>

<script>
import DetailNavBar from "./childCpns/DetailNavBar.vue";
import DetailSwiper from "./childCpns/DetailSwiper.vue";
import DetailBaseInfo from "./childCpns/DetailBaseInfo.vue";
import ShopInfo from "./childCpns/DetailShopInfo.vue";
import DetailInfo from "./childCpns/DetailInfo.vue";
import DetailParamsInfo from "./childCpns/DetailParamsInfo.vue";
import DetailRateInfo from "./childCpns/DetailRateInfo.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import BetterScroll from "../../components/common/scroll/BetterScroll.vue";
import DetailBottomBar from "./childCpns/DetailBottomBar.vue";
// import Toast from "../../components/common/toast/toast.vue";

import { BackTopMixIn } from "../../common/mixin.js";

import { getDetail, getRecommend, Goods, Shop } from "../../network/detail";

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    ShopInfo,
    DetailInfo,
    DetailParamsInfo,
    DetailRateInfo,
    GoodsList,
    BetterScroll,
    DetailBottomBar,
    // Toast,
  },
  mixins: [BackTopMixIn],
  data() {
    return {
      iid: null,
      topImages: [],
      detailGoods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      rateInfo: {},
      recommends: [],
      themeTopYs: null,
      currentIndex: 0,
      duration: 2000,
    };
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;
    // console.log(this.iid);
    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      // 1.获取顶部的图片轮播数据
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;
      // console.log(this.topImages);
      // 2.获取商品信息
      this.detailGoods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      console.log(this.detailGoods);
      // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo);
      // console.log(this.shop);
      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // console.log("detailInfo", this.detailInfo);
      // 5.保存商品的参数信息
      this.paramsInfo = data.itemParams;
      // console.log("paramsInfo", this.paramsInfo);
      // 6.保存顾客评价信息
      this.rateInfo = data.rate;
      // console.log("rateInfo", this.rateInfo);
    });
    getRecommend(this.iid).then((res) => {
      // console.log("Recommend", res);
      const datalist = res.data.data.list;
      this.recommends = datalist;
    });
  },
  updated() {},
  methods: {
    getThemeTopY() {
      // 获取offset的时间很重要，creat和mounted都不对，update的会有错误，所以用nexttick下一帧获取,但是nexttick也不行，要在图片加载完成后再进行加载才正确。
      this.$nextTick(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.rates.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
        // console.log("themeTopYs", this.themeTopYs);
      });
    },
    detailImgLoad() {
      // console.log(this.$refs);
      this.getThemeTopY();
      // this.$refs.scroll.refresh();
    },
    itemclk(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 200);
      console.log(index);
    },
    contentScroll(position) {
      const positionY = -position.y + 45;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          this.themeTopYs[i] < positionY &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          console.log(i);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      this.MisScroll(position, -this.$refs.detailInfo.$el.offsetTop);
    },
    addtocart() {
      // console.log(11);
      // 1.获取购物车里需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.detailGoods.title;
      product.desc = this.detailGoods.desc;
      product.price = this.detailGoods.realPrice;
      product.iid = this.iid;
      console.log(product);
      //2.传入vuex
      this.$store.dispatch("addCart", product).then((res) => {
        console.log(res); //添加了新的商品
        //未封装时的toast用法：
        // this.message = res;
        // this.isshow = true;
        // setTimeout(() => {
        //   this.isshow = false;
        // }, 2000);
        // 封装用法
        this.$toast.showup(res, 2000);
      });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 11;
  height: 100vh;
  background-color: #fff;
}
.content {
  height: calc(100vh - 44px);
}
</style>