<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      v-show="isTabFixed"
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
    />
    <!-- 不加冒号，传值都是字符串，加冒号，传的是数字 -->
    <better-scroll
      :probe-type="3"
      :pullUpLoad="true"
      @getItemList="loadMore"
      class="content"
      ref="scroll"
      @scroll="contentScroll"
    >
      <swipers :banners="banners" @swiperImgLoad="swiperImgLoad"></swipers>
      <recommend-views :recommends="recommends"></recommend-views>
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </better-scroll>
    <back-top @click.native="MbackTopclk" v-show="isShow" />
  </div>
</template>
<script>
import Swipers from "./childCpns/Homeswiper.vue";
import RecommendViews from "./childCpns/HomeRecommendView.vue";
import FeatureView from "./childCpns/FeatureView";
import BetterScroll from "../../components/common/scroll/BetterScroll.vue";

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import { BackTopMixIn } from "../../common/mixin";
// 因为getHomeMultidata没有用default导出，所以用{}导入。
import { getHomeMultidata, getHomeGoodsdata } from "../../network/home";
// import * as mockApi from "../../api/api.js";

export default {
  name: "home",
  components: {
    Swipers,
    RecommendViews,
    FeatureView,
    BetterScroll,
    NavBar,
    TabControl,
    GoodsList,
  },
  mixins: [BackTopMixIn],
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
      tabOffsetTop: 0,
      isTabFixed: false,
    };
  },
  created() {
    this.getHomeMultidata();
    //请求商品数据
    // this.getItemList("pop");
    // this.getItemList("new");
    // this.getItemList("sell");
    this.getHomeGoodsdata("pop");
    this.getHomeGoodsdata("new");
    this.getHomeGoodsdata("sell");
  },
  mounted() {},
  methods: {
    // 事件监听相关
    tabClick(index) {
      this.$refs.scroll.bscroll.refresh();
      this.$refs.scroll.scrollTo(0, -this.tabOffsetTop - 44);
      // console.log(this.$refs.scroll);
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoodsdata(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsdata(type, page)
        .then((res) => {
          this.goods[type].list.push(...res.data.data.list);
          // console.log(res, "网络请求到新数据啦！");
          // this.goods[type][page] += 1;
        })
        .catch((err) => {
          // console.log(err, "没有数据啦！");
          this.isPullUpLoad = false;
        });
    },
    // 通过mockjs模拟数据：
    // getItemList(type) {
    //   const page = this.goods[type].page + 1;
    //   mockApi
    //     .getItemList(type)
    //     .then((res) => {
    //       this.goods[type].list.push(...res.data[type][page].list);
    //       console.log("网络请求到新数据啦！");
    //       this.goods[type].page += 1;
    //     })
    //     .catch((err) => {
    //       console.log(err, "没有数据啦！");
    //       this.isPullUpLoad = false;
    //     });
    // },
    // backTopclk() {},
    contentScroll(position) {
      // // 判断BackTop是否显示
      // this.isShow = position.y < this.backposition;
      // 决定tabControl是否吸顶（position：fixed）
      this.isTabFixed = -position.y > this.tabOffsetTop;
      this.MisScroll(position, -this.tabOffsetTop);
    },
    loadMore() {
      this.getHomeGoodsdata(this.currentType);
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    },
  },
  actived() {
    this.$refs.scroll.refresh();
    this.$refs.bscroll.scrollTo(0, this.saveY, 0);
  },
  deactived() {
    this.saveY = this.$refs.bscroll.getScrollY();
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

.wrapper {
  overflow: hidden;
}

.tab-control {
  /* 适配不好：static-->fixed */
  position: relative;
  z-index: 9;
}
.active {
  display: block;
}

.fixed {
  position: fixed;
  left: 0;
  top: 44px;
}
</style>