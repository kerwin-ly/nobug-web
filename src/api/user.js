// 用户接口
import $axios from './axios';

/**
 * 注册
 */
export const login = (data) => {
  return $axios({
    url: '/user/login',
    method: 'POST',
    data
  });
};
