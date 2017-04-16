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
            <router-view></router-view>
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
export default {
  data: function data() {
    return {

    }
  },
  methods: {




  }
}
</script>
<style lang="sass" scoped>
  @import "../../style/loginSignup/sass/haru.login.1.sass"
  @import "../../style/loginSignup/sass/haru.signup.2.sass"
</style>
