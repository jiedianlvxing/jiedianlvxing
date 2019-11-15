<!--
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-09 10:19:30
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-15 10:59:13
 -->
<template>
    <div class="footer">
         <ul>
            <li>
                <img src="../assets/img/travel_normal.png" alt="">
                <p> 首页</p>
            </li>
            <li>
               <img src="../assets/img/gift_normal.png" alt=""> 
               <p>商城</p>
            </li>
            <!-- <el-button type="text" @click="open">  -->
                <li class="tg">
                    <img src="../assets/img/travel_fabu.png" alt="">
                </li>
             <!-- </el-button> -->
            <router-link to="/CandlePage">
                <li>
                    <img src="../assets/img/sweet_normal.png" alt=""> 
                    <p>糖果</p>
                </li>
            </router-link>
            <router-link to="/MyPage">
                <li>
                    <img src="../assets/img/w.png" alt="">
                    <p>我的</p>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Myfooter',
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
.footer{
	width: 100%;
    height: .8rem;
    margin-top: .2rem;
    text-align: center;
    position: sticky;
    bottom: 0px;
    background: white;
    z-index: 10;
}
ul{
    display: -webkit-flex;
    background: white;
	-webkit-justify-content:space-around;
	-webkit-align-items:center;
}
.footer ul  li{
    display: block;
    width: .35rem;
    height: 100%;
}
li img{
    display: block;
    width: 100%;
    height: 68%;
    text-align: center;
    margin: 10px auto;
}
p{
    font-size: .16rem;
    font-weight: 500;
}
.footer ul .tg{
    width: .6rem;
}
</style>