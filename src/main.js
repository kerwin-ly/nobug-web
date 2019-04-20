// css相关
import 'babel-polyfill' // 兼容处理
import 'element-ui/lib/theme-chalk/index.css'; // element样式单独引入
import '@/style/common.scss'; // 全局公共样式
import '@/style/reset.scss'; // 重置css样式

// vue相关插件
import router from './router'; // 引用路由
import store from './store';
import ElementUI from 'element-ui'; // element-ui

// vue
import Vue from 'vue';
import App from './App';

// 框架使用
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
