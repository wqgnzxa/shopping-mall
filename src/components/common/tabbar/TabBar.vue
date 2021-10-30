<template>
  <div id="TabBar">
<slot></slot>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem.vue'

export default {
name: 'Tabbar',
components: {
  TabBarItem
}
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#TabBar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  box-shadow: 0 -3px 1px rgba(80,80,80,0.2);
  background-color: #f6f6f6;
  text-align: center;
}
</style>