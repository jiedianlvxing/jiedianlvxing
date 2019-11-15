/*
<<<<<<< HEAD
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-07 19:23:41
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-14 21:01:30
=======
 * @Author: your name
 * @Date: 2019-11-06 17:39:25
 * @LastEditTime: 2019-11-13 20:43:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\main.js
>>>>>>> 195a8cd4f2aa08294044a0295ea35a152a482042
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
<<<<<<< HEAD
Vue.use(ElementUI);

import Axios from 'axios';
Axios.defaults.baseURL = '/api/';

Vue.config.productionTip = false
=======
import Axios from 'axios';
Axios.defaults.baseURL = '/api/'


Vue.use(ElementUI);
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);




Vue.config.productionTip = false
import { Field } from 'mint-ui';

Vue.component(Field.name, Field);
>>>>>>> 195a8cd4f2aa08294044a0295ea35a152a482042

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
