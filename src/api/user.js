// 用户接口
import $axios from './axios';

/**
 * 登录接口
 */
export const login = (data) => {
  return $axios({
    url: 'user/login',
    method: 'post',
    data
  });
};

/**
 * 注册接口
 */
export const register = (data) => {
  return $axios({
    url: 'user/register',
    method: 'post',
    data
  });
};
