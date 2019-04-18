// 全局公共路由
import store from '@/store';

export default [
  {
    path: '/',
    name: 'DashBoard',
    meta: {
      breadCrumb: [
        {
          name: '首页'
        }
      ]
    },
    component: () => import(/* webpackChunkName: "DashBoard" */ '@/pages/home/DashBoard')
  }
];
