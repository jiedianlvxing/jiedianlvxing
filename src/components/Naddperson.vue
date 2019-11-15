<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-15 09:39:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
<div>
  <div id="box">
    <div id="tit">
      <i class="el-icon-arrow-left"  @click="back()"></i>
    <h2>新增出行人信息</h2>
    </div>
    <div id="zjsf">
      <span>证件类型</span>
        <select name="" id="zjsfselect">
          <option value="">身份证</option>
          <option value="">护照</option>
          <option value="">签证</option>
        </select>
    </div>
    <div id="bigbox">
        <span>中文姓名<input type="text" placeholder="请输入中文姓名"></span>
        <span>身份证号<input type="text" placeholder="请输入身份证号"></span>
        <span>手&nbsp;机&nbsp;&nbsp;号<input type="text" placeholder="请输入手机号"></span>
        <span>出行人信息
          <div id="lastspan"><p class="ppp">成人</p><p class="ppp">儿童</p></div>
          </span>
    </div>
    <div id="subbox"><input type="submit" value="保存" id="submitbox"></div>
    
      
  </div>
    
</div>
</template>

<script>

export default {
  name: 'tripinner',
  data () {
    return {
      
    }
  },
   methods:{
      back(){
          this.$router.go(-1);
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
#box{
  width: 100%;
  height: 1000px;
  background-color: rgb(248, 245, 245);
}
#tit{
    width: 100%;
    height: .4rem;
    margin: 0 auto;
    position: relative;
    background-color: #fff;

}
h2{
  text-align: center;
  line-height: .4rem;
}
.el-icon-arrow-left{
  font-size: .3rem;
  position: absolute;
  top: 6px;
  left: .15rem;
}
#zjsf{
  margin: .2rem 0;
  width: 96%;
  height: .7rem;
  background-color: #fff;
  padding: 2%;
}
#zjsf span{
  font-size: .18rem;
  line-height: .7rem;
}
#zjsfselect{
  width: 62%;
  height: .7rem;
  border: none;
  margin-left: 10px;
  font-size: .15rem;
  outline: none;
}
option{
  display: block;
  border-right: none;
  width: 50px;
  
}
#bigbox{
  width: 100%;
  
}
#bigbox span{
  border-bottom: 1px solid rgb(241, 238, 238);
  padding:2%;
  width: 96%;
  height: .6rem;
  display: block;
  background-color: #fff;
}
#bigbox span input{
  outline-color: #129698;
  width: 62%;
  height: .6rem;
  border: none;
  margin-left: 33px;
}
.ppp{
  display: inline;
  border-radius: .17rem;
  border: 1px solid #129698;
  margin:0 13px;
  padding: .08rem .15rem;
  
}
#lastspan{
  display: inline-block;
  line-height: .6rem;
}
#subbox{
  width: 100%;
  height: .5rem;
}
#submitbox{
  width: 85%;
  margin: .2rem 7%;
  height: .5rem;
  background-color:#129698;
  border-radius: 10px;
  border: none;
  font-size: .13rem;
  color: #fff;
}
</style>
