<!--
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-13 14:30:21
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-13 14:52:45
 -->
<template>
     <div class="boxs">
        <i class="el-icon-close" @click="goback()"></i>
    </div>
</template>

<script>
export default {
    name:'Myback',
    data(){
        return{

        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.boxs{
    width: .5rem;
    height: .5rem;
    background: red;
}
.el-icon-close{
    font-size: .3rem;
    margin-right: 1rem;
}
</style>