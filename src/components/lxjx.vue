<!--
 * @Author: your name
 * @Date: 2019-11-09 15:46:31
 * @LastEditTime: 2019-11-14 21:54:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\lxjx.vue
 -->
<template>
    <div id="box">
        <ul>
            <li v-for="(jingxuan,index) in jingxuans" :key="index">
                <img :src="jingxuan.traveljxsrc" alt="" lazy>
                <div id="twbox">
                            <p id="traveljxtitle">{{jingxuan.traveljxtitle}}</p>
                            <span id="type">{{jingxuan.traveljxtoux}}</span><br>
                                <img :src="jingxuan.user.usersrc" alt="" id="usersrc">
                            <p id="name">{{jingxuan.user.username}}</p>
                    
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
       fetch('/api/Traveljx/selectTraveljx' )

        .then((res)=>{ 
            return res.text();
            }) 
            .then((res)=>{ 
        this.jingxuans =  JSON.parse(res).traveljxes;  
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
#box ul li img{
    width: 100%;
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
    height: .2rem;
    border-radius: 10%;
    border: 1px solid #129698;
    padding: 0 5%;
    display: inline-block;
    margin: .1rem 0;
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
#name{
 display: inline-block;
 margin-bottom: 10px;
}

</style>
	