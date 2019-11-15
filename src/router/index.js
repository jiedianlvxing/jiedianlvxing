/*
 * @Author: your name
 * @Date: 2019-11-05 10:47:42
 * @LastEditTime: 2019-11-15 10:03:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import SIndex from '@/pages/SIndex';
import BregisterNew from '@/pages/BregisterNew';
import ZSubmitOrder from '@/pages/ZSubmitOrder';
// import Aweather from '@/pages/Aweather';
import EChoosetravel from '@/pages/EChoosetravel';


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'SIndex',
    //   component: SIndex
    // },
    {
      path: '/',
      name: 'BregisterNew',
      component: BregisterNew
    },
    {
      path: '/ZSubmitOrder',
      name: 'ZSubmitOrder',
      component: ZSubmitOrder
    }//,
    // {
    //   path: '/',
    //   name: 'Aweather',
    //   component: Aweather
    //} 
    ,
    {
      path: '/EChoosetravel',
      name: 'EChoosetravel',
      component: EChoosetravel
    }
  ]
})
