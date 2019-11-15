<!--
 * @Author: your name
 * @Date: 2019-11-11 11:14:39
 * @LastEditTime: 2019-11-13 14:38:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\components\tripinner.vue
 -->
<template>
    <div id="serchbox">
        <router-link to="/" ><i class="el-icon-arrow-left" id="jt"></i></router-link>
        
        <div id="ser">
            <input type="text" placeholder="主题、目的地">
            <i class="el-icon-search"></i>
        </div>
        
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.el-icon-arrow-left{
    font-size: .26rem;
    margin: 15px 5px;
}
.el-icon-search{
    font-size: .18rem;
    margin: 5px 5px;
}
#serchbox{
    width: 100%;
    height: .5rem;
    display: flex;
    justify-content: center；
}  
#ser{
  width: 85%; 
  height: 80%;
    background-color:rgb(226, 220, 220);
    border-radius: .1rem;
    margin-top: 10px;
}
#serchbox input{
    width: 83%;
    height: .3rem;
    border: none;
    outline: none;
    background-color:rgb(226, 220, 220);
    margin-left: 10px;
}
</style>