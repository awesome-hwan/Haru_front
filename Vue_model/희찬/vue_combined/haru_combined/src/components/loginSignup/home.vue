<template>
  <div class="wrapper">
    <div class="modal__box">
      <section class="loginSignup__container">
        <div class="loginSignupBox">
          <div class="loginSignupBox__heading">
            <!-- <img src="../../images/harulogo.svg" alt="" class="login__logo"> -->
            <h1 class="loginSignup__heading">하루한장</h1>
          </div>
        <router-view></router-view>

        </div>
      </section>
    </div>
  </div>

</template>

<script>
export default {
  data: function data() {
    return {

    }
  },
  methods: {
    gotoSignup() {
      this.$router.push('/signup')
    }
  }
}
</script>export default {
}
</script>

<style lang="sass" scoped>
  @import '../../style/loginSignup/sass/mix'
</style>
