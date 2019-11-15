<!--
 * @Author: your name
 * @Date: 2019-11-09 15:46:31
 * @LastEditTime: 2019-11-14 21:54:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\lxjx.vue
 -->
<template>
    <div id="box">
        <ul>
            <li v-for="(jingxuan,index) in jingxuans" :key="index">
                <img :src="jingxuan.travelpwsrc" alt="">
                <div id="twbox">
                    <p id="travelpwtitle">{{jingxuan.travelpwtitle}}</p>
                    <div>{{jingxuan.travelpwds}}</div>
                    <span id="travelpwdate">{{jingxuan.travelpwdate}}</span><br>
                    <p id="travelpwprice">{{jingxuan.travelpwprice}}CNY<span id="trvellxpriceid">起/人</span></p>
                    
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
       fetch('/api/Travelpw/selectTravelpw')
        .then((res)=>{     return res.text();  }) .then((res)=>{ 
            console.log(res.travelpws); 
        this.jingxuans =  JSON.parse(res).travelpws;  }) 
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
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 600;
    font-size: 16px;
    margin-top: .1rem
}
#travelpwtitle{
    font-size: .18rem;
}
#travelpwdate{
    height: .2rem;
    border-radius: 10%;
    border: 1px solid #129698;
    padding: 0 5%;
    display: inline-block;
    margin: .1rem 0 0;
    color: #129698;
    font-size: 14PX;
 font-weight: 200;
}
#twbox{
    margin-left: 5%;
}
#box li div img{
    width: 20%;
    height: 20%;
    border-radius: 50%;
}
#travelpwprice{
font-size: 14px;
 display: inline-block;
 color: rgb(224, 151, 15);
 font-weight:600; 
 line-height: .2rem;
}
#trvellxpriceid{
    font-size: 10px;
}

</style>
	