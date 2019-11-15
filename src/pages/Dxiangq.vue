<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-15 10:18:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
     <Dxiangqheader></Dxiangqheader>
     <Dxcxinx></Dxcxinx>
     <Dcxrs></Dcxrs>
     <Dxiangqtab></Dxiangqtab>
  </div>
</template>

<script>
import Dxiangqheader from '../components/Dxiangqheader';
import Dxcxinx from '../components/Dxcxinx';
import Dcxrs from '../components/Dcxrs';
import Dxiangqtab from '../components/Dxiangqtab';


export default {
  name: 'tripinner',
  data () {
    return {
      
    }
  },
  components:{
     Dxiangqheader,Dxcxinx,Dcxrs,Dxiangqtab
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  background-color: rgb(246, 241, 241);
}


</style>
