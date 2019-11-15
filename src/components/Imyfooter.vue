<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-15 10:31:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <footer>
        <router-link to="/" class="foottxt">
        <div><img src="../assets/img/bot1.png" alt=""><span>首页</span></div>
        </router-link>
        
        <router-link to="/Sindex" class="foottxt">
        <div><img src="../assets/img/bot2.png" alt=""><span>商城</span></div>
        </router-link>

        <router-link to="/Aweather" class="foottxt">
        <div id="middfoot"><img src="../assets/img/bot3.png" alt=""></div>
        </router-link>
        
         <router-link to="/Candlepage" class="foottxt">
        <div><img src="../assets/img/bot4.png" alt=""><span>糖果</span></div>
         </router-link>

          <router-link to="/MyPage" class="foottxt">
        <div><img src="../assets/img/bot5.png" alt=""><span>我的</span></div>
         </router-link>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height:.5rem;
    background-color: white;
    display: flex;
    justify-content: space-around;
  }
 .foottxt{
    width:20%;
    height: 100%;
    margin:0 2%;
  }
  .foottxt img{
    width:50%;
    height:50% ;
    margin-left: 26%;
  }
  .foottxt span{
    font-size: 14px;
    width: 100%;
    height: 30%;
    display: inline-block;
    text-align: center;
  }
  #middfoot img{
    width: 100%;
    height: 100%;
    margin-top: -20%;
    margin-left: 0%;
  }

</style>
