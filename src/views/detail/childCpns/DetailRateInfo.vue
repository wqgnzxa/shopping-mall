<template>
  <div class="rate-info" v-if="Object.keys(rateInfo).length !== 0">
    <div class="rate-title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="rate-content">
      <div class="userInfo">
        <img :src="rateInfo.list[0].user.avatar" />
        <div class="uname">{{ rateInfo.list[0].user.uname }}</div>
      </div>
      <div class="rate-content-Info">
        {{ rateInfo.list[0].content }}
      </div>
      <div class="rate-content-date">
        {{ rateInfo.list[0].created | showDate }}
      </div>
      <div class="rate-content-goods">{{ rateInfo.list[0].style }}</div>
      <div class="rate-content-goodspic">
        <span v-for="items in rateInfo.list[0].images"
          ><img :src="items"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../common/utils";

export default {
  name: "rateinfo",
  props: {
    rateInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      // 1.将时间戳转成Date对象
      const date = new Date(value * 1000);
      // 2.将date进行格式化
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.rate-info {
  margin: 30px 0;
  padding: 0 10px;
  border-top: 8px solid #f6f6f6;
  border-bottom: 8px solid #f6f6f6;
}

.rate-title {
  display: flex;
  padding: 25px 10px 20px 10px;
  font-size: 16px;
  border-bottom: 2px solid #f6f6f6;
}

.rate-title span {
  flex: 1;
}

.rate-title span:last-child {
  text-align: right;
}

.userInfo {
  margin-top: 30px;
}

.userInfo img {
  width: 40px;
  border-radius: 20px;
}

.userInfo div {
  display: inline-block;
  padding-left: 10px;
  height: 40px;
  vertical-align: middle;
  font-size: 18px;
}

.rate-content-Info {
  font-size: 16px;
  color: #888;
  line-height: 20px;
  padding-bottom: 15px;
}

.rate-content-date {
  display: inline-block;
  color: #aaa;
  margin-right: 5px;
  padding-bottom: 15px;
  font-size: 13px;
}

.rate-content-goods {
  display: inline-block;
  color: #aaa;
  padding-bottom: 15px;
  font-size: 13px;
}

.rate-content-goodspic {
  /* display: inline-block; */
  padding-bottom: 30px;
}

.rate-content-goodspic img {
  width: 70px;
  margin: 0 10px;
}
</style>