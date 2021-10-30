<template>
  <div id="app">
    <main-tabbar/>
  </div>
</template>

<script>
import MainTabbar from './components/content/maintabbar/MainTabbar'

export default {
  name: 'app',
  components: {
    MainTabbar,
  }
}
</script>

<style>
@import "./assets/css/base.css"
</style>
