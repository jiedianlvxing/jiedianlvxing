<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-13 10:32:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
   <div class="recommend">
       <div class="recommendTop">
           <div class="recomendLeft">
               <h3>今日推荐</h3>
               <img src="../assets/imgs/xin.png" alt="">
           </div>
           <div class="recomendRight">
               <p>查看更多</p>
           </div>
       </div>
       <div class="dindan">
           <div class="image">
               <img src="../assets/imgs/ (6).jpg" alt="">
               <span class="description">
                   <p>足迹面包750g/整箱</p>
                   <p>推荐语：营养早餐零食夹心糕点小点心充饥</p>
                   <p class="zhi">55CNY</p>
               </span>
           </div>
       </div>
       <div class="zone">
           <img src="../assets/imgs/7.jpg" alt="">
           <img src="../assets/imgs/8.jpg" alt="">
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
.recommend{
    width:100%;
}
.recommendTop{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.recomendLeft h3{
    font-size:32px;
}
.recomendLeft img{
    width:16px;
    height:16px;
    margin-top:20px;
}
.recommendTop{
    width:100%;
    height:.3rem;
}
.recomendLeft{
    width:50%;
    height:.3rem;
    display: flex;
}
.recomendRight{
    width:20%;
    height:.3rem;
}
.recomendRight p{
    margin-top:20px;
    font-size:16px;
}
.image{
    width:100%;
    border-radius: 5px;
    background:whitesmoke;
    margin-top:20px;
    line-height: 40%;
}
.image img{
    width:100%;
    height:100%;

}
.description{
    font-size:16px;
}
.description .zhi{
    color:red;
}
.zone{
    width:100%;
    margin-top:20px;
    border:5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.zone img{
    width:45%;
    height:45%;
}
</style>
