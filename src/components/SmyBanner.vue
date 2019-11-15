<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-09 17:40:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
<div class="banner">
  <el-carousel indicator-position="none" arrow="never" id="lunbotu">
    <el-carousel-item v-for="item in 3" :key="item" id="lunbotu2">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}

</script>
<style sciped>
.el-carousel__container{
height:0;
}
.banner{
  width:100%;
  margin:0 auto;
}
  #lunbotu{
    width: 100%;
    height: 1.5rem;
  }
  #lunbotu2{
    width: 100%;
    height: 1.5rem;
  }
  .el-carousel__item:nth-child(2n) {
    background: url(../assets/imgs/gift_banner2.png) no-repeat;
    background-size:100% 100%;
  }
  .el-carousel__item:nth-child(2n+1) {
    background: url(../assets/imgs/gift_banner3.png) no-repeat;
    background-size:100% 100%;
  }
   
</style>
