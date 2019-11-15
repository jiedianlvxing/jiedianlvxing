/*
 * @Author: your name
 * @Date: 2019-11-06 17:39:25
 * @LastEditTime: 2019-11-15 22:22:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import IIndex from '@/pages/IIndex';
import Htripinner from '@/pages/Htripinner';
import Dxiangq from '@/pages/Dxiangq';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IIndex',
      component: IIndex
    },
    {
      path: '/Htripinner',
      name: 'Htripinner',
      component: Htripinner
    },
    {
      
      path: '/Dxiangq/:id',
      name: 'Dxiangq',
      component: Dxiangq,
      props:true
    }
  ]
})
