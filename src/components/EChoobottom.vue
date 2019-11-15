<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-12 17:04:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
    <div class="checkTop">
        <div class="doudou">
            <input type="checkbox">
        </div>
        <div class="wenzi">
            姓名:<span>曹霏</span><br>
            证件号码:<span>62012119970103382X</span><br>
            出生日期:<span>1997-01-03</span><br>
        </div>
        <div class="wenzi">
            <img src="../assets/imgs/bianji.png" alt="">
        </div>
        
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style sciped>
.checkTop{
    font-size:16px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    width:100%;
    border:1px solid #f7f7f7;
}
</style>
