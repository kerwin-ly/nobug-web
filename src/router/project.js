
import union from 'lodash/union';
import issue from './issue';

export default [
  {
    path: '/',
    name: 'projectList',
    component: () => import(/* webpackChunkName: "projectList" */ '@/pages/project/projectList')
  },
  {
    path: 'projectDetail/:projectId',
    name: 'projectDetail',
    component: () => import(/* webpackChunkName: "projectDetail" */ '@/pages/project/projectDetail'),
    children: union(
      issue
    )
  }
];
