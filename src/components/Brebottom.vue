<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-15 10:24:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
        <div class="newdateBottom">
           <div style="display:none" >{{allzong}}</div>
            <div class="newdateLeft">
                <span class="cnyy" >{{allzong}}cny</span>
                
            </div>
            <div class="newdateRight">
                <span>明细 -></span>
                <router-link to="ZSubmitOrder">
                   <span class="txDdan">填写订单</span>
                </router-link>
            </div>
        </div>
</template>

<script>
  export default {
     props:['allzong'],
    data() {
      return {
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
        console.log(this.all)
      }
    },
  //   components:{
  // },
  //   created() {
  //   fetch('http://localhost:3000/car')
  //     .then(res=>{
  //       return res.json();
  //       console.log(res.json())
  //     })
  //     .then(data=>{
  //    })
  //    .catch(err=>{
  //      console.log(err);
  //    })
  //   }
  }
</script>

<style sciped>
.newdateBottom{
    width:100%;
    font-size:16px;
    display: flex;
    justify-content:space-around;
    align-items: center;
}
.cnyy{
  font-size:20px;
  color:orangered;
}
.txDdan{
  display:block;
  width:1rem;
  height:.5rem;
  background: orangered;
  line-height: .5rem;
  color:white;
  
}
.newdateLeft{
  width:50%;
}
.newdateRight{
  width:50%;
  display:flex;
  justify-content: space-between;
  align-items: center;
 
}
.newdateRight .txDdan{
  font-size:16px;
  text-align: center;
}

</style>
