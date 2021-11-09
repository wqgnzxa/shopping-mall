<template>
  <div class="bottom-bar">
    <div class="service">
      <div class="serve">
        <span class="icon-serve"></span>
        <p>客服</p>
      </div>
      <div class="shop">
        <span class="icon-shop"></span>
        <p>店铺</p>
      </div>
      <div class="fsav">
        <span class="icon-fsav"></span>
        <p>收藏</p>
      </div>
    </div>
    <div class="content-right">
      <div class="addcart" @click="addtocart">加入购物车</div>
      <div class="buyit">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addtocart() {
      console.log("点击了");
      this.$emit("addtocart");
    },
  },
};
</script>

<style>
.bottom-bar {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 58px;
  z-index: 10;
  background-color: #fff;
  left: 0;
}

.service {
  flex: 1;
  display: inline-block;
  height: 100%;
  width: 50%;
}
.serve,
.shop,
.fsav {
  display: inline-block;
  width: 30%;
  font-size: 14px;
  text-align: center;
  line-height: 14px;
}

.icon-serve,
.icon-shop,
.icon-fsav {
  font-size: 23px;
  line-height: 32px;
}

.icon-serve {
  color: var(--color-tint);
}

.content-right {
  display: inline-block;
  flex: 1;
  height: 100%;
}

.addcart,
.buyit {
  display: inline-block;
  width: 50%;
  text-align: center;
  line-height: 58px;
  font-size: 15px;
}

.addcart {
  background-color: rgb(255, 238, 5);
}

.buyit {
  color: #fff;
  background-color: var(--color-tint);
}
</style>