<!--
 * @Author: your name
 * @Date: 2019-11-11 16:21:19
 * @LastEditTime: 2019-11-15 22:23:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\pages\SubmitOrder.vue
 -->

<template>
    <div class="box">
        <Znav></Znav>
        <Zlist></Zlist>
        <Zslide></Zslide>
        <Zarticle></Zarticle>
        <Zfooter></Zfooter>
    </div>
</template>
<script>
import Znav from '../components/Znav';
import Zlist from '../components/Zlist';
import Zslide from '../components/Zslide';
import Zarticle from '../components/Zarticle';
import Zfooter from '../components/Zfooter';
export default {
    name:"SubmitOrder",
    data(){
        return{

        }
    },
    components:{
        Znav,Zlist ,Zslide,Zarticle,Zfooter
    }
}
</script>
<style scoped>

</style>
