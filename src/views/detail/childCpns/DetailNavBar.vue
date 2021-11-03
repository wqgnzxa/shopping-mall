<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="icon-back" @click="backClick"></div>
      <div slot="center" class="title">
        <div
          class="title-items"
          v-for="(items, index) in titles"
          :class="{ active: index === currentIndex }"
          @click="itemclk(index)"
        >
          {{ items }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";

export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    itemclk(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.title {
  display: flex;
  width: 100%;
}
.title-items {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-tint);
}
.icon-back {
  content: "";
  font-size: 30px;
  line-height: 44px;
  text-align: center;
}
</style>