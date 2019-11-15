<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-12 18:13:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
 <div class="Travel">
     <div class="TravelTop">
         <span>＜</span>
         <h2>选择出行信息</h2>
     </div>
     <hr>
 </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style sciped>
.Travel{
    width:100%;
    height:.5rem;
    margin:0;
    padding:0;
    font-size:16px;
    position: relative;
    text-align: center;
    line-height: .5rem;
}
.TravelTop span{
    position: absolute;
    top:-10;
    left:0;
    font-size:25px;
}
</style>
