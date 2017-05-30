import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'
import App from './App.vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import vScroll from 'vue-scroll'
// import firebase from "firebase";
// import * as firebase from "firebase";
// import Common from './common.js'
// import axios from 'axios'


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(vScroll)


//Global Settings
// Vue.http.options.root = 'https://vue-http-81e7b.firebaseio.com/UserInfo.json';
// Vue.http.headers.common['Authorizetion'] = 'Token YXBpOnBhc3B3B3Hk';

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

axios.defaults.baseURL = 'http://haru-eb.ap-northeast-2.elasticbeanstalk.com';
