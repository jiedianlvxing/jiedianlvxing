<!--
 * @Author: your name
 * @Date: 2019-11-09 15:46:31
 * @LastEditTime: 2019-11-16 00:07:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\lxjx.vue
 -->
<template>
    <div id="box">
        <ul>
            <li v-for="(jingxuan,index) in jingxuans" :key="index">
                <div id="twbox">
                    <p id="trivelyjxiangq">{{jingxuan.traveljxtitle}}</p>
                <img id="trivelyjsrc" :src="jingxuan.traveljxsrc" alt="">
                        <img id="usersrc" :src="jingxuan.user.usersrc" alt="">
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
       fetch('/api/Traveljx/selectTraveljx')
        .then((res)=>{     return res.text();  }) .then((res)=>{ 
            console.log(res.trivelyjs); 
        this.jingxuans =  JSON.parse(res).traveljxes;  }) 
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
}
#box ul li{
    display: inline-block;
    width: 100%;
    margin-bottom: 7%;
    border-bottom: 1px solid rgb(241, 238, 238);
    position: relative;
    break-inside: avoid;
}
#trivelyjsrc{
    width: 100%;
    border-radius: 10px;
    margin: .15rem 0;
}
#box li div{
    width: 100%;
}
#trivelyjxiangq{
    font-size: .15rem;
    line-height: .3rem;
}
#usersrc{
    width: 10%;
    height: 10%;
    border-radius: 50%;
    margin-bottom: -10px;
}
#name{
    font-size: 12px;
 display: inline-block;
 margin-bottom: 30px;
 margin-left: 8px;
}

</style>
	