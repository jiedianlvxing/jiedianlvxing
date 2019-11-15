<!--
 * @Author: your name
 * @Date: 2019-11-11 11:14:39
 * @LastEditTime: 2019-11-15 10:16:17
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
            <img :src="itime.src" alt="">
            <div id="textbox">
                <h4>{{itime.title}}</h4>
            <p>{{itime.place}}</p>
            <p>{{itime.time}}</p>
            <span>{{itime.price}}</span>
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
       fetch(' http://localhost:3000/itime')
        .then((res)=>{    
            return res.text();  
            }) 
        .then((res)=>{ 
            console.log(res); 
            this.itime =  JSON.parse(res);  
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
    height: 84%;
    flex-shrink: 0;
    border-radius: 10px;
    box-shadow:  0 4px 4px 0 rgb(214, 212, 212);
}
#itiembox ul li img{
    width: 100%;
    height: 50%;
    border-radius: 10px 10px 0 0;
}
#itiembox ul li p{
    line-height: .15rem;
}
</style>