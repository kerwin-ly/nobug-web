
export default [
  {
    path: '/',
    name: 'projectList',
    component: () => import(/* webpackChunkName: "projectList" */ '@/pages/project/projectList')
  },
  {
    path: '/projectDetail',
    name: 'projectDetail',
    component: () => import(/* webpackChunkName: "projectDetail" */ '@/pages/project/projectDetail')
  }
];
