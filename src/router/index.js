import Vue from 'vue';
import VueRouter from 'vue-router';
import union from 'lodash/union';

import user from './user'; // 用户路由
import common from './common'; // dashboard,nopermission等全局路由

Vue.use(VueRouter);

let routes = union(
  [
    {
      path: '*',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    },
    {
      path: '/index',
      component: () => import('@/pages/index'),
      children: union(
        user,
        common
      )
    }
  ],
  // 跟login同级的路由，如：关于我们
  // view
);

const router = new VueRouter({
  routes
});

export default router;
