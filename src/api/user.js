// 用户接口
import $axios from './axios';

/**
 * 登录接口
 * @param data
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
 * @param data
 */
export const register = (data) => {
  return $axios({
    url: 'user/register',
    method: 'post',
    data
  });
};

/**
 * 注销接口
 */
export const logout = () => {
  return $axios({
    url: 'user/logout',
    method: 'get'
  });
};

/**
 * 更新用户信息
 * @param data
 */
export const updateUserInfo = (data) => {
  return $axios({
    url: 'user/update',
    method: 'post',
    data
  });
};
