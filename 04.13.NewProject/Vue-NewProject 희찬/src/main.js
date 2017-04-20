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

// Points to the root reference
var storageRef = firebase.storage().ref();

// Points to 'images'
var imagesRef = storageRef.child('haruphotos');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values

var spaceRef = imagesRef.child(fileName);

// File path is 'images/space.jpg'
var path = spaceRef.fullPath

// File name is 'space.jpg'
var name = spaceRef.name

// Points to 'images'
var imagesRef = spaceRef.parent;


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
