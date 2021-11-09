<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <!-- <div class="info-desc">{{ detailInfo.desc }}</div> -->
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <img
      class="descimg"
      v-for="(items, index) in detailInfo.detailImage[0].list"
      :key="index"
      :src="items"
      @load="imgLoad"
    />
  </div>
</template>

<script>
export default {
  name: "detailinfo",
  data() {
    return {
      imglength: 0,
      counter: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imglength) {
        this.$emit("detailImgLoad");
      }
    },
  },
  watch: {
    detailInfo() {
      this.imglength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style>
.detail-info {
  padding: 0 10px;
  border-bottom: 8px solid #f6f6f6;
}
/* .info-desc {
  font-size: 18px;
} */

.info-key {
  font-size: 18px;
  padding-bottom: 10px;
}
.descimg {
  width: 100%;
}
</style>