<template>
  <div class="wrapper">
    <section class="loginSignup__container">
      <div class="loginbox">
        <div class="loginbox__heading">
          <h1 class="login__logo"> 하루한장</h1>
          <img src="" alt="">
        </div>

      <form class="login__form" id="login__form">
        <fieldset class="login__filedset">
          <legend class="login__legend">하루 한장 log in form </legend>
          <label class="login__label-email" for="user-id">이메일</label>
          <input type="email" class="login__input-email" id="user-id" placeholder="E-mail" required>
          <label class="login__label-password" for="user-pw">비밀번호</label>
          <input type="password" class="login__input-password" id="user-pw" placeholder="password" minlength="8" required>
          <button class="login__button" type="submit">로그인</button>
          <div class="line__or">
            <span class="login__line"></span><p class="or">또는</p><span class="login__line"></span>
          </div>
          <button class="login__button-facebook">
            <span class="fb__icon"></span>
            <!-- <i class="fa fa-facebook-square" aria-hidden="true"></i> -->
            <span href="#" class="login__facebook">Facebook으로 로그인</span>
          </button>
        </fieldset>
        <a href="#" class="login__password-find">비밀번호를 잊으셨나요?</a>
      </form>
      <div class="newuser__box">
        <p class="newuser__text">계정이 없으신가요?</p>
        <!-- <router-link to = "/signup" active-class="current-page" class="goto-other-page">가입하기</router-link> -->
        <a href="#" class="newuser_signup" @click="gotoSignup">가입하기</a>
      </div>
    </div>  
    </section>
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
      this.$router.push('/loginSignup/signupbox')
    }
  }
}
</script>export default {
}
</script>

<style lang="sass" scoped>
  @import "../../style/loginSignup/sass/login2.sass"
</style>
