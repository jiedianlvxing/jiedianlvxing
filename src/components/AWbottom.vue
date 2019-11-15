<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-12 10:53:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
<div class="biger">
    <h3>发布</h3>
    <div class="oneet">
        <div class="bigerBottom">
            <img src="../assets/imgs/combo_shenqingjieban.png" alt="">
            <span>AA</span>
        </div>
        <div class="bigerBottom">
            <img src="../assets/imgs/liebiaodaohang_gongyi.png" alt="">
            <span>公益</span>
        </div>
        <div class="bigerBottom">
            <img src="../assets/imgs/tianjiayouji.png" alt="">
            <span>结伴</span>
        </div>
        <div class="bigerBottom">
            <img src="../assets/imgs/combo_shenqingjieban.png" alt="">
            <span>问答</span>
        </div>
        <div class="bigerBottom">
            <img src="../assets/imgs/liebiaodaohang_gongyi.png" alt="">
            <span>任务</span>
        </div>
        <div class="bigerBottom">
            <img src="../assets/imgs/tianjiayouji.png" alt="">
            <span>游记</span>
        </div>
    </div>
    <div class="hui">
        <span>x</span>    
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
.biger{
    font-size:16px;
    margin-top:110px;
}
h3{
    font-size:30px;
    margin-bottom:20px;
}
.oneet{
    display:flex;
    flex-wrap:wrap;
}
.bigerBottom{
width:22%;
height:100%;
border-radius:50%;
margin-bottom:20px;
margin-left:3%;
display:inline-block;

}
.bigerBottom img{
    width:100%;
    height:100%;
    margin:0 auto;
    text-align: center;
    border-radius: 50%;
}
.bigerBottom span{
    text-align: center;
    display:block;
}
.hui{
    font-size:50px;
    text-align: center;
    margin-top:100px;
}
</style>
