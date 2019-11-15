<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-15 10:44:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
 <div class="Travel">
     <div class="TravelTop">
          <router-link to="BregisterNew">
         <span>＜</span>
          </router-link>
         <h2>选择出行人</h2>
         <router-link to="ZSubmitOrder">
            <p>完成</p>
        </router-link>
     </div>
     <input type="submit" value="+ 添加新证件" class="anniu">
 </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
   methods:{
		back(){
			this.$router.go(-1);
		}
	}
}
</script>

<style sciped>
.Travel{
    width:100%;
    height:.5rem;
    margin:0;
    padding:0;
    font-size:16px;
    text-align: center;
    line-height: .5rem;
}
.TravelTop{
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.TravelTop span{
    font-size:16px;
    display:block;
}
.TravelTop p{
    color:#129599;
}
.anniu{
    margin-top:450px;
    width:1.5rem;
    height:.5rem;
    background:#129599;
    color:rgb(54, 44, 44);
    border-radius:50px;
    outline: none;
}
</style>
