/*
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-07 19:23:41
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-14 21:01:30
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Axios from 'axios';
Axios.defaults.baseURL = '/api/';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
