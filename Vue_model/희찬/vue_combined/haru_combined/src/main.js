import Vue       from 'vue'
import VueCoreImageUpload  from 'vue-core-image-upload';

// import VueResource from 'vue-resource'

import VueRouter from 'vue-router'
import {routes}  from  './routes'
import App       from './App.vue'
// import 'expose-loader?$!expose-loader?jQuery!jquery'
import vScroll   from 'vue-scroll'

import axios from 'axios'




// Vue.use(VueResource);

Vue.use(VueRouter);
Vue.use(VueCoreImageUpload);
// Vue.use(VueRouter);


Vue.use(VueRouter);
Vue.use(axios);
Vue.use(vScroll)

// Vue.prototype.$http = axios;


const router = new VueRouter({
  mode:"history",
  routes
});


// const router = new VueRouter({
//   mode:"history"
// });
// var EventBus = new Vue();

new Vue({
  el: '#app',
  components: {
    'vue-core-image-upload': VueCoreImageUpload
  },
  data: {
    src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
  },
  methods: {
     imageuploaded(res) {
      if (res.errcode == 0) {
        this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
      }
    }
  },
  router,
  render: h => h(App)

});

axios.defaults.baseURL = 'http://haru-eb.ap-northeast-2.elasticbeanstalk.com';

// axios.defaults.baseURL                         = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = 'Token dab1748ebaceb34ed6796bc3b7dc84741b77af54';
// axios.defaults.headers.post['Content-Type']    = 'application/x-www-form-urlencoded';
//
// axios.get('https://api.codecraft.tv/samples/v1/')
//      .then(function(response) {
//       console.log(response);
//      })
//      .catch(function(error) {
//       console.error(error.message);
//      });




  // Initialize Firebase
  // var config = {
  //     apiKey: "AIzaSyA-BHdAVVSiiBvutOOk-2yrBqhQm2QWuGU",
  //     authDomain: "haruphoto-6ad66.firebaseapp.com",
  //     databaseURL: "https://haruphoto-6ad66.firebaseio.com",
  //     projectId: "haruphoto-6ad66",
  //     storageBucket: "haruphoto-6ad66.appspot.com",
  //     messagingSenderId: "1019051872273"
  //   };
  //   firebase.initializeApp(config);
