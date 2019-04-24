import Vue from 'vue';
import VueRouter from 'vue-router';
import union from 'lodash/union';

import user from './user'; // 用户路由
import common from './common'; // dashboard,nopermission等全局路由
import views from './views';

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
      component: () => import('@/pages/views/login')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/pages/views/index'),
      children: union(
        user,
        common
      )
    }
  ],
  // 一级路由
  views
);

const router = new VueRouter({
  routes
});

export default router;
