import Vue       from 'vue'
import VueCoreImageUpload  from 'vue-core-image-upload';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes}  from  './routes'
import App       from './App.vue'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueCoreImageUpload);
// Vue.use(VueRouter);
//

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






  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyA-BHdAVVSiiBvutOOk-2yrBqhQm2QWuGU",
      authDomain: "haruphoto-6ad66.firebaseapp.com",
      databaseURL: "https://haruphoto-6ad66.firebaseio.com",
      projectId: "haruphoto-6ad66",
      storageBucket: "haruphoto-6ad66.appspot.com",
      messagingSenderId: "1019051872273"
    };
    firebase.initializeApp(config);
