import {
  SETLOADING,
  SETLOCK,
  SETUSERINFO
} from './mutation-types';

export default {
  // 加载中动画
  [SETLOADING](state, isLoading) {
    state.loading = isLoading;
  },
  // 设置互斥锁
  [SETLOCK](state, isLock) {
    state.loading = isLock;
  },
  // 保存用户信息
  [SETUSERINFO](state, userInfo) {
    state.userInfo = userInfo;
  }
};
