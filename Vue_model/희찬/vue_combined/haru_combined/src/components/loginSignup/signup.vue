<template>
  <div>
    <div class="wrapper">
    <div class="loginSignup__total-box">
      <section class="loginSignup__container">
        <div class="loginSignup__image">
          <div class="dynamic__image">
          </div>
        </div>
        <div class="loginSignup__items-box">
          <div class="signup__box">
            <h1 class="signup__logo"> 하루한장</h1>
            <h2 class="signup__intro">오늘의 기록하고 싶은 순간을 하루한장으로 기록해보세요</h2>
            <form action="javascript:alert('회원님 반갑습니다');" class="signup__form" id="signup__form" @submit="submit">
              <button class="signup__button-facebook">
                <span class="fb__icon"></span><span href="#" class="signup__facebook">Facebook으로 로그인</span>
              </button>
              <div class="line__or">
                <span class="signup__line"></span><p class="or">또는</p><span class="signup__line"></span>
              </div>
              <fieldset class="signup__filedset">
                <legend class="signup__legend">하루 한장 log in form </legend>
                <label class="signup__label-email" for="user-id">이메일</label>
                <input type="email" class="signup__input-email" id="user-id" placeholder="이메일" required v-model="user_info.newUser_email">
                <label class="signup__label-name" for="name">사용자이름</label>
                <input type="text" class="signup__input-username" id="username" placeholder="사용자이름" required v-model="user_info.newUser_userName">
                <label class="signup__label-password" for="user-pw">비밀번호</label>
                <input type="password" class="signup__input-password" id="user-pw" placeholder="비밀번호" minlength="8" required v-model="user_info.newUser_password">
                <input type="password" class="signup__input-passwordConfirm" id="confirm-userPw" @keyup="validatePassword" placeholder="비밀번호확인" minlength="8" required v-model="user_info.newUser_passwordConfirm">
                <label class="signup__label-username" for="username">사용자이름</label>
                <!-- <router-link tag="button" to = "/mainpage" active-class="current-page" class="signup__button"  @click="submit">가입</router-link> -->
                <button class="signup__button" type="submit">가입</button>
              </fieldset>
              <p class="signup__article">가입하면 하루한장의 약관 및 개인정보처리방침에 동의하게 됩니다.</p>
            </form>
        </div>
            <div class="user__box">
              <p class="user__text">계정이 있으신가요?</p>
              <!-- <router-link to = "/login" active-class="current-page" class="goto-other-page">로그인</router-link> -->
              <a href="#" class="user_login" @click="gotoLogin">로그인</a>
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
        <div class="signup__fotter-items">
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
        <span class="haru__copyright"> &copy; 2017 하루한장</span>
        </div>
      </footer>
    </div>
  </div>
</template>
<script src="./confirmPassword.js"></script>
<script>

let user_info={
  newUser_email : '',
  newUser_userName : '',
  newUser_password : '',
  newUser_passwordConfirm : '',
  validation: false
};

export default {

  // name: "signup",
  data: function data() {
    return {
      user_info:{

      }
    }
  },
  mounted: function mounted() {
    //do something after mounting vue instance

  },
  methods: {
    validatePassword(){
      var password = document.getElementById("user-pw")
      var confirm_password = document.getElementById("confirm-userPw");
      if(password.value !== confirm_password.value) {
       confirm_password.setCustomValidity("비밀번호가 맞지 않습니다.")
       this.user_info.validation = false;
      //  console.log("validation",this.user_info.validation);
      } else {
        confirm_password.setCustomValidity('');
        this.user_info.validation = true;
        // console.log("validation",this.user_info.validation);

      }
    },
    submit(){
      if(this.user_info.validation===true){
      this.$http.post('https://haru-logintest.firebaseio.com/haruUserList.json',this.user_info)
                .then(response => console.log(response))
                .catch(error => console.error(error.message))


                // 페치 하면 다 가지고 온다 필요한 부분만 가지고 오도록
                //
                //
                // 이 부분 에러남
                // .then(this.$http.get('https://haru-logintest.firebaseio.com/haruUserList.json'))
                // .then(response => console.log(response.json()))
                // .catch(error => console.error(error.message))


                .then(this.$router.push('/mainpage'))
              }

                //정보를 보내고 서버로부터도 받은 다음 메인page로 보내줘야 되는데 이 부분을 어떻게 해야 되는지 모르겠다.

  },
    gotoLogin(){
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "../../style/loginSignup/sass/haru.signup.2.sass"
</style>
