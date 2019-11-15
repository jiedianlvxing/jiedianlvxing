<!--
 * @Description: uuyut
 * @Author: 冯换菊
 * @Date: 2019-11-07 20:04:58
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-15 10:51:52
 -->
<template>
    <div class="box">
        <div class="topt">
            <div class="imgs">
                <router-link to="/PfilePage">
                    <el-button type="text" @click="open"> 
                        <img src="../assets/img/travel_normal.png" alt="">
                    </el-button>
                </router-link>
            </div>
            <router-link to="/LoginPage">
               <span class="tt">登录&nbsp;&nbsp;/</span> 
            </router-link>
            <router-link to="/RegPage">
                <span class="tt">注册</span>
            </router-link>
            <p><a href="#">粉丝-&nbsp;&nbsp;&nbsp;关注-&nbsp;&nbsp;&nbsp;信用值-</a></p>
            <div class="bot">
                <img src="../assets/img/programme_shangcheng.png" alt="">
                <span>+2TNW</span>
            </div>
        </div>
        <div class="vip">
            <div class="vips">
                <img src="../assets/img/vip.png" alt="">
                <span>**会员</span>
            </div>
            <img src="../assets/img/j.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'HelloWorld',
    data(){
        return {
            
        }
    },
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '未登录',
          message: h('p', null, [
            h('span', null, '您还没有登录哦~ '),
            h('i', { style: 'color: teal' }, '')
          ]),
          showCancelButton: true,
          confirmButtonText: '登录',
          cancelButtonText: '取消',
          center: true,
          cancelButtonClass:'{style:"position:fixed;left:0;right:0;top:0;bottom:0;margin:auto;"}',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    }
}
</script>

<style scoped>
.box{
    width: 100%;
}
.topt{
    width: 100%;
    height: 1rem;
    margin-top: .2rem;
}
.imgs{
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    background: #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: .15rem;
    float: left;
}
.imgs img{
    width: 65%;
}
.tt{
    float: left;
    font-size: .18rem;
    font-weight: bold;
    margin-left: .15rem;
    padding-top: 10px;
}
.topt a:nth-child(3){
    margin-left: 0;
}
p{
    padding-top: .45rem;
   
}
p a{
     margin-left: .15rem;
     color: #666;
}
.bot{
    width: 25%;
    height: .5rem;
    background: #ff9933;
    float:right;
    margin-top: -.4rem;
    border-top-left-radius: 45%;
     border-bottom-left-radius: 45%;
}
.bot img{
    float: left;
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    border: 1px solid white;
    margin: 5px 0;
}
.bot span{
    float: right;
    color: white;
     margin-top: -.35rem;
}
.vip{
    width: 85%;
    height: .5rem;
    background: #333333;
    margin: 0 auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #ffcc99;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.vip img{
    float: left;
    width: .2rem;
    margin-left: .2rem;
}
.vip img:nth-child(2){
    margin-right: .3rem;
}
span{
    margin-left: .2rem;
}
.icon{
    width: 100%;
    height: 2rem;
    background: pink;
}
</style>