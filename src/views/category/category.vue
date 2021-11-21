<template>
  <div id="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="category-item">
      <category-left-nav
        :leftNavlist="leftNavlist"
        @categoryChoosed="categoryChoosed"
      />
      <div class="right-item">
        <better-scroll class="content" :probeType="3">
          <category-right-img :rightImginfo="rightImginfo" />
        </better-scroll>
        <!-- <category-right-list /> -->
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import CategoryLeftNav from "../category/childCpns/CategoryLeftNav.vue";
import CategoryRightImg from "../category/childCpns/CategoryRightImg.vue";
import CategoryRightList from "../category/childCpns/CategoryRightList.vue";
import BetterScroll from "../../components/common/scroll/BetterScroll.vue";

import {
  getCategoryLeftNav,
  getCategoryRightImg,
  getCategoryRightList,
} from "../../network/category";

export default {
  name: "category",
  data() {
    return {
      leftNavlist: [],
      maitKey: 3627,
      miniWallkey: 10062603,
      rightImginfo: [],
      rightItemlist: [],
    };
  },
  components: {
    CategoryLeftNav,
    CategoryRightImg,
    CategoryRightList,
    BetterScroll,
    NavBar,
  },
  created() {
    this.getCategoryLeftNav();
    this.getCategoryRightImg(this.maitKey);
    this.getCategoryRightList(this.miniWallkey, "new");
    this.getCategoryRightList(this.miniWallkey, "sell");
    this.getCategoryRightList(this.miniWallkey, "pop");
  },
  methods: {
    // 获取左侧导航栏数据
    getCategoryLeftNav() {
      getCategoryLeftNav().then((res) => {
        console.log("LeftNav", res);
        const data = res.data.data.category;
        this.leftNavlist = data.list;
        console.log(this.leftNavlist);
      });
    },
    // 获取右侧图片数据
    getCategoryRightImg(maitKey) {
      getCategoryRightImg(maitKey).then((res) => {
        console.log("RightImg", res);
        const data = res.data.data;
        this.rightImginfo = data.list;
      });
    },
    // 获取右侧列表数据
    getCategoryRightList(miniWallkey, type) {
      getCategoryRightList(miniWallkey, type).then((res) => {
        console.log("RightList", res);
        const data = res.data.data;
        this.rightItemlist = data;
      });
    },
    // 当左侧列表被点击后返回的被点击项的maitKey、miniWallkey的值。
    categoryChoosed(maitKey, miniWallkey) {
      this.maitKey = maitKey;
      this.miniWallkey = miniWallkey;
      this.getCategoryRightImg(maitKey);
      this.getCategoryRightList(miniWallkey, "new");

      console.log(maitKey, miniWallkey);
    },
  },
};
</script>

<style>
.category-item {
  display: flex;
}

.category-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  height: calc(100vh - 44px);
}

.right-item {
  width: 75%;
}
</style>