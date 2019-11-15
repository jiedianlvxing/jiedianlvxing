<!--
 * @Author: your name
 * @Date: 2019-11-08 17:58:47
 * @LastEditTime: 2019-11-11 11:07:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\eletab.vue
 -->
<template>

    <el-tabs type="border-card" id="daohang" >
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 精选</span>
     <lxjx></lxjx>
  </el-tab-pane>
  <el-tab-pane label="旅行"><lxlx></lxlx></el-tab-pane>
  <el-tab-pane label="商城"><lxsc></lxsc></el-tab-pane>
  <el-tab-pane label="票务"><lxpw></lxpw></el-tab-pane>
  <el-tab-pane label="游记"><lxyj></lxyj></el-tab-pane>
</el-tabs>
</template>


<script>
import lxjx from '../components/lxjx';
import lxlx from '../components/lxlx';
import lxsc from '../components/lxsc';
import lxpw from '../components/lxpw';
import lxyj from '../components/lxyj';
export default {
 components:{
     lxjx,lxlx,lxsc,lxpw,lxyj
  }
}


</script>

<style scoped>
#daohang{
    width: 100%;
    min-height: 5rem;
}
</style>