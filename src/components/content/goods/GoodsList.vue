<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item" />
    <!-- {{goods}} -->
    <div class="goodsEnd">已经到底啦!</div>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  /* height: 600px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 1%;
}

.goodsEnd {
  width: 100%;
  height: 260px;
  background-color: #f6f6f6;
  line-height: 60px;
  text-align: center;
}
</style>