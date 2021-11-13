<template>
  <div class="checkbox">
    <div class="icon-checked" v-show="checked"></div>
    <div class="icon-unchecked" v-show="!checked"></div>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  props: {
    checked: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style>
.icon-checked,
.icon-unchecked {
  height: 100%;
  line-height: 50px;
  font-size: 20px;
  color: #fff;
}
.icon-checked {
  color: var(--color-tint);
}
.icon-unchecked {
  color: #aaa;
}
</style>