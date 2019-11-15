<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-11 10:27:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
  <div class="box">
    <div class="firstsou">
    <div class="sousou">
        <img class="searchimg" src="../assets/imgs/search.png" alt="">
        <input type="text" :placeholder="tip" />
    </div>
     <img class="shoppcar" src="../assets/imgs/shoppcar.png" alt="">
     <img class="shoppcar" src="../assets/imgs/transl_massage.png" alt="">
        
    </div>
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
.box{
    width:100%;
    height:.5rem;
    background:#f8f7fd;
}
.firstsou{
    display: flex;
    align-items: center;
    margin:0 auto;
}
.sousou{
  position: relative;
  background-color: rgb(255,255,255,0.267);
  z-index:1;
  width:60%;
  height:.4rem;
  border-radius: .25rem;
  margin:10px;
  color:wheat;
  display: flex;
  align-items: center;
}

.searchimg{
  width:.2rem;
  height:.2rem;
  position:absolute;
  top:25%;
  left:10%;
}
input{
 margin-left:23%;
 width:70%;
 height:.3rem;
 border-radius:20px;
 outline: none;
 border:none;
}
.shoppcar{
  width:.2rem;
  height:.2rem;
  margin-left:.25rem;
}
</style>
