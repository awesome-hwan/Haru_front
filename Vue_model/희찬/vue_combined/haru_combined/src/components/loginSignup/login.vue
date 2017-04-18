<template>

      <div>

        <form class="login__form" id="login__form">
          <fieldset class="login__filedset">
            <legend class="login__legend">하루 한장 log in form </legend>
            <label class="login__label-email" for="user-id">이메일</label>
            <input type="email" class="login__input-email" id="user-id" placeholder="이메일" required>
            <label class="login__label-password" for="user-pw">비밀번호</label>
            <input type="password" class="login__input-password" id="user-pw" placeholder="비밀번호" minlength="8" required>
            <button class="login__button" type="submit">로그인</button>
            <button class="login__button-facebook">
              <span class="fb__icon"></span>
              <span href="#" class="login__facebook">Facebook으로 로그인</span>

            </button>
            <a href="#" class="login__password-find">비밀번호를 잊으셨나요?</a>
          </fieldset>
        </form>

          <div class="newuser__box">
            <p class="newuser__text">계정이 없으신가요?</p>
            <a href="#" class="newuser_signup" @click="gotoSignup">가입하기</a>
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

<style lang="sass" >
  @import '../../style/loginSignup/sass/login'
</style>
