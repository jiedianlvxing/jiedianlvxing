<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-15 10:15:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
    <nav>
    <ul>
         <router-link to="/Htripinner" class="toptubiao"><li><img src="../assets/img/b1.png" alt=""><span>旅行</span></li></router-link>
       
        <li class="toptubiao"><img src="../assets/img/b2.png" alt=""><span>商城</span></li>
        <li class="toptubiao"><img src="../assets/img/b3.png" alt=""><span>门票</span></li>
        <li class="toptubiao"><img src="../assets/img/b4.png" alt=""><span>游记</span></li>
        
        <li class="bottubiao"><img src="../assets/img/bb1.png" alt=""><span>视频</span></li>
        <li class="bottubiao"><img src="../assets/img/bb2.png" alt=""><span>故事</span></li>
        <li class="bottubiao"><img src="../assets/img/bb3.png" alt=""><span>达人IP</span></li>
        <li class="bottubiao"><img src="../assets/img/bb4.png" alt=""><span id="hfcz">话费充值</span></li>
        <li class="bottubiao"><img src="../assets/img/bb5.png" alt=""><span>公益</span></li>
        <li class="bottubiao"><img src="../assets/img/bb6.png" alt=""><span>结伴</span></li>
        <li class="bottubiao"><img src="../assets/img/bb7.png" alt=""><span>问答</span></li>
        <li class="bottubiao"><img src="../assets/img/bb8.png" alt=""><span>任务</span></li>
        <li class="bottubiao"><img src="../assets/img/bb9.png" alt=""><span>酒店</span></li>
        <li class="bottubiao"><img src="../assets/img/bb10.png" alt=""><span>交通</span></li>
         <div class="box" id="dha">优</div>
         <div class="box" id="dhb">热</div>
         <div class="box" id="dhc">新</div>
    </ul>
   
</nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    nav{
        z-index: 10;
    width: 100%;
    height: 2.5rem;
    font-size: 14px;
    margin-top: -.5rem;
}
nav ul{
width: 90%;
height: 2.5rem;
display: flex;
justify-content: space-around;
margin: 0 auto;
background-color: white;
border-radius: .2rem;
flex-wrap: wrap;
position: relative;
}
.toptubiao{
    margin: .15rem 2%;
    width: 20%;
    height: .8rem;
    text-decoration: none;
}
.toptubiao img{
    width:100%;
}
nav li span{
    display: inline-block;
    text-align: center;
    width:100%;
    height: .3rem;
}
.bottubiao{
    width: 12%;
    margin: .1rem 3%;
    height: .5rem;
}
.bottubiao img{
    display: inline-block;
    width:100%;
    height: .3rem;
}
.bottubiao img:nth-child(0){
    margin-top: .2rem;
}
#hfcz{
    width: 130%;
    margin-left: -15%;
}

@keyframes identifier {
  0%{
    transform:scale(1);
    transform: rotate(-30deg);
  }
  50%{
    transform:scale(1.5);
    
  }
  100%{
    transform:scale(1);
    transform: rotate(-30deg);
  }
}
.box {
  color: white;
    font-size: 1px;
	width:  10px;
	height: 10px;
	background-color: rgb(199, 4, 4);
    border-radius: 50% 50% 50% 0;
    transform-origin:left bottom;
    animation: identifier 2.5s .15s linear infinite;
}
#dha{
    position: absolute;
    top: 15px;
    left: 75px;
}
#dhb{
    position: absolute;
    top: 15px;
    left: 158px;
}
#dhc{
     position: absolute;
    top: 15px;
    left: 243px;
}


</style>
