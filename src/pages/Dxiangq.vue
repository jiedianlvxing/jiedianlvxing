<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-16 02:29:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
     <Dxiangqheader :id="this.$route.params.id"></Dxiangqheader>
  </div>
</template>

<script>
import Dxiangqheader from '../components/Dxiangqheader';


export default {
  name: 'tripinner',
  props:["id"],
  data () {
    return {
     
    }
  },
  components:{
     Dxiangqheader
  },
  mounted(){
        console.log(this.$route.params.id)
    }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  background-color: rgb(246, 241, 241);
  overflow: hidden;
}


</style>
