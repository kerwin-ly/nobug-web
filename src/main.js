import Vue from 'vue';
import 'babel-polyfill'; // 兼容处理
import 'element-ui/lib/theme-chalk/index.css'; // element样式单独引入
import '@/style/theme.scss'; // element主题色
import '@/style/common.scss'; // 全局公共样式
import '@/style/reset.scss'; // 重置css样式

// 全局组件
import Icon from '@/components/common/icon';

// vue相关插件
import ElementUI from 'element-ui'; // element-ui
import router from './router'; // 引用路由
import store from './store';
import App from './App';

// 组件
Vue.component('icon', Icon);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
