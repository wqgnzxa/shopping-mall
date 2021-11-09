<template>
  <TabBar>
    <tab-bar-item path="/home" activeColor="blue">
      <template slot="tab-icon">
        <div class="icon-tab"></div>
        <span>首页</span>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category" activeColor="blue">
      <template slot="tab-icon">
        <div class="icon-tab"></div>
        <span>分类</span>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/shopcart" activeColor="blue">
      <template slot="tab-icon">
        <div class="icon-tab"></div>
        <span>购物车</span>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile" activeColor="blue">
      <template slot="tab-icon">
        <div class="icon-tab"></div>
        <span>我的</span>
      </template>
    </tab-bar-item>
  </TabBar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar.vue";
import TabBarItem from "../../common/tabbar/TabBarItem.vue";

export default {
  name: "maintabbar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>