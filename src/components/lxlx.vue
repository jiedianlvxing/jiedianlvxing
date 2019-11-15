<!--
 * @Author: your name
 * @Date: 2019-11-09 15:46:31
 * @LastEditTime: 2019-11-15 19:07:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\lxjx.vue
 -->
<template>
    <div id="box">
        <ul>
            <li v-for="(jingxuan,index) in jingxuans" :key="index">
                <img :src="jingxuan.travellxsrc" alt="">
                <div id="twbox">
                    <p id="trvellxtitle">{{jingxuan.travellxtitle}}</p>
                    <span id="type">{{jingxuan.travellxpalce}}</span><br>
                    <p id="trvellxprice">{{jingxuan.travellxprice}}CYN  <span id="trvellxpriceid">起/人</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
     name:"lxjx",
  data(){
    return{
      jingxuans:[]
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
        },

  methods:{

  }
}
</script>

<style scoped>
#box{
    width: 100%;
    min-height: 1000px;
}
#box ul{
    width: 100%;
    margin: 0 auto;
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
}
#box ul li:nth-of-type(2n+1){
    display: inline-block;
    margin-right:5%;
    float: left;
}
#box ul li:nth-of-type(2n){
    float: right;
}
#box ul li{
    display: inline-block;
    width: 100%;
    border: 1px solid rgb(233, 226, 226);
    border-radius: 10px;
    margin-bottom: 7%;
    position: relative;
    break-inside: avoid;
}
#box li img{
    width: 100%;
    border-radius: 10px 10px 0 0;
}
#box li div{
    width: 100%;
}
#trvellxtitle{
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 600;
    font-size: 16px;
    margin-top: .1rem;
}
#box li #type{
    width: 90%;
    height: .2rem;
    font-size: .13rem;
    display: inline-block;
    margin: .1rem 0;
    color: #999;
}
#twbox{
    margin-left: 5%;
}
#box li div img{
    width: 20%;
    height: 20%;
    border-radius: 50%;
}
#trvellxprice{
    font-size: 14px;
 display: inline-block;
 color: rgb(224, 151, 15);
 font-weight:600; 
 line-height: .4rem;
}
#trvellxpriceid{
    font-size: 10px;
}

</style>
	