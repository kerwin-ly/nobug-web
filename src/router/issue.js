// 三级路由
export default [
  {
    path: '',
    name: 'issueList',
    component: () => import(/* webpackChunkName: "issueList" */ '@/pages/project/issue/issueList')
  },
  {
    path: 'issueStats',
    name: 'issueStats',
    component: () => import(/* webpackChunkName: "issueStats" */ '@/pages/project/issue/issueStats')
  },
  {
    path: 'projectFile',
    name: 'projectFile',
    component: () => import(/* webpackChunkName: "projectFile" */ '@/pages/project/issue/projectFile')
  },
  {
    path: 'projectSetting',
    name: 'projectSetting',
    component: () => import(/* webpackChunkName: "projectSetting" */ '@/pages/project/issue/projectSetting')
  }
];
