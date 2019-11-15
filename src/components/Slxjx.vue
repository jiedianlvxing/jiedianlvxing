<!--
 * @Author: your name
 * @Date: 2019-11-09 15:46:31
 * @LastEditTime: 2019-11-16 00:05:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\lxjx.vue
 -->
<template>
    <div id="box">
        <ul>
            <li v-for="(jingxuan,index) in jingxuans" :key="index">
                <img id="imgss" :src="jingxuan.handpicksrc" alt="">
                <div id="twbox">
                    <p id="traveljxtitle">{{jingxuan.handpicktext}}</p>
                    <span id="type">{{jingxuan.handpickprice}}</span><br>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
     name:"Slxjx",
  data(){
    return{
      jingxuans:[]
    }
  },
   created:function() { 
       fetch('/api/Handpick/selectHandpick' )
        .then((res)=>{ 
            console.log(res.data);
            return res.text();
            }) 
            .then((data)=>{ 
            console.log(data);
        this.jingxuans =  JSON.parse(data).handpicks;  
        }) 
        .catch((err)=>{
            console.log(err);
        })
        },

  methods:{

  }
}
</script>

<style scoped>

#box{
    width: 100%;
    min-height:500px;
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
#imgss{
    display: block;
    width:100%;
    height:100%;
    border-radius: 10px 10px 0 0;
}
#box ul li img{
    display: block;
    width: 100%;
    height:1rem;
    border-radius: 10px 10px 0 0;
}
#box li div{
    width: 100%;
}
#traveljxtitle{
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
    width:.5rem;
    height: .2rem;
    border-radius: 10%;
    display: inline-block;
    margin:.1rem 0;
    color:orangered;
}
#twbox{
    margin-left: 5%;
    width: 100%;
    overflow: hidden;
}
#box #twbox img{
    display:inline-block;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    border: 1px solid red;
    margin-bottom: -10px;
}
/* #name{
 display: inline-block;
 margin-bottom: 10px;
} */

</style>
	