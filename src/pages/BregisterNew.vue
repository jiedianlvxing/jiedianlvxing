<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-15 10:08:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
  <div class="category">
      <BreTravel></BreTravel>
      <BreEffectiveDate></BreEffectiveDate>
      <BreCommodity></BreCommodity>
  </div>
</template>

<script>
import BreTravel from '../components/BreTravel';
import BreEffectiveDate from '../components/BreEffectiveDate';
import BreCommodity from '../components/BreCommodity';


export default {
  name: 'registerNew',
  data () {
    return {
    }
  },
  components:{
      BreTravel,BreEffectiveDate,BreCommodity
  }

}
</script>

<style>

</style>
