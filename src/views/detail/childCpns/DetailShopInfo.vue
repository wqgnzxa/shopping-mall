<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img class="shop-logo-icon" :src="shop.logo" />
      <div>{{ shop.name }}</div>
    </div>
    <div class="shop-item">
      <div class="shop-item-left">
        <div class="shop-sell">
          <span v-if="shop.sells > 10000"
            >{{ (shop.sells / 10000) | NumFixedto }}万</span
          >
          <span v-else>{{ shop.sells }}</span>
          <p>总销量</p>
        </div>
        <div class="shop-goods">
          <span>{{ shop.goodcount }}</span>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-score">
        <div v-for="items in shop.score">
          <p class="shop-score-name">{{ items.name }}</p>
          <p
            class="shop-score-num"
            :class="{
              scorebetter: items.isBetter,
              scoreisntbetter: !items.isBetter,
            }"
          >
            {{ items.score }}
          </p>
          <p v-show="items.isBetter" class="shop-good">高</p>
          <p v-show="!items.isBetter" class="shop-isntgood">低</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    NumFixedto(value) {
      // 截取当前数据到小数点后三位

      let transformVal = Number(value).toFixed(3);
      let realVal = transformVal.substring(0, transformVal.length - 1);
      // num.toFixed(3)获取的是字符串
      return Number(realVal);
    },
  },
};
</script>

<style>
.shop-info {
  margin-top: 40px;
  padding: 0 10px;
}

.shop-logo {
  height: 60px;
}

.shop-logo div {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  vertical-align: top;
  font-size: 18px;
}

.shop-logo-icon {
  margin-right: 5px;
  width: 60px;
  border: 3px solid #f6f6f6;
  border-radius: 40px;
}
.shop-item {
  margin-top: 30px;
  height: 140px;
}
.shop-item-left {
  display: inline-block;
  height: 90px;
  /* background-color: blue; */
  vertical-align: top;
}

.shop-item-left div {
  margin: 15px 0;
  line-height: 25px;
  margin-right: 25px;
}

.shop-sell {
  display: inline-block;
  text-align: center;
  margin-right: 5px;

  /* background-color: yellow; */
}

.shop-sell span {
  font-size: 18px;
}

.shop-sell p {
  margin-top: 5px;
  font-size: 14px;
}

.shop-goods {
  display: inline-block;
  text-align: center;
  padding-right: 10px;
  border-right: 1px solid #f6f6f6;
  /* background-color: red; */
}

.shop-goods span {
  font-size: 18px;
}

.shop-goods p {
  margin-top: 5px;
  font-size: 14px;
}

.shop-score {
  /* padding-left: 5px; */
  display: inline-block;
  height: 90px;
  text-align: left;
}

.shop-score p {
  display: inline-block;
  margin: 5px 0;
  height: 18px;
  font-size: 14px;
}

.shop-score-name {
  width: 65px;
}

.shop-score-num {
  width: 40px;
}

.shop-good {
  color: #fff;
  background-color: #f13e3a;
}
.shop-isntgood {
  color: #fff;
  background-color: #5ea732;
}
.scorebetter {
  color: #f13e3a;
}

.scoreisntbetter {
  color: #5ea732;
}
</style>