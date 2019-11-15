<!--
 * @Author: your name
 * @Date: 2019-11-08 17:58:47
 * @LastEditTime: 2019-11-16 02:07:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\eletab.vue
 -->
<template>
<div id="bigbox">

  <h2>特色推荐</h2>
  <div id="topbox">
    <ul>
      <li v-for="(item,index) in types" :key="index" @click="changetype(item.typestype)">
       
        {{item.typestype}}
      </li>
    </ul>
  </div>
  <Htriplist :typename="currtype"></Htriplist>
   <!-- 自定义属性 -->
</div>

    


</template>


<script>
import Htriplist from '../components/Htriplist';
import axios from 'axios';
export default {
  data(){
    return{
      types:[],
      currtype:""
    }
  },
 components:{
   Htriplist
  },
  created(){
    axios('Types/selectTypes')
    
    .then( (response)=> { 
      
      this.types = response.data.types;
      this.currtype=this.item.typestype;
      
      })
      
     .catch((error)=> {           
      
       });
  },
 methods:{
      changetype(typename){
          this.currtype = typename;
      }
  }
  
}


</script>

<style scoped>
#daohang{
    width: 100%;
    min-height: 5rem;
}
#bigbox{
  width: 90%;

  margin: .3rem auto;
}
h2{
  line-height: .6rem;
}

#topbox{
  width: 100%;
  height: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
#topbox ul{
   width: 100%;
   height: 70%;
  display: flex;
  overflow-x:auto; 
  flex-wrap: nowrap;

}
#topbox li{
  font-size: 16px;
  text-align: center;
  flex-shrink: 0;
  height: 75%;
  width: 25%;
  background-color:aquamarine;
  border-radius: 5px;
  margin: 1%;
  padding-top: 5px;
}
</style>