<template>
  <div id="app">
    <router-view></router-view>
    <!-- <haru-login></haru-login> -->
    <!-- <haru-signup></haru-signup> -->
  </div>
</template>



<script>

import login from './components/loginSignup/login.vue'
// import signup from './components/loginSignup/signup.vue'

export default {
  name: 'app',
  data () {
    return {
    };
  }
  // components: {
  //   haruLogin: login,
  //   haruSignup: signup
  // }
}
</script>

<style lang="sass">

</style>
