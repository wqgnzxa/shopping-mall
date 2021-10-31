<template>
  <div>
    我是用户
  </div>
</template>
<script>
import * as mockApi from '../../api/api.js'

    mockApi.getItemList().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })


export default {
  
}
</script>