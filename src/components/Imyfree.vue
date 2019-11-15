<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-15 20:01:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div id="freeshangpin">
    <div id="wenben">
      <p>免费领取</p>
    <span>查看全部</span>
  </div>  
  <div id="bigboxlb">
    <mt-swipe :auto="5000" id="lbbox">
            <mt-swipe-item class="lblist">
                <img class="lbimg" src="../assets/img/tea.jpg" alt="">
                      <div id="imgright">
                      <p>川红 绿茶特级碧螺春2019明前新茶茶叶浓香型烘青绿茶100g</p>
                      <span>0CNY</span>
                      </div>
            </mt-swipe-item>



            <mt-swipe-item class="lblist">
                    <img class="lbimg" src="../assets/img/tea2.jpg" alt="">
                    <div id="imgright">
                    <p>龙井茶 125g茶叶 绿茶礼盒罐装 </p>
                    <span>0CNY</span>
                    </div>
              </mt-swipe-item>
</mt-swipe>
  </div>
   

    </div>
</template>

<script>
export default {
  components:{
    
  }
    
  }
    

</script>

<style scoped>
#freeshangpin{
    width: 90%;
    height: 1.6rem;
    background-color: pink;
    margin :3% auto;
    padding:.2rem 0;
    background: url(../assets/img/backfree.jpg);
    background-size: 100% 100%;
  }
  #wenben{
    margin-bottom: .1rem;
  }
  #wenben p{
    font-size: .2rem;
    font-weight: 900;
    display: inline-block;
  }
  #wenben span{
    margin-left: 58%;
    font-size: 14px;
    color: rgb(53, 56, 59);
  }
  
  .lblist{
    width: 100%;
    height:75%;
    font-size: 16px;
    display: flex;
    position: absolute;
    background-color: #fff;
  }

  .lbimg{
    display: block;
    width: 40%;
    height: 100%;
    border-radius: .2rem;
  }
  #imgright{
    width: 57%;
    height: 100%;
    margin: 0 0 0 3%;
  }
  #imgright p{
    font-size: .16rem;
  }
  #imgright span{
    display: inline-block;
    margin-top:10% ;
    font-size: .14rem;
  }
#bigboxlb{
  position: relative;
}

</style>
