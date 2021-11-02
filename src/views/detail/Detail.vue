<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childCpns/DetailNavBar.vue";

export default {
  name: "detail",
  components: {
    DetailNavBar,
  },
  data() {
    return {
      iid: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  },
};
</script>

<style>
#detail {
  padding: 0;
}
</style>