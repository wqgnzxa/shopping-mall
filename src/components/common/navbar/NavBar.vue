<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  z-index: 9;
}

.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
  text-align: center;
}
</style>