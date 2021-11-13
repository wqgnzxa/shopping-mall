<template>
  <div class="cartlist">
    <better-scroll
      class="content"
      ref="scroll"
      :pullUpLoad="true"
      :probe-type="3"
    >
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      />
    </better-scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem.vue";
import BetterScroll from "../../../components/common/scroll/BetterScroll.vue";

export default {
  components: {
    CartListItem,
    BetterScroll,
  },
  name: "cartlist",
  activited() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style>
.cartlist {
  width: 100%;
}
</style>