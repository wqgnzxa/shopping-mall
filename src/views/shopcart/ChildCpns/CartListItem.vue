<template>
  <div class="goodsdetail">
    <check-box
      class="check-button"
      :checked="product.checked"
      @click.native="boxclk"
    />
    <div class="item-left"><img :src="product.image" alt="" /></div>
    <div class="item-right">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="item-price">{{ product.price }}</div>
      <div class="item-count">x{{ product.count }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckBox from "../../../components/content/checkbox/CheckBox.vue";
export default {
  components: {
    CheckBox,
  },
  data() {
    return {
      ischecked: true,
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList",
    }),
  },
  methods: {
    boxclk() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>

<style>
.goodsdetail {
  display: flex;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ccc;
}

.item-left {
  flex-wrap: 1;
  width: 30%;
  margin: 0 10px;
}

.item-right {
  flex: 1;
  width: 65%;
  position: relative;
}

.item-right div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-left img {
  width: 80px;
  height: 100px;
  border-radius: 8px;
}

.item-title {
  font-size: 20px;
  margin-bottom: 15px;
}

.item-desc {
  font-size: 16px;
  margin-bottom: 20px;
}

.item-price {
  font-size: 20px;
  color: orange;
  display: inline-block;
  text-align: left;
}

.item-count {
  position: absolute;
  bottom: 6px;
  right: 5px;
  font-size: 20px;
  display: inline-block;
  text-align: right;
}
</style>