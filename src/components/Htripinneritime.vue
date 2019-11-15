<!--
 * @Author: your name
 * @Date: 2019-11-11 11:14:39
 * @LastEditTime: 2019-11-15 22:29:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\tripinner.vue
 -->
<template>
<div id="itiembox">
    <h2>热门主题游</h2>
    <ul>
       
        <li v-for="(itime,index) in itime " :key="index"> 
            <router-link to="/Dxiangq">
            <img :src="itime.travellxsrc" alt="">
            <div id="textbox">
                <p id="travellxtitle">{{itime.travellxtitle}}</p>
            <p id="travellxpalce">{{itime.travellxpalce}}</p>
            <p id="travellxtype">{{itime.travellxtype}}</p><br>
            <span id="travellxprice">{{itime.travellxprice}}CNY<span id="trvellxpriceid">起/人</span></span>
            </div>
            </router-link>
        </li>
        
    </ul>
</div>
    
</template>


<script>
export default {
     name:"itime",
  data(){
    return{
      itime:[]
    }
  },
   created:function() { 
       fetch('/api/Travellx/selectTravellxn')
        .then((res)=>{    
            return res.text();  
            }) 
        .then((res)=>{ 
            this.itime =  JSON.parse(res).travellxes;  
            }) 
        .catch((err)=>{
            console.log(err)
        })
        }
}
</script>

<style scoped>
#itiembox{
    width: 90%;
    height: 2.3rem;
    margin: .2rem auto;
    display: block;
}
#textbox{
    width: 92%;
    padding: 4%;
}
#itiembox ul{
     width: 100%;
    height: 100%;
    overflow-x: auto;
    display: flex;
    flex-wrap: nowrap;
    margin: .1rem 0;
}
#itiembox ul li{
    display: block;
    margin-right: .2rem;
    width: 45%;
    height: 100%;
    flex-shrink: 0;
    border-radius: 10px;
    box-shadow:  0 4px 4px 0 rgb(214, 212, 212);
}
#itiembox ul li img{
    width: 100%;
    height: 50%;
    border-radius: 10px 10px 0 0;
}
#travellxtitle{
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-weight: 600;
    font-size: 16px;
}
#travellxpalce{
     width: 90%;
    height: .2rem;
    font-size: .13rem;
    display: inline-block;
    color: #999;
    margin: 10px 0;
}
#travellxtype{
     height: .15rem;
    border-radius: 10%;
    border: 1px solid #129698;
    padding: 0 5%;
    display: inline-block;
    margin: .05rem 0;
    font-size: .1rem;
}
#travellxprice{
    font-size: 14px;
 display: inline-block;
 color: rgb(224, 151, 15);
 font-weight:600; 
 line-height: .2rem;
}
#itiembox ul li p{
    line-height: .15rem;
}
#trvellxpriceid{
    font-size: 10px;
}
</style>