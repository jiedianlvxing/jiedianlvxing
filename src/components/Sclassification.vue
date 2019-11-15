<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-11 22:02:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
  <div class="category">
      <div class="firstca"> 
         <div class="one">
             <img src="../assets/imgs/gift_tea.png" alt="" class="cateimg">
             <span>茶 礼</span>
         </div>
         <div class="one">
             <img src="../assets/imgs/gift_wine.png" alt="" class="cateimg">
             <span>酒 饮</span>
         </div>
         <div class="one">
             <img src="../assets/imgs/gift_wen_brigade.png" alt="" class="cateimg">
             <span>文 创</span>
         </div>
         <div class="one">
             <img src="../assets/imgs/transl_market.png" alt="" class="cateimg">
             <span>粮 言</span>
         </div>
         <div class="one">
             <img src="../assets/imgs/my_free.png" alt="" class="cateimg">
             <span>零 食</span>
         </div>
         <div class="one">
             <img src="../assets/imgs/transl_xingcheng.png" alt="" class="cateimg">
             <span>装备</span>
         </div>
      </div>
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
.firstca{
    width:100%;
    display:flex;
    align-items: center;
    overflow-x: auto;
}
.one{
    width:100%;
    margin-right:40px;
    margin-top:20px;
    margin-bottom: 10px;
    text-align: center;
    
}
.one span{
    display:block;
    font-size:14px;
}
.one img{
    display:block;
    width:.4rem;
    height:.4rem;
}

</style>
