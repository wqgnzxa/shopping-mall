<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot='center'>购物街</div></nav-bar>
    <swipers :banners="banners" ></swipers>
    <recommend-views :recommends="recommends"></recommend-views>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
    <goods-list :goods="goods['pop'].list"/>
  </div>
</template>
<script>

import Swipers from './childCpns/Homeswiper.vue'
import RecommendViews from './childCpns/HomeRecommendView.vue'
import FeatureView from './childCpns/FeatureView'

import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

// 因为getHomeMultidata没有用default导出，所以用{}导入。
import { 
  getHomeMultidata,
  getHomeGoodsdata,
} 
  from '../../network/home'

export default {
  name: 'home',
  components: {
    Swipers,
    RecommendViews,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    },
    data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        pop:{page: 0,list:[]},
        news: {page: 0,list:[]},
        sell: {page: 0,list:[]},
      }
    }
  },
    created(){
    this.getHomeMultidata()
//请求商品数据
    this.getHomeGoodsdata('pop')
    this.getHomeGoodsdata('new')
    this.getHomeGoodsdata('sell')
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
  // console.log(res);
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
       getHomeGoodsdata(type) {
        const page = this.goods[type].page + 1;
        getHomeGoodsdata(type,page).then(res => {
          console.log(res);
          this.goods[type].list.pushi(...res.data.list)
          this.goods[type].page += 1;
        })
      },
    }
}
</script>
<style scoped>
.home_nav {
  background-color: var(--color-tint);
  color: #fff;
}

.tab-control {
  /* 适配不好：static-->fixed */
  position: sticky;
  top: 44px;
}
</style>