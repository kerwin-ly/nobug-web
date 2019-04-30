// project api
import $axios from './axios';

/**
 * add project
 * @param data
 */
export const addProject = (data) => {
  return $axios({
    url: 'project/add',
    method: 'post',
    data
  });
};

/**
 * get projects
 * @param data
 */
export const getProjectList = () => {
  return $axios({
    url: 'project/list',
    method: 'get'
  });
};
