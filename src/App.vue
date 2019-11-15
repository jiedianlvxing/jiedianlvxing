<!--
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-07 19:23:41
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-09 20:40:55
 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
  height: 100%;
  background: rgba(253, 246, 246, 0.945);
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color: black;
}
</style>
