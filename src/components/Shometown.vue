<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-11 09:06:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
  <div class="poverty">
      <div class="top">
           <h3>消费扶贫</h3>
           <img src="../assets/imgs/xin.png" alt="" class="xiaox">
      </div>
      <div class="bottom">
          <div class="photo">
              <img src="../assets/imgs/ (6).jpg" alt="">
              <div class="meng"></div>
              <span>咸 阳.烟 霞</span>
          </div>
          <div class="photo">
              <img src="../assets/imgs/ (2).jpg" alt="">
              <div class="meng"></div>
              <span>咸 阳.林 苑</span>
          </div>
          <div class="photo">
              <img src="../assets/imgs/ (4).jpg" alt="">
              <div class="meng"></div>
              <span>乌 海.凤 凰</span>
          </div>
          <div class="photo">
              <img src="../assets/imgs/ (5).jpg" alt="">
              <div class="meng"></div>
              <span>果 洛.瓦 尔</span>
          </div>
          <div class="photo">
              <img src="../assets/imgs/ (3).jpg" alt="">
              <div class="meng"></div>
              <span>丽 江.大 东</span>
          </div>
           <div class="photo">
              <img src="../assets/imgs/ (1).jpg" alt="">
              <div class="meng"></div>
              <span>查看更多</span>
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
.poverty{
    margin-bottom:10px;
}
.top{
    display:flex;
}
.top h3{
    font-size:30px;
    display:inline-block;
    
}
.xiaox{
    width:20px;
    height:20px;
    margin-top:17px;
}
.bottom{
    width:100%;
    display: flex;
     overflow-x: auto;
}
.photo{
    width:33%;
    position: relative;
    flex-shrink: 0;
}
.photo img{
    width:95%;
    height:1rem;
    display: block;
    border-radius: 5px;
    margin:0px 10px 0px 10px;
}
.photo .meng{
   width:95%;
    height:1rem;
    background: black;
    opacity: .55;
    border-radius: 5px;
    position:absolute;
    top:0px;
    left:0px;
    margin:0px 10px 0px 10px;
    
}
.photo span{
    font-size:22px;
    color:white;
    position:absolute;
    top: 33px;
    left: 17px;
}
</style>
