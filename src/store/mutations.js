import {
  SETLOADING,
  SETLOCK
} from './mutation-types';

export default {
  // 加载中动画
  [SETLOADING](state, isLoading) {
    state.loading = isLoading;
  },
  // 设置互斥锁
  [SETLOCK](state, isLock) {
    state.loading = isLock;
  }
};
