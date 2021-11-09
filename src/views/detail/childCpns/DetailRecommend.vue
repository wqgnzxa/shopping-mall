<template>
  <div class="recommend">
    <div class="recommend-content" v-for="items in recommendList.list">
      <div class="recommendinfo">
        <img :src="items.image" alt="" class="recommend-img" />
        <span class="recommend-title">{{ items.title }}</span>
        <span class="recommend-price">{{ items.price }}</span>
        <span class="recommend-cfav">
          <span class="icon-star"></span>{{ items.cfav }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: {
    recommendList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
/* .recommend {
} */

.recommend-content {
  display: flex;
  /* flex-wrap: wrap; */
  width: 100%;
}
.recommendinfo {
  flex: 1;
  display: inline-block;
  width: 45%;
}
.recommend-img {
  height: 160px;
}
</style>