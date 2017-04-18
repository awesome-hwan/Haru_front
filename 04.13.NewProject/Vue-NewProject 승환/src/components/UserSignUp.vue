<template>
  <div class="wrapper">
  <div class="modal__box">
    <section class="loginSignup__container">
      <div class="loginSignupBox">
        <div class="loginSignupBox__heading">
          <!-- <img src="../../images/harulogo.svg" alt="" class="login__logo"> -->
          <h1 class="loginSignup__heading">하루한장</h1>
        </div>

      <form class="signup__form" id="signup__form">
        <fieldset class="signup__filedset">
          <legend class="signup__legend">하루 한장 Signup form </legend>
          <label class="signup__label-email" for="user-id">이메일</label>
          <input v-model="user_input.email" type="email" class="signup__input-email" id="user-id" placeholder="이메일" required>
          <label class="signup__label-password" for="user-pw">비밀번호</label>
          <input v-model="user_input.password" type="password" class="signup__input-password" id="user-pw" placeholder="비밀번호" minlength="8" required >
          <label class="signup__label-passwordConfirm" for="confirm-userPw">비밀번호</label>
          <input type="password" class="signup__input-passwordConfirm" id="confirm-userPw"  placeholder="비밀번호확인" minlength="8" required >
          <button class="signup__button" type="submit" @click="submitData">가입</button>
          <button class="signup__button-facebook">
            <span class="fb__icon"></span>
            <span href="#" class="signup__facebook">Facebook으로 로그인</span>

          </button>
        </fieldset>
      </form>

        <div class="user__box">
          <p class="user__text">계정이 있으신가요?</p>
          <!-- <a href="#" class="newuser_signup">로그인 하러 가기</a> -->
          <router-link tag="a" to = "/login" active-class="current-page" class="newuser_signup">로그인 하러 가기</router-link>
        </div>
    </div>
    </section>
  </div>
</div>
</template>

<script>

export default {

  data() {
    return {

      user_input: {
        email: '',
        password: ''

      },
      datalist: [],
      resource: {}
    }
  },
   methods: {

     submitData() {
       console.log("input:",this.user_input)
       console.log(this.$http)
       this.$http.post('http://haru-eb.ap-northeast-2.elasticbeanstalk.com/signup/', this.user_input)
                 .then(function(response) {
                   console.log("res:",response);
                 })
                 .catch(function(error) {
                   console.log("Err",error.message);
                 })

         }

   }
}
</script>
<style lang="sass" scoped>
  @import "../Sass_login_signup/signup.sass"
</style>
