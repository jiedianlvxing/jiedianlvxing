<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-15 10:09:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
     <Iserch id="serch"></Iserch>
     <Imynav></Imynav>
     <Imyfree></Imyfree>
     <Ieletab></Ieletab>
     <Imyfooter></Imyfooter>
  </div>
</template>

<script>
import Iserch from '../components/Iserch';
import Imynav from '../components/Imynav';
import Imyfree from '../components/Imyfree';
import Ieletab from '../components/Ieletab';
import Imyfooter from '../components/Imyfooter';

export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  components:{
      Iserch, Imynav,Imyfree,Ieletab,Imyfooter
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
}
#serch{
  margin-top: -5px;
}


</style>
