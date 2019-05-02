// 用户相关路由

export default [
  {
    path: '/userCenter',
    name: 'userCenter',
    component: () => import(/* webpackChunkName: "userCenter" */ '@/pages/user/userCenter')
  }
];
