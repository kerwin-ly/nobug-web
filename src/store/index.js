
import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
import getters from './getters';

Vue.use(Vuex);

const state = {
  loading: false, // 加载中状态
  lock: false, // 互斥锁
  userInfo: {} // 用户信息
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [
    // 将vuex同步到localStorage
    createPersistedState({
      key: 'myVuex',
      storage: window.localStorage,
      reducer: localState => ({
        userInfo: localState.userInfo
      })
    })
  ]
});
