/*
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-07 19:23:41
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-15 10:54:21
 */
import Vue from 'vue'
import Router from 'vue-router'
import MyPage from '@/pages/MyPage';
import CandlePage from '@/pages/CandlePage';
import LoginPage from '@/pages/LoginPage';
import RegPage from '@/pages/RegPage';
import PfilePage from '@/pages/PfilePage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/MyPage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/CandlePage',
      name: 'CandlePage',
      component: CandlePage,
      // meta:{
      //   requireAuth:true
      // }
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage,
      // beforeEnter(to,from,next){
      //   console.log("/BookDetailPage这个路径守卫了");
      //   next();
      // }
    },
    {
      path: '/RegPage',
      name: 'RegPage',
      component: RegPage
    },
    {
      path: '/PfilePage',
      name: 'PfilePage',
      component: PfilePage
    }
  ]
})

// router.beforeEach((to,from,next)=>{
  // if(to.fullPath=='/login' || to.fullPath='/Index'){
  //     next();  
  // }else if(!localStorage.getItem('username')){
  //     next(false);
  // }
  // console.log('前置守卫');
  // console.log(to);
  // console.log(from);
  // // next(false);
  // next();

  // if(to.meta.requireAuth){
  //     console.log('前置守卫');
  //     console.log(localStorage.getItem('username'));
  //     if(localStorage.getItem('username')==null){
  //         // next(false);
  //         console.log("to.fullPath:"+to.fullPath);
  //         next('/LoginPage'+to.fullPath);
  //     }else{
  //         next();
  //     }
  // }else{
  //    next();
  // }
// });

// router.afterEach((to, from) => {
// console.log('后置守卫');
// console.log(to);
// console.log(from);
// })

// export default  router;
