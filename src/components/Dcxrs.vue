<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-15 09:38:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
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
</template>

<script>

export default {
  name: 'tripinner',
  data () {
    return {
      
    }
  },created:function() { 
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
</style>
