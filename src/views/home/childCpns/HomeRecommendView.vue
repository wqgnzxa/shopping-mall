<template>
  <div class="recommend">
      <div class="recommend_contain" v-for="items in recommends">
        <a :href="items.link">
          <img :src="items.image">
          <div>{{items.title}}</div>
          </a></div>
  </div>
</template>

<script>
export default {
props:{
  recommends: {
    type: Array,
    default(){
      return []
    }
  }
}
}
</script>

<style>
.recommend {
  display: flex;
  padding: 20px 0;
  padding-bottom: 20px;
  height: 140px;
  width: 100%;
  border-bottom: 10px solid #ccc;
}
.recommend_contain {
  flex: 1;
  /* display: inline; */
  /* padding: 10px 0px; */
  /* margin-bottom: 20px; */
  height: 65;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}
.recommend_contain a img{
width: 85%;
}
</style>