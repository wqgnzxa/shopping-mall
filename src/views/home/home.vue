<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="center">购物街</div></nav-bar>
    <swipers :banners="banners"></swipers>
    <recommend-views :recommends="recommends"></recommend-views>
    <feature-view />
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    />
    <div class="wrapper">
      <!-- <li> -->
      <goods-list :goods="showGoods" />
      <!-- </li> -->
    </div>
  </div>
</template>
<script>
import Swipers from "./childCpns/Homeswiper.vue";
import RecommendViews from "./childCpns/HomeRecommendView.vue";
import FeatureView from "./childCpns/FeatureView";
import BScroll from "better-scroll";
import Pullup from "@better-scroll/pull-up";

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

// 因为getHomeMultidata没有用default导出，所以用{}导入。
import {
  getHomeMultidata,
  // getHomeGoodsdata,
} from "../../network/home";
import * as mockApi from "../../api/api.js";

BScroll.use(Pullup);

export default {
  name: "home",
  components: {
    Swipers,
    RecommendViews,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isPullUpLoad: false,
    };
  },
  created() {
    this.getHomeMultidata();
    //请求商品数据
    // this.getHomeGoodsdata('pop')
    // this.getHomeGoodsdata('new')
    // this.getHomeGoodsdata('sell')
    this.getItemList("pop");
    this.getItemList("new");
    this.getItemList("sell");
  },
  mounted() {
    this.initBscroll();
  },
  methods: {
    // 事件监听相关
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    //  getHomeGoodsdata(type) {
    //   const page = this.goods[type].page + 1;
    //   getHomeGoodsdata(type,page).then(res => {
    //     // console.log(res);
    //     this.goods[type].list.pushi(...res.data.list)
    //     this.goods[type].page += 1;
    //   })
    // },
    getItemList(type) {
      const page = this.goods[type].page + 1;
      mockApi
        .getItemList(type)
        .then((res) => {
          // console.log(res);
          // console.log(res,type);
          this.goods[type].list.push(...res.data[type][page].list);
          // console.log(res.data[type][page].list);
          console.log(6666);
          // this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    initBscroll() {
      this.bscroll = new BScroll(document.querySelector(".wrapper"), {
        probeType: 3,
        pullUpLoad: {
          threshold: 5,
        },
      });
      this.bscroll.on("pullingUp", this.pullingUpHandler);
      console.log(1111);
    },
    pullingUpHandler() {
      this.isPullUpLoad = true;

      this.getItemList(this.currentType);

      console.log(2222);
      this.bscroll.finishPullUp();
      this.bscroll.refresh();
      this.isPullUpLoad = false;
    },
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>
<style scoped>
.home_nav {
  background-color: var(--color-tint);
  color: #fff;
}

.tab-control {
  /* 适配不好：static-->fixed */
  position: sticky;
  top: 44px;
}
.wrapper {
  height: 520px;
  background-color: rgb(194, 34, 34);
  overflow: hidden;
}
</style>