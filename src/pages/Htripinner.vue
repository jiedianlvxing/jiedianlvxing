<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-15 09:53:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
    
     <Htripinnerserch></Htripinnerserch>
     <Htripinneritime></Htripinneritime>
     <Htripinnerlist></Htripinnerlist>
  
  </div>
</template>

<script>
import Htripinnerserch from '../components/Htripinnerserch';
import Htripinneritime from '../components/Htripinneritime';
import Htripinnerlist from '../components/Htripinnerlist';



export default {
  name: 'tripinner',
  data () {
    return {
      
    }
  },
  components:{
     Htripinnerserch,Htripinneritime,Htripinnerlist
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
}


</style>
