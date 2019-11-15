<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-15 09:37:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
<div id="xcxinx">
  <ul>
    <li><span>线路安排：</span><p>厦门市区-集美学村-大丞岛-英雄三岛战地</p></li>
    <li><span>行程天数：</span><p>1天0夜形成</p></li>
    <li><span>集合信息：</span><p>07:30厦门市区（思明区、湖里区）各酒店接送</p></li>
  </ul>
    
</div>
</template>

<script>

export default {
  name: 'tripinner',
  data () {
    return {
      
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
#xcxinx{
  width: 100%;
  margin:0 0 5px;
background-color: #fff;
}
#xcxinx ul{
  width: 90%;
  margin: 0 auto;
}
#xcxinx ul li{
  padding: 10px 0;
  width: 100%;
  border-bottom: .5px solid rgb(219, 219, 219);
}

</style>
