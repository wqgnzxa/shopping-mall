<template>
  <div class="cart-tab-bar">
    <!-- <div class="check-bottom" > -->
    <check-box :checked="isSelectedAll" @click.native="cbclk" />
    <span class="checkall"> 全选</span>
    <!-- <span class="icon-uncheckall" v-show="!allChecked && !allchecked"></span>
      <span class="icon-checkall" v-show="allChecked || allchecked"></span> -->

    <!-- </div> -->
    <div class="checkout">
      <div class="totalprice">
        合计:￥
        <span v-show="!this.TotalPrice">0</span>
        <span v-show="this.TotalPrice">{{ allprice }}</span>
      </div>
      <div class="buyit" @click="buyclk"><span>结算</span></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CheckBox from "../../../components/content/checkbox/CheckBox.vue";
export default {
  name: "carttabbar",
  components: {
    CheckBox,
  },
  data() {
    return {
      checked: true,
      TotalPrice: 0,
      allchecked: false,
    };
  },
  activited() {
    console.log("activited");
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList",
    }),
    allprice() {
      let itotal = 0;
      for (let i of this.$store.state.cartList.filter((i) => i.checked)) {
        let icount = i.count * 1,
          iprice = i.price * 1;
        itotal = itotal + icount * iprice;
        console.log(i, icount, iprice, itotal);
      }
      this.TotalPrice = itotal;
      return this.TotalPrice.toFixed(2);
    },
    isSelectedAll() {
      if (this.length === 0) return false;
      // 1.遍历方法
      // for (let item of this.list) {
      //   if (!item.checked) {
      //     return false;
      //   }
      // }
      // return true;
      // 2.find方法
      // return !this.list.find((item) => !item.checked);
      // 3.filter方法
      return !this.list.filter((item) => !item.checked).length;
    },
  },
  methods: {
    cbclk() {
      if (this.isSelectedAll) {
        this.list.forEach((item) => (item.checked = false));
      } else {
        this.list.forEach((item) => (item.checked = true));
      }
      console.log(this.list);
    },
    // if (this.allchecked) {
    //   for (let i in this.$store.state.cartList) {
    //     this.$store.getters.cartList[i].checked = true;
    //   }
    // } else {
    //   for (let i in this.$store.state.cartList) {
    //     this.$store.getters.cartList[i].checked = false;
    //   }
    // }
    buyclk() {
      if (!this.isSelectedAll) this.$toast.showup("请选择要购买的商品", 2000);
    },
  },
};
</script>

<style scoped>
.cart-tab-bar {
  display: flex;
  position: relative;
  bottom: 50px;
  left: 0;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  background-color: #eee;
  line-height: 50px;
  font-size: 14px;
}

.checkall {
  margin-left: 5px;
}

.icon-checkall {
  color: var(--color-tint);
  font-size: 20px;
}

.checkout {
  flex: 1;
  text-align: right;
  height: 50px;
  line-height: 50px;
}

.totalprice {
  display: inline-block;
  margin-right: 5px;
}

.totalprice span {
  font-size: 25px;
  color: rgba(255, 94, 0, 0.925);
  font-weight: 700;
  font-family: sans-serif;
}
.buyit {
  display: inline-block;
  width: 100px;
  height: 35px;
  line-height: 42px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  background-color: rgba(255, 94, 0, 0.925);
  border-radius: 30px;
}

.buyit span {
  vertical-align: top;
  line-height: 38px;
}
</style>