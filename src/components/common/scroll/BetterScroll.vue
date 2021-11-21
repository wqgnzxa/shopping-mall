<template>
  <!-- vue里获取子组件的方式，children和ref -->
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
  data() {
    return {
      isPullUpLoad: false,
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  mounted() {
    this.initBscroll();
    // 监听滚动的位置
    this.bscroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });
  },
  methods: {
    initBscroll() {
      // document.querySelector(".wrapper");
      this.bscroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        observeDOM: true,
        observeImage: true,
      });
      if (this.pullUpLoad) {
        this.bscroll.on("pullingUp", this.pullingUpHandler);
        console.log("上拉加载啦！");
      }
    },
    pullingUpHandler() {
      this.isPullUpLoad = true;

      this.$emit("getItemList");

      console.log("请求新数据啦！");
      // 主动调用一次这个方法
      this.bscroll.finishPullUp();
      this.bscroll.refresh();
      this.isPullUpLoad = false;
    },
    scrollTo(x, y, time = 300) {
      this.bscroll.scrollTo(x, y, time);
    },

    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style scoped>
.wrapper {
  /* 也可以用定位解决这个问题 */
  height: calc(100vh - 93px);
  /* background-color: rgb(194, 34, 34); */
  overflow: hidden;
  /* margin-top: 44px; */
}
</style>