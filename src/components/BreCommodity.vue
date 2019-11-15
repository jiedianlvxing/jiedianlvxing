<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-15 10:17:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
   <div class="adultTop">
       <div class="adult">
           <div class="adultLeft">
               <p>{{index.pripo}}</p>
               <span class="jiage">{{popp.price}}cny</span>
           </div>
           <div class="adultRight">
               <el-input-number  v-model="num" @change="handleChange" :min="0" :max="10" label="描述文字"></el-input-number>
           </div>
       </div>
       <div class="adult">
           <div class="adultLeft">
               <p>{{ink.pripo}}</p>
               <span class="jiage">{{pocc.priceo}}cny</span>
           </div>
           <div class="adultRight">
               <el-input-number  v-model="num2" @change="handleChange" :min="0" :max="10" label="描述文字"></el-input-number>
           </div>

       </div>
       <Brebottom :allzong="allzong" class="rebo"  ></Brebottom>
   </div>
</template>

<script>
import Brebottom from '../components/Brebottom';


 export default {
      name: 'reCommodity',
    data() {
      return {
        index: {},
        ink: {},
        popp:{},
        pocc:{},
        num: 0,
        num2:0,
        allzong:0
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
        this.checkall();
      },
      checkall(){
      this.allzong=Number(this.pocc.priceo)*this.num2+Number(this.popp.price)*this.num

      }
    },
    components:{
      Brebottom
  },
  created() {
    fetch('http://localhost:3000/car')
      .then(res=>{
        return res.json();
        console.log(res.json())
      })
      .then(data=>{
          this.index=data[0];
          this.popp=data[0];
          this.ink=data[1];
          this.pocc=data[1];
          console.log(this.index)
     })
     .catch(err=>{
       console.log(err);
     })
  },
}
</script>

<style sciped>

.adultTop{
    width:100%;
    font-size:25px;
    height:1.5rem;
}
.jiage{
  font-size:16px;
  color:orangered;
}
.adult{
    display: flex;
    justify-content: space-between;
    margin-top:20px;
}
.rebo{
    margin-top:50px;
}
</style>