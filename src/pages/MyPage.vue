<!--
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-07 20:09:48
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-15 11:01:16
 -->
<template>
<div>
    <Myheader></Myheader>
    <!-- <el-button  type="text" @click="open"> -->
        <Mybanner></Mybanner> 
    <!-- </el-button> -->
    <Myfooter></Myfooter>
</div>
</template>

<script>
import Myheader from '../components/Myheader';
import Mybanner from '../components/Mybanner';
import Myfooter from '../components/Myfooter';
import Myback from '../components/Myback';

export default {
    name:'HelloWorld',
    data(){
        return{
            
        }
    },
    components:{
       Myback, Myheader,Mybanner,Myfooter
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

<style>
div{
  width: 100%;
  height: 100;
}
.el-message-box{
  width: 80%;
  top: 50%;
}
.el-message-box__header {
    padding: 15px 0 10px;
}
.el-message-box--center .el-message-box__content {
    padding:5px 0;
}
.el-message-box__btns{
  padding:5px 0 0;
}
.el-icon-close:before {
  font-size: 0rem;
}
.el-button--mini, .el-button--small{
  font-size: 14px;
}
</style>