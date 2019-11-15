<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-16 02:21:17
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
            <mt-swipe-item class="lblist"><img :src="jingxuans.travellxsrc" alt=""></mt-swipe-item>
            <mt-swipe-item class="lblist"><img src="../assets/img/banner4.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item class="lblist"><img src="../assets/img/banner5.jpg" alt=""></mt-swipe-item>
          </mt-swipe>
      </div>
      
<!-- 文本 -->
      <div id="wenben">
          <h2> jingxuans.travellxtitle</h2>
          <span>105CNY起</span>
          <p>等值于105CEEC &nbsp; 等值于12352.94TNW</p>
      </div>
      
<div id="xcxinx">
  <ul>
    <li><span>线路安排：</span><p>厦门市区-集美学村-大丞岛-英雄三岛战地</p></li>
    <li><span>行程天数：</span><p>1天0夜形成</p></li>
    <li><span>集合信息：</span><p>07:30厦门市区（思明区、湖里区）各酒店接送</p></li>
  </ul>
    
</div>
<div id="xcxinx">
 
    <div id="cxr">
      <p>选择出行人和日期</p>
      <p>1成人+0儿童</p>
    </div>

    <div id="cxra">
      <div class="cxr">
        11/13周三<br>398CNY
      </div>
       <div class="cxr">
        11/13周四<br>398CNY
      </div>
       <div class="cxr">
        11/13周五<br>398CNY
      </div>
      <div class="cxr">
        更多日期
      </div>
    </div>
</div>
   <div id="tabbox">
           <ul>
               <li>产品描述</li>
               <li>行程介绍</li>
               <li>费用说明</li>
               <li>出行须知</li>
           </ul>
       </div>
       <div id="tabinner">
                <p>
                    <i class="el-icon-s-unfold"></i>
                                活动名称：【多人立减】满4成人立减200/单<br>
                                活动时间： 2019-10-31至2019-12-31<br>
                                适用团期：2019年11月：12日~30日<br>

                                2019年12月：1日~31日<br>

                                2020年1月：1日~4日、13日~16日<br>
                    <i class="el-icon-s-unfold"></i>
                                活动名称： 邮储银联信用卡最高立减500元/单<br>
                                活动时间： 2019-10-26至2020-01-31<br>
                                适用团期： 团期不限<br>

                    <i class="el-icon-s-unfold"></i>
                                活动名称： 途牛钱包首单最高立减30元，老户随机减最高50元<br>
                                活动时间： 2019-11-08至2019-11-30 <br>
                                适用团期：  团期不限 <br>
                </p>

                <img src="../assets/img/tabinner.jpg" alt="">
                <img src="../assets/img/tabinner1.jpg" alt="">
                <p>
                    云南四地0购物开心之旅
                    ★★★ 途牛人自己的品牌  牛人专线15人小团系列  郑重承诺 ★★★ <br>
                    直飞丽江，必选线路，做云南正面旅游，不安排购物店，超高性价比。<br>
                    ♬【牛人精心设计】♬：设计师亲身体验，寻找丽江香格里拉大理泸沽湖4地生态特色资源。<br>
                    ♬【炒鸡好满意度】♬：因为我们用心，好评保持在96%以上，安全人性、放心出游。<br>
                    ♬【优良品质保障】♬：全程0购物，活泼导游，实现小团出游，保证不超过15人出游。<br>
                    ♬【云南必去景点】♬：丽江香格里拉大理三古城，玉龙雪山，虎跳峡，普达措，洱海，泸沽湖女儿国。<br>
                    ♬【体验当地民俗】♬：香格里拉听扎西卓玛扎西德勒祝福，丽江同胖金妹手牵手民族打跳。<br>
                    ♬【牛出行快便捷】♬：淳朴老司机，24小时接送机，同一航班立即走，不怕飞机晚点。<br>
                    ♬【特色美食佳肴】♬：香格里拉土司宴或秘境藏王宴，丽江纳西喜宴体验纳西打跳。<br>
                    ♬【万物在于睡眠】♬：丽江束河特色纳西庭院客栈，香格里拉藏式酒店，大理远观海景房，泸沽湖民宿湖景房。
                </p>
       </div>
   </div>
  
</template>

<script>
import axios from 'axios';
export default {
  name: 'tripinner',
  props:["id"],
  data () {
    return {
      jingxuans:{}
    }
  },
  created:function() { 

     axios.get('Travellx/selectById?id='+this.id)
     .then(res=>{ 
         this.jingxuans=res.data.travellx;
     })
     .catch(err=>{
       console.log(err);
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
#xcxinx{
  width: 100%;
  margin:0 0 5px;
background-color: #fff;
}
#xcxinx ul{
  width: 90%;
  margin: 0 auto;
}
#xcxinx ul li{
  padding: 10px 0;
  width: 100%;
  border-bottom: .5px solid rgb(219, 219, 219);
}
#xcxinx{
  width: 100%;
  margin:5px 0;
background-color: #fff;
}
#cxr{
  width: 90%;
  height: .3rem;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  margin: 5% auto 0;
}
#cxra{
  width: 90%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
}
.cxr{
  font-size: 14px;
  width:20%;
  height: .3rem;
  border: 1px solid rgb(243, 237, 237);
  border-radius: 2px;
  float: left;
  padding: 2%;
}
#tabbox{
    width: 100%;
    height: .5rem;
    background-color:pink;
}
#tabbox ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}
#tabbox li{
    width: 25%;
    height: 100%;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
}


/* 下方盒子 */
#tabinner{
    background-color: #fff;
    width:100%;
    overflow: hidden;
}
.el-icon-s-unfold{
    font-size: .3rem;
    display: block;
    margin: .3rem 0 0;
}
#tabinner p{
    width: 80%;
    margin: 0 auto;
    line-height: .3rem;
}
img{
    display: block;
    width: 80%;
    margin: 0 auto;
}


</style>
