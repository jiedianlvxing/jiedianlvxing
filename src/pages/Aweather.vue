<!--
 * @Author: your name
 * @Date: 2019-11-11 16:21:19
 * @LastEditTime: 2019-11-15 10:05:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\pages\SubmitOrder.vue
 -->

<template>
    <div class="box">
        <AWbottom></AWbottom>
        <Wweathe></Wweathe>
    </div>
</template>
<script>
import AWbottom from '../components/AWbottom';
import AWweathe from '../components/AWweathe';
export default {
    name:"weather",
    data(){
        return{
        }
    },
    components:{
         AWbottom,AWweathe
    }
}
</script>
<style scoped>
</style>
