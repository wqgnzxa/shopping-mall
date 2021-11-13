<template>
  <div class="shopcart">
    <!-- 导航 -->
    <nav-bar class="cartnavbar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list />
    <!-- 商品汇总 -->
    <cart-tab-bar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "../../components/common/navbar/NavBar.vue";
import CartList from "./ChildCpns/CartList.vue";
import CartTabBar from "./ChildCpns/CartTabBar.vue";

export default {
  name: "shopcart",
  components: {
    NavBar,
    CartList,
    CartTabBar,
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
    }),
  },
};
</script>

<style>
.shopcart {
  height: 100%;
  width: 100%;
}
.content {
  height: 100vh - 44px - 49px - 44px;
}
.cartnavbar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
}
</style>