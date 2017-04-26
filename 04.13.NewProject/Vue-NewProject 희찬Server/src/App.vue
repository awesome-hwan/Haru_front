<template>
  <div id="app">

    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>

    <!-- <add-login></add-login> -->
  </div>
</template>

<script>
// import Login from './components/UserLogin.vue'
// import axios from 'axios';
export default {
  name: 'app',
  components: {
    // addLogin: Login
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate() {
    // axios.defaults.baseURL = 'https://api.example.com';
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }
}
</script>

<style lang="sass">
@import "./Sass_main/setting.normalize"
.fade-enter-active
  animation: fade-in 0.3s
.fade-leave-active
  animation: fade-out 0.3s
@keyframes fade-in
  from

  to
    opacity: 1
@keyframes fade-out
  from

  to
    opacity: 0
</style>
