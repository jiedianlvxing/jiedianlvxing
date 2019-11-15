<!--
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-09 11:23:45
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-15 09:52:52
 -->
<template>
    <div class="list">
        <div class="top">
            <span class="ty">***</span>
            <span>***</span>
        </div>
        <div class="top tb">
            <span>可用金额(TNW)</span>
            <span>昨天收益(TNW)</span>
        </div>
        <div class="top1">
            <ul>
                <li>
                    <span>***</span>
                    <p>平台总收益(TNW)</p>
                </li>
                <li>
                    <span>***</span>
                    <p>平台总收益(TNW)</p>
                </li>
                <li>
                    <span>***</span>
                    <p>平台总收益(TNW)</p>
                </li>
            </ul>
        </div>
        <div class="imgs">
            <div class="tt1">
                <h3>钱包</h3>
            </div>
            <div class="tt1 tt2">
                <h3>兑换</h3>
            </div>
            <div class="tt1 tt3">
                <h3>红包</h3>
            </div>
        </div>
        <div class="box">
             <div class="tts">
                <h3>CEEC</h3>
            </div>
            <div class="tts">
                <h3>消费奖励</h3>
            </div>
        </div>
        <h1>节点锁仓</h1>
        <div class="box2">
            <h2>奖励锁仓</h2>
            <p>单笔消费满1000CNY即可获得锁仓奖励</p>
            <div class="kan">
                去看看
            </div>
        </div>
        <div class="c1">
            <h1>节点生息</h1>
            <span class="cc">更多内容&nbsp;&nbsp;></span>
        </div>
        <div class="box2">
            <h4>CEEC</h4>
            <p>预计年化收益</p>
            <h1>15%</h1>
            <div class="kan lis">
                立即体验
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Cang',
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>
.list{
    width: 94%;
    margin: 0 auto;
    padding-top: 15px;
}
.top{
    width: 100%;
    height: .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
}
.tb{
    border-bottom: 1px solid #666666;
}
span{
    font-size: .18rem;
    color: #666666;
}

.ty{
    color: #ff6633;
}
.top1{
   width: 100%;
}
.top1 ul{
    width: 100%;
    height: 1rem;
    background: white;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}
.top1 ul li{
    width: 34%;
    border-right: 1px solid #666666;
}
.top1 ul li:last-child{
    border-right: 0;
}
.top1 ul li span{
    margin-left: .24rem;
}
ul li p{
     width: 100%;
     font-size: 12px;
     color: #666666;
}
.imgs{
    width: 100%;
    height: 1rem;
    display: flex;
    padding: 15px 0;
}
.tt1{
    width: 34%;
    height: 100%;
    background:url(../assets/img/tt1.png) no-repeat center;
    margin-right: 15px;
    border-radius: 5px;
}
.tt2{
    background:url(../assets/img/tt2.png) no-repeat center;
}
.tt3{
    background:url(../assets/img/tt3.png) no-repeat center;
    margin-right: 0;
}
h3{
    margin-left: .2rem;
    padding-top:.2rem;
    font-size: .2rem;
    color: #666666;
}
.w1 img{
    width: 50%;
     height: 100%;
    padding-top: -.2rem;
    float: left;
}
.box{
    width: 100%;
    height: 1.2rem;
    display: flex;
    padding-bottom: 15px;
}
.box .tts:first-child{
     background:url(../assets/img/tt4.png) no-repeat center;
}
.box .tts:last-child{
     background:url(../assets/img/tt5.png) no-repeat center;
     margin-right: 0;
}
.tts{
    width: 50%;
    height: 100%;
    margin-right: 15px;
    border-radius: 5px;
    background: yellow;
}
.box2{
    width: 100%;
    height: 1rem;
    background: white;
    border-radius: 5px;
    box-shadow: 2px 3px 5px rgb(175, 173, 173);
    margin-top: 15px;
    position: relative;
    margin-bottom: 15px;
}
.box2 h2{
    padding-top: .2rem;
    text-indent: .2rem;
}
.box2 p{
     line-height: .5rem;
     color: #666666;
     font-size: .15rem;
     text-indent: .2rem;
}
.kan{
    width: .8rem;
    height: .3rem;
    border: 1px solid red;
    border-radius: .2rem;
    line-height: .3rem;
    text-align: center;
    position: absolute;
    right: .15rem;
    top:.2rem;
    color: red;
}
.box2 h4{
    padding-top: .2rem;
    text-indent: .2rem;
}
.lis{
    background: #ff6633;
    color: white;
    top: .4rem;
}
.c1{
    width: 100%;
    height: .4rem;
    display: flex;
}
.cc{
    margin-left: 1.2rem;
    line-height: .4rem;
    color: #999999;
}
.box2 h1{
    color: #009999;
    position: absolute;
    top:.35rem;
    left:1.3rem;
}
h1{
    font-size: .22rem;
}
</style>