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


const router = new VueRouter({
  mode: 'history',
  routes
});

const EventBus = new Vue();

const store = {
  token: '',
  imgURL: '',
  userID:'',
  haruinfo:[],
  postID:'',
  detailData:{}
};

Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get() {
      return EventBus;
    }
  },
  $store: {
    get() {
      return store;
    }
  }
});

// var EventBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

axios.defaults.baseURL = 'https://haru.ycsinabro.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
