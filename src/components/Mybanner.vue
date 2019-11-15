<!--
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-08 17:33:03
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-09 11:16:39
 -->
<template>
    <div class="banner">
        <div class="icon">
            <img src="../assets/img/core_order.png" alt="">
            <a href="#">全部订单</a>
        </div>
        <div class="icon">
            <img src="../assets/img/j1.png" alt="">
            <a href="#">代付款</a>
        </div>
        <div class="icon">
            <img src="../assets/img/j2.png" alt="">
            <a href="#">待处理</a>
        </div>
        <div class="icon">
            <img src="../assets/img/j3.png" alt="">
            <a href="#">待评价</a>
        </div>
        <div class="imgs">
            <img src="../assets/img/j4.png" alt="">
        </div>
        <div class="lis">
            <h3>必备工具</h3>
            <div class="boc">
                <img src="../assets/img/s.png" alt="">
                <a href="#">实名认证</a>
            </div>
            <div class="boc">
                <img src="../assets/img/x.png" alt="">
                <a href="#">提现账号</a>
            </div>
            <div class="boc">
                <img src="../assets/img/m.png" alt="">
                <a href="#">免费领取</a>
            </div>
            <div class="boc">
                <img src="../assets/img/t.png" alt="">
                <a href="#">常见问题</a>
            </div>
        </div>
         <div class="lis">
            <h3>常用工具</h3>
            <div class="boc">
                <img src="../assets/img/st.png" alt="">
                <a href="#">我的收藏</a>
            </div>
            <div class="boc">
                <img src="../assets/img/gift_cart_icon.png" alt="">
                <a href="#">购物车</a>
            </div>
            <div class="boc">
                <img src="../assets/img/xt.png" alt="">
                <a href="#">我的评论</a>
            </div>
            <div class="boc">
                <img src="../assets/img/ct.png" alt="">
                <a href="#">常用信息</a>
            </div>
        </div>
        <div class="lis">
            <h3>商务合作与服务</h3>
            <div class="boc">
                <img src="../assets/img/s1.png" alt="">
                <a href="#">旅行合作</a>
            </div>
            <div class="boc">
                <img src="../assets/img/s2.png" alt="">
                <a href="#">商城合作</a>
            </div>
            <div class="boc">
                <img src="../assets/img/s3.png" alt="">
                <a href="#">票务合作</a>
            </div>
            <div class="boc">
                <img src="../assets/img/s4.png" alt="">
                <a href="#">我要吐槽</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Mybanner',
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>
.banner{
    width: 96%;
    padding-top: .4rem;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    z-index: 10;
    background: white;
    margin:0 auto;
    border-radius: 6px;
}
.icon{
    width:20%;
    height: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: .16rem;
}
.icon img{
    display: block;
    width: 50%;
    height: .4rem;
    text-align: center;
}
a{
    font-size: .16rem;
}
.imgs{
    width:100%;
    /* height: 1rem; */
    display: flex;
    justify-content: center;
    padding-top: .2rem;
}
.imgs img{
    width: 85%;
    margin:0 auto;
    height: .8rem;
}
h3{
    margin-left: .4rem;
    padding-top: .4rem;
    font-size: .18rem;
}
.lis{
    width: 100%;
}
.boc{
    width: 20%;
    height:.8rem;
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-left: .15rem;
    float: left;
    /* clear: both; */
}
.boc img{
    display: block;
    width: 50%;
}
.boc img:last-child{
    margin-left: 0rem;
}
.boc a{
    color: #666666;
}
</style>