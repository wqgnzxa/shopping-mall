<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="center">购物街</div></nav-bar>
    <!-- 不加冒号，传值都是字符串，加冒号，传的是数字 -->
    <better-scroll
      :probe-type="3"
      :pullUpLoad="true"
      @getItemList="loadMore"
      class="content"
      ref="scroll"
      @scroll="contentScroll"
    >
      <swipers :banners="banners"></swipers>
      <recommend-views :recommends="recommends"></recommend-views>
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods" />
    </better-scroll>
    <back-top @click.native="backTopclk" v-show="isShow" />
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
import BackTop from "../../components/common/backTop/BackTop.vue";

// 因为getHomeMultidata没有用default导出，所以用{}导入。
import {
  getHomeMultidata,
  // getHomeGoodsdata,
} from "../../network/home";
import * as mockApi from "../../api/api.js";

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
    BackTop,
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
      backposition: -590,
      isShow: false,
    };
  },
  created() {
    this.getHomeMultidata();
    //请求商品数据
    this.getItemList("pop");
    this.getItemList("new");
    this.getItemList("sell");
  },
  methods: {
    // 事件监听相关
    tabClick(index) {
      this.$refs.scroll.scrollTo(0, -543);
      this.$refs.scroll.bscroll.refresh();
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
    },
    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getItemList(type) {
      const page = this.goods[type].page + 1;
      mockApi
        .getItemList(type)
        .then((res) => {
          this.goods[type].list.push(...res.data[type][page].list);
          console.log("网络请求到新数据啦！");
          this.goods[type].page += 1;
        })
        .catch((err) => {
          console.log(err, "没有数据啦！");
          this.isPullUpLoad = false;
        });
    },
    backTopclk() {
      // console.log("this.$refs.scroll");
      this.$refs.scroll.scrollTo(0, -10, 500);
    },
    contentScroll(position) {
      this.isShow = position.y < this.backposition;
    },
    loadMore() {
      this.getItemList(this.currentType);
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
#home {
  padding-top: 44px;
}
.home_nav {
  background-color: var(--color-tint);
  color: #fff;
}

.wrapper {
  overflow: hidden;
}

.tab-control {
  /* 适配不好：static-->fixed */
  position: sticky;
  top: 44px;
}
.active {
  display: block;
}
</style>