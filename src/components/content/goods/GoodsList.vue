<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item" />
    <!-- {{goods}} -->
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
  /* height: 150px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 1%;
  padding-bottom: 50px;
}
</style>