<template>
  <div>
    <div class="wrapper">
      <!-- 로그인 영역 푸터를 제외하고 전체 영역  -->
      <div class="loginSignup__total-box">

        <section class="loginSignup__container">
          <div class="loginSignup__image">
            <div class="dynamic__image">
              <!-- <img src="#" alt="#"> -->
            </div>
          </div>
          <div class="loginSignup__items-box">
            <div class="login__box">
              <h1 class="login__logo"> 하루한장
              </h1>
              <form action="javascript:alert('회원님 반갑습니다');" class="login__form" id="login__form">
                <fieldset class="login__filedset">
                  <legend class="login__legend">하루 한장 log in form </legend>
                  <label class="login__label-email" for="user-id">이메일</label>
                  <input type="email" class="login__input-email" id="user-id" placeholder="E-mail" required>
                  <label class="login__label-password" for="user-pw">비밀번호</label>
                  <input type="password" class="login__input-password" id="user-pw" placeholder="password" minlength="8" required>
                  <button class="login__button" type="submit" @click="isUser">로그인</button>
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
          </div>
              <div class="newuser__box">
                <p class="newuser__text">계정이 없으신가요?</p>
                <!-- <router-link to = "/signup" active-class="current-page" class="goto-other-page">가입하기</router-link> -->
                <a href="#" class="newuser_signup" @click="gotoSignup">가입하기</a>
              </div>
            <div class="download__app">
              <p class="downlaod__text">앱을 다운로드 하세요</p>
              <div class="downlaod__buttons">
                <button type="button" name="button" class="download__ios"></button>
                <button type="button" name="button" class="download__android"></button>
              </div>
            </div>
        </div>
        </section>
      </div>
        <footer class="loginSignup__footer">
          <div class="login__fotter-items">
          <ul class="haru__link-list">
            <li><a href="#" class="haru__info">하루한장 정보</a></li>
            <li><a href="#" class="haru__support">지원</a></li>
            <li><a href="#" class="haru__blog">블로그</a></li>
            <li><a href="#" class="haru__news">관련기사</a></li>
            <li><a href="#" class="haru__api">API</a></li>
            <li><a href="#" class="haru__recruit">채용정보</a></li>
            <li><a href="#" class="haru__privacy-info">개인정보처리방침</a></li>
            <li><a href="#" class="haru__provision">약관</a></li>
            <li><a href="#" class="haru__dir">디렉토리</a></li>
            <li><a href="#" class="haru__lang">언어</a></li>
          </ul>
          <span class="haru__copyringt"> &copy; 2017 하루한장</span>
          </div>
        </footer>
    </div>
  </div>
</template>
<script>
// import loginSignupLink from "./commonComponent/loginSignupLink.vue"
export default {
  // components: {
  //   gotoSignup: loginSignupLink
  // },
  // name: "login",
  data: function data() {
    return {

    }
  },
  methods: {
    gotoSignup(){
      this.$router.push('/signup')

    },
    isUser(){

    }
  }
}
</script>
<style lang="sass" scoped>
  @import "../../style/loginSignup/sass/haru.login.1.sass"
</style>
