
export default [
  {
    path: '/',
    name: 'projectList',
    component: () => import(/* webpackChunkName: "projectList" */ '@/pages/project/projectList')
  }
];
