import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'
import App from './App.vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import vScroll from 'vue-scroll'


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(vScroll)


const EventBus = new Vue();


// 컴포넌트간 공유할 수 있게 store 설정
const store = {
  token: '',
  imgURL: '',
  userID: '',
  PostId: '',
  haruinfo: [],
  detailData: {}
};

// 컴포넌트간 공유할 수 있게 store 설정
Object.defineProperties(Vue.prototype, {
  $EventBus: {
    get() {
      return EventBus;
    }
  },
  $store: {
    get () {
      return store;
    }
  }
});

const router = new VueRouter({
  mode: 'history',
  routes
});

// var EventBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

// 기본 URL 설정하여 axios 설정시 빼고 사용 할 수 있다.
axios.defaults.baseURL = 'https://haru.ycsinabro.com';
