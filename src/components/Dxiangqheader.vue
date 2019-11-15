<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-15 10:32:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
      <router-link to="/Htripinner" ><i class="el-icon-arrow-left" id="jt"></i></router-link>
      <!-- 轮播图 -->
      <i class="el-icon-share" ></i>
      <div>
          <mt-swipe :show-indicators="false" :auto="1000" id="lbbox">
            <mt-swipe-item class="lblist"><img src="../assets/img/banner3.png" alt=""></mt-swipe-item>
            <mt-swipe-item class="lblist"><img src="../assets/img/banner4.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item class="lblist"><img src="../assets/img/banner5.jpg" alt=""></mt-swipe-item>
          </mt-swipe>
      </div>
      
<!-- 文本 -->
      <div id="wenben">
          <h2>泰国旅游普吉岛旅游6天5晚纯玩半自由行跟团游 亲子蜜月旅行团</h2>
          <span>105CNY起</span>
          <p>等值于105CEEC &nbsp; 等值于12352.94TNW</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'tripinner',
  data () {
    return {
      
    }
  },
  created:function() { 
       fetch('/api/Travellx/selectTravellx')
        .then((res)=>{     
            return res.text();  
            })
         .then((res)=>{ 
            console.log(res.travellxes); 
        this.jingxuans =  JSON.parse(res).travellxes;  
        })
        .catch(err=>{
            console.log(err)
        }) 
        }
 
}
</script>

<style scoped>
.box{
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
}
#jt{
    font-size: .3rem;
    position: absolute;
    top:10px;
    left: 10px;
    z-index: 11;
}
.el-icon-share{
    font-size: .3rem;
    position: absolute;
    top:10px;
    right: 10px;
    z-index: 11;
}
#lbbox{
    width: 100%;
    height: 2.5rem;
    position: relative;
}
.lblist{
    width: 100%;
    height: 2.5rem;
    position: absolute;
    top: 0;
    bottom: 0;
}
.lblist img{
    width: 100%;
    height: 2.5rem;
}
#wenben{
    width: 90%;
    height: .8rem;
    margin: -.2rem auto 0;
    z-index: 10;
    border-radius: 10px 10px 0 0;
    padding: 5%;
    background-color: #fff;
}
#wenben h2{
  margin: -.2rem auto 0;
}


</style>
