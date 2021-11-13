<template>
  <div class="toast" v-show="isshow">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      message: "未定义toast内容",
      isshow: false,
      duration: 1000,
    };
  },
  methods: {
    showup(message, duration) {
      this.message = message;
      this.isshow = true;
      setTimeout(() => {
        this.isshow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}

.toast span {
  padding: 5px 8px;
  font-size: 18px;
  color: #fff;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>