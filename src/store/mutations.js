import {
  SETLOADING
} from './mutation-types';

export default {
  // 加载中动画
  [SETLOADING](state, isLoading) {
    state.loading = isLoading;
  }
};
