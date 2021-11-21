<template>
  <div class="rightimg">
    <!-- <better-scroll class="content" :probeType="3"> -->
    <div class="img-item" v-for="items in rightImginfo">
      <a :href="items.link">
        <img :src="items.image" alt="" />
      </a>
    </div>
    <!-- </better-scroll> -->
  </div>
</template>

<script>
// import BetterScroll from "../../../components/common/scroll/BetterScroll.vue";
export default {
  name: "CategoryRightImg",
  components: {
    // BetterScroll,
  },
  props: {
    rightImginfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.rightimg {
  display: flex;
  flex-wrap: wrap;
}

/* .content {
  height: calc(100vh - 44px);
  width: 100%;
} */

.img-item {
  width: 45%;
  /* justify-content: space-around; */
}

.img-item a img {
  width: 100%;
}
</style>