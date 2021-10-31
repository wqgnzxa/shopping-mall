<template>
  <div class="tab-control">
<div v-for="(item,index) in titles" class="tab-item" :class="{active: index === currentIndex}" @click="itemclick(index)">
  <span>{{item}}</span>
</div>
  </div>
</template>

<script>
export default {
name: 'TabControl',
props: {
  titles: {
    type: Array,
    default(){
      return []
    }
  }
},
data(){
  return {
    currentIndex: 0
  }
},
methods: {
  itemclick(index) {
    this.currentIndex = index;
    this.$emit('tabClick',index)
  }
}
}
</script>

<style>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  width: 100%;
  text-align: center;
  background-color: #fff;
  z-index: 9;
}

.tab-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>