<!--
 * @Author: your name
 * @Date: 2019-11-11 11:14:39
 * @LastEditTime: 2019-11-16 02:00:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\tripinner.vue
 -->
<template>
    <div id="bigbox">
        <div style="display:none">{{typename}}</div> 
        <div id="listbox" v-for="(triplist,index) in triplists" :key="index">
            <router-link :to='"/Dxianq/"+triplist.travellxid'>
                <img :src="triplist.travellxsrc" alt="">
            <div id="wenben">
                <p id="travellxtitle">{{triplist.travellxtitle}}</p>
            <p id="travellxpalce">{{triplist.travellxpalce}}</p>
            <span id="travellxprice">{{triplist.travellxprice}}CNY<span id="trvellxpriceid">起/人</span></span>
            </div>
            </router-link>
        </div>
      
    </div>
</template>


<script>    
import axios from 'axios';
export default {

    name:"listbox",
    props:["typename","id"],
    data(){
    return{
      triplists:[],
      alltriplists:[]
    }
  },
    created:function() { 
       axios('Travellx/selectTravellxn')
    //    'http://localhost:3000/traveljx?type='+this.typename
       .then(response=>{  
        this.alltriplists=response.data.travellxes;
         this.triplists = this.getbytype(response.data.travellxes);
         this.id=this.alltriplists[0].travellxid;
     })
     .catch(err=>{
         console.log(err);
     })
        },
        beforeUpdate(){

      this.triplists = this.getbytype(this.alltriplists);
      
  },
            
        methods:{
            getbytype(data){
                let arr=[];
                for( let i in data){
                    if(data[i].travellxfeature==this.typename){  
                            arr.push(data[i]);
                    }
                }
                return arr;
            }
        }
}
</script>

<style scoped>
#bigbox{
    width: 100%;
    min-height: 3rem;
}
#listbox{
    width: 100%;
    height: 1.3rem;
    display: flex;
    margin: .2rem 0;
}
#listbox img{
    display: inline-block;
    width: 35%;
    height: 100%;
    border-radius: 10px;
    margin-left:1%; 
}
#wenben{
    margin-left: 3%;
    width: 59%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2% 0;
    float: right;
}
#boxbox{
    width: 100%;
}
#travellxtitle{
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
#travellxpalce{
    width: 90%;
    height: .2rem;
    font-size: .13rem;
    display: inline-block;
    color: #999;
}
#travellxprice{
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