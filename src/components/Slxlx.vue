<!--
 * @Author: your name
 * @Date: 2019-11-09 15:46:31
 * @LastEditTime: 2019-11-16 00:11:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\lxjx.vue
 -->
<template>
    <div id="box">
        <ul>
            <li v-for="(jingxuanqq,index) in jingxuanqqs" :key="index">
                <img :src="jingxuanqq.povertysrc" alt="">
                <div id="twbox">
                    <p id="trvellxtitle">{{jingxuanqq.povertytext}}</p>
                    <span id="type">{{jingxuanqq.povertyprice}}</span><br>
                    <p id="trvellxprice">{{jingxuanqq.povertysubtitle}}<span id="trvellxpriceid"></span></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
     name:"Slxlx",
  data(){
    return{
      jingxuanqqs:[]
    }
  },
   created:function() { 
       fetch('/api/Poverty/selectPoverty')
        .then((res)=>{     
            return res.data();  
            })
         .then((res)=>{  
        this.jingxuanqqs = JSON.parse(data).poverties;
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
	