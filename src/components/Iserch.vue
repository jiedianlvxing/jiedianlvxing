<!--
 * @Author: your name
 * @Date: 2019-11-06 17:44:38
 * @LastEditTime: 2019-11-09 09:23:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\serch.vue
 -->
<template>
   <header>
       <div id="headbox">
            <span><p>西安市</p> 阴13℃</span>
            <img src="../assets/img/xiala.png" alt="" id="xiala">
            <div id="sousuolan">
                 <img src="../assets/img/sousuo.png" alt="" id="sousuo" >
                <input type="text" :placeholder="str">
            </div>
            <img src="../assets/img/tixing.png" alt="" id="tixing">
       </div>
  <el-carousel indicator-position="none" arrow="never" id="lunbosearch">
    <el-carousel-item v-for="item in 2" :key="item">
      
    </el-carousel-item>
  </el-carousel>
</header>
</template>


<script>
export default {
    data(){
        return{
            str:"网红打卡城市"               
        }         
    }
}
</script>

<style scoped>
header{
    width: 100%;
    height: 2.5rem;
}
   #headbox{
       z-index: 12;
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    width: 100%;
    height: .7rem;
    background-color:transparent;
    font-size: 10px;
    display: flex;
    vertical-align: center;
    align-items: center;
}
header span{
    width: .6rem;
    height: .3rem;
    text-align: center;
}
header span p{
    font-size: 16px;
}
#xiala{
    display: inline-block;
    width: .2rem;
    height: .2rem;
} 
header input::-webkit-input-placeholder { 
    color:white;
}
#sousuolan{
    background-color:rgba(255, 255, 255, 0.5);
   z-index: -1;
    width: 60%;
    height:.4rem ;
    border-radius: .25rem;
    margin: 10px;
    color: white;
}
#sousuolan input{
    margin-left: 23%;
     width: 77%;
     height:100% ;
     border-radius: .25rem;
     background-color:transparent;
     border: none;
     font-size: 16px;
     outline: none;
     color: white;
}
#tixing{
    width:.2rem;
    height: .2rem;
}
#sousuo{
    width: .2rem;
    height: .2rem;
    position: absolute;
    top:40%;
    left: 32%;
}



  
  .el-carousel__item:nth-child(2n) {
    background:url(../assets/img/banner.jpg);
    background-size: 100% 100%;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background:url(../assets/img/banner2.jpg);
    background-size: 100% 100%;
  }
  #lunbosearch{
      width: 100%;
      height: 2.5rem;
     display: block;
  }
</style>