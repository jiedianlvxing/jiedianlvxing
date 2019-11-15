<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-15 10:10:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
  <div class="category">
       <EChooset></EChooset>
       <EChoobottom></EChoobottom>
  </div>
</template>

<script>
import EChooset from '../components/EChooset';
import EChoobottom from '../components/EChoobottom';

export default {
  name: 'Choosetravel',
  data () {
    return {
    }
  },
  components:{
      EChooset,EChoobottom
  }

}
</script>

<style>

</style>
