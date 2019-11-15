<!--
 * @Author: your name
 * @Date: 2019-11-11 11:14:39
 * @LastEditTime: 2019-11-14 17:11:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\tripinner.vue
 -->
<template>
    <div id="bigbox">
        {{typename}}
        <div id="listbox" v-for="(triplist,index) in triplists" :key="index">
            <!-- <router-link to="'/xiangq'+triplist.id"> -->
            <img :src="triplist.src" alt="">
            <div id="wenben">
                <h3>{{triplist.title}}</h3>
            <p>{{triplist.title}}</p>
            <span>{{triplist.name}}</span>
            </div>
            <!-- </router-link> -->
        </div>
      
    </div>
</template>


<script>    
import axios from 'axios';
export default {

    name:"listbox",
    props:["typename"],
    data(){
    return{
      triplists:[],
      alltriplists:[]
    }
  },
    created:function() { 
       axios.all('/api/Travellx/selectTravellxn')
    //    'http://localhost:3000/traveljx?type='+this.typename
       .then(res=>{ 
        this.alltriplists=res.data;
         this.triplists = this.getbytype(res.data);
         console.log(this.triplists);
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
                console.log(this.data+"lfghjkvhbjnkm,")
                for( let i in data){
                    
                    if(data[i].type==this.typename){  
                        console.log(data[i].type);
                        console.log(this.typename);
                            arr.push(data[i]);
                    }
                }
                console.log(arr);
                return arr;
            }
        }
}
</script>

<style scoped>
#bigbox{
    width: 100%;
    min-height: 3rem;
    background-color:pink;
}
#listbox{
    width: 100%;
    height: 1.3rem;
    display: flex;
    margin: .2rem 0;
    background-color: green;
}
#listbox img{
    display: block;
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
}
#wenben p{
    font-size: 14px;
}
#wenben span{
    display: block;
    font-size: .15rem;
    color:rgb(201, 142, 15);
}
</style>