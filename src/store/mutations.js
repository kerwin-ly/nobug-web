import {
  SETLOADING
} from './mutation-types.js';

export default {
  // 加载中动画
  [SETLOADING] (state, isLoading) {
    state.loading = isLoading;
  }
};
