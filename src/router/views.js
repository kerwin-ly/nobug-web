// 一级路由
export default [
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/pages/views/register')
  }
];
