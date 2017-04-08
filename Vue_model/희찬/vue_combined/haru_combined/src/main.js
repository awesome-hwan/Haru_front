import Vue       from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes}  from  './routes'
import App       from './App.vue'

Vue.use(VueResource);
Vue.use(VueRouter);
// Vue.use(VueRouter);
//

const router = new VueRouter({
  mode:"history",
  routes
});


// const router = new VueRouter({
//   mode:"history"
// });


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
