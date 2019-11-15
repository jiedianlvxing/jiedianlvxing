<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-16 00:04:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
  <div class="fenlei">
  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="精选"><Slxjx></Slxjx></el-tab-pane>
    <el-tab-pane label="消费扶贫"><Slxlx></Slxlx></el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import Slxjx from '../components/Slxjx';
import Slxlx from '../components/Slxlx';
export default {
  components:{
     Slxjx,Slxlx
  }
}
</script>

<style sciped>
.fenlei{
    width:100%;
    height:100%;
    font-size:16px;
}
</style>
