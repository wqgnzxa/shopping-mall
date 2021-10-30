<template>
  <div class="TabBarItem" @click="itemClick" :class="{active:isActive}" :style="activeStyle">
    <slot name="tab-icon"  ></slot>
    <slot name="tab-text"></slot>
  <!-- <div class="icon-tab"></div>
    <span>首页</span> -->
  </div>
</template>

<script>

export default {
name: 'tabbaritem',
data() {
  return {
    // isActive:false
  }
},
props:{
  path:String,
  activeColor:{
    type: String,
    default: "red"
  }
},
computed:{
isActive(){
  return this.$route.path.indexOf(this.path) !== -1;
},
activeStyle(){
  return this.isActive? {color:this.activeColor} : {};
}
},
methods: {
  itemClick() {
    this.$router.replace(this.path)
  }
}

}
</script>

<style>
 .TabBarItem {
  margin: 0;
  padding: 5px;
  flex: 1;
  text-align: center;
  width: 45px;
  height: 45px;
  color: black;
} 
.TabBarItem .icon-tab {
  text-align: center;
  font-size: 20px;
}
.TabBarItem span {
  font-size: 15px;
}
</style>