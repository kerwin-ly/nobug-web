
import axios from 'axios';
import { Message } from 'element-ui'
import store from '@/store';
import router from '@/router/index';
require('es6-promise').polyfill();
require('babel-polyfill');
require('promise.prototype.finally').shim();
axios.defaults.baseURL = '/api/';
axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';

let tempOptions = {};

// 拦截数据请求
axios.interceptors.request.use(
  config => {
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();

    if (tempOptions.load) {
      store.commit('SETLOADING', true);
    }
    if (tempOptions.method == 'post') {
      if (hasLock(tempOptions.url)) {
        if (store.state.lock) {
          store.commit('SETLOCK', false);
        } else {
          source.cancel('取消请求');
        }
      }
    }
    return config
  },
  error => {
    // 请求错误做的事情
    if (error.message.includes('timeout')) {
      Message.error('请求超时');
    }

    return Promise.reject(error) // 返回的错误信息，在调用时候
  }
)

// 拦截数据返回
axios.interceptors.response.use(data => {
  if (data.status && data.status == 200) { // data.status为链接状态码  data.data.status为业务端状态码
    if (data.data.status != 200) {
      if (tempOptions.isResolveError) { // 当页面需要自定义处理错误信息时，reject错误信息
        return Promise.reject(data);
      }
      switch (data.data.status) { // 默认错误状态码处理
        case 201:
          break;
        case 401:
          if (window.sessionStorage.is_api) {
            store.commit('SETLOGINDIALOG', true);
          } else {
            router.replace({path: '/login'});
          }
          break;
        case 403:
          Message.error('无操作权限');
          break;
        default:
          Message.error(data.data.message);
          break;
      }
    }
    return data;
  }
}, error => {
  if (error.response) {
    let status = error.response.status;

    if (status == 404 || status == 500 || status == 502 || status == 504) {
      Message.error('暂时无法连接到服务器，请稍后再试...');
    }
  } else {
    if (String(error).includes('timeout')) {
      Message.error('请求超时');
    }
  }
  return Promise.reject(error);
})

export default function $axios (options) {
  tempOptions = options;

  return new Promise((resolve, reject) => {
    let requestUrl = '';
    let requestParams = {};

    if (options.method === 'get') {
      let config = getRequestConfig(options);

      requestUrl = config.url;
      requestParams = {
        params: config.data
      }
    } else if (options.method === 'post') {
      requestUrl = options.url;
      requestParams = options.data;
    }

    axios[options.method](requestUrl, requestParams)
      .then((res) => {
        if (res.data && res.data.status === 200) {
          resolve(res);
        }
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {
        store.commit('SETLOADING', false);
        store.commit('SETLOCK', true);
      })
  })
}

/**
 * 是否需要互斥锁
 * @param {any} url requestUrl
 * @returns boolean
 */
const hasLock = (url) => {
  let ignoreLockArray = ['dic', 'img']; // 数据字典忽略lock锁

  for (let i = 0; i < ignoreLockArray.length; i++) {
    if (url.includes(ignoreLockArray[i])) {
      return false;
    }
    return true;
  }
}

/**
 * GET请求参数处理
 * @param {any} options 参数
 * @returns request config
 */
const getRequestConfig = (options) => {
  let data = {};

  if (typeof options.data != 'undefined') {
    if (options.url.substr(options.url.length - 1, 1) === '_') {
      options.url += options.data;
    } else {
      if (typeof options.data === 'object') {
        options.data = JSON.stringify(options.data);
      }
      data.data = options.data
    }
  }
  data.timespan = new Date().getTime(); // 添加随机字符串，防止ie缓存

  return {
    url: options.url,
    data
  };
}
