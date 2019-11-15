<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-15 09:38:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
   <div>
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

export default {
  name: 'tripinner',
  data() {
      return {
      };
    },
    methods: {
     miaos(data){
            
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
