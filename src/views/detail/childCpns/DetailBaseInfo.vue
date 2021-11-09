<template>
  <div class="detail-baseinfo" v-if="Object.keys(detailGoods).length !== 0">
    <div class="detail-baseinfo-title">{{ detailGoods.title }}</div>
    <div class="detailprice">
      <span class="newprice">{{ detailGoods.newPrice }}</span>
      <span class="oldprice" v-if="detailGoods.oldPrice !== undefined"
        >{{ detailGoods.oldPrice }}
      </span>
      <div
        class="discount"
        v-if="detailGoods.discount !== ''"
        :style="{ backgroundColor: detailGoods.discountBgColor }"
      >
        {{ detailGoods.discount }}
      </div>
    </div>
    <div class="columns">
      <span>{{ detailGoods.columns[0] }}</span>
      <span>{{ detailGoods.columns[1] }}</span>
      <span>{{
        detailGoods.services[detailGoods.services.length - 1].name
      }}</span>
    </div>
    <div class="services">
      <span
        class="services-item"
        v-for="index in detailGoods.services.length - 1"
        :key="index"
      >
        <img
          :src="detailGoods.services[index - 1].icon"
          v-if="detailGoods.services[index - 1].icon !== '' || undefined"
        />
        <span>{{ detailGoods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailbaseinfo",
  props: {
    detailGoods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.detail-baseinfo {
  padding: 20px 10px;
  padding-bottom: 25px;
  border-bottom: 8px solid #f6f6f6;
}

.detail-baseinfo-title {
  font-size: 18px;
  color: #333;
  text-align: justify;
}

.detailprice {
  padding: 18px 0;
}

.newprice {
  font-size: 25px;
  color: var(--color-high-text);
  margin-right: 5px;
}

.oldprice {
  font-size: 14px;
  text-decoration: line-through;
}

.discount {
  position: relative;
  display: inline-block;
  top: -15px;
  left: -5px;
  padding: 0 5px;
  /* width: 30px; */
  height: 18px;
  border-radius: 9px;
  line-height: 18px;
  text-align: left;
  color: #fff;
  font-size: 12px;
}

.discount span {
  height: 18px;
}

.columns {
  margin-top: 15px;
  padding-bottom: 8px;
  width: 100%;
  font-size: 14px;
  display: flex;
  border-bottom: 1px solid #f6f6f6;
  color: #666;
}

.columns span {
  flex: 1;
  text-align: center;
}
.detail-baseinfo .columns span:first-child {
  text-align: left;
}

.detail-baseinfo .columns span:last-child {
  text-align: right;
}

.services {
  display: flex;
  margin-top: 20px;
  text-align: justify;
  height: 20px;
}

.services-item {
  flex-grow: 1;
  text-align: center;
}

.services-item span {
  font-size: 12px;
  line-height: 20px;
  color: #666;
}
.services .services-item:first-child {
  text-align: left;
}

.services .services-item:last-child {
  text-align: right;
}

.services .services-item img {
  padding-right: 3px;
  height: 13px;
  vertical-align: inherit;
}
</style>