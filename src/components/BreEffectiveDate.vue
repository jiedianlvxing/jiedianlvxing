<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-13 09:56:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
    <div class="newdate">
        <el-calendar v-model="value">
        </el-calendar>
    </div>
</template>

<script>

   export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>

<style sciped>
.el-calendar{
    width:100%;
    font-size:16px;
}
</style>
