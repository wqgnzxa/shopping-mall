<template>
  <div class="goods">
    <goods-list-item v-for="items in goods"/ :goodsItem="item">
{{goods}}
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
name: 'GoodsList',
components:{
  GoodsListItem
},
props: {
  goods: {
    type: Array,
    default() {
      return []
    }
  }
}
}
</script>

<style>

</style>