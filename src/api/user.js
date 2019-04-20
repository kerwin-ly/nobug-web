// 用户接口
import $axios from './axios';

/**
 * 登陆
 */
export const login = (data) => {
  return $axios({
    url: '',
    method: 'POST',
    data
  });
};
