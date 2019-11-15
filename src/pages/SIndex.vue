<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-15 16:53:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
  <div class="category">
       <Search></Search>
       <SmyBanner></SmyBanner>
       <Sclassification></Sclassification>
       <SPoverty></SPoverty>
       <Shometown></Shometown>
       <Srecommend></Srecommend>
       <Sindexfl></Sindexfl>
  </div>
</template>

<script>
import Search from '../components/Search';
import SmyBanner from '../components/SmyBanner';
import Sclassification from '../components/Sclassification';
import SPoverty from '../components/SPoverty';
import Shometown from '../components/Shometown';
import Srecommend from '../components/Srecommend';
import Sindexfl from '../components/Sindexfl';

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components:{
      Search,SmyBanner,Sclassification,SPoverty,Shometown,Srecommend,Sindexfl
  }

}
</script>

<style>

</style>
