<template>
  <div>
    <div class="signup__box">
      <h1 class="signup__logo"> 하루한장</h1>
      <h2 class="signup__intro">오늘 기록하고 싶은 순간을 하루한장으로 남겨보세요</h2>
      <form action="javascript:alert('회원님 반갑습니다');" class="signup__form" id="signup__form">
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
          <router-link tag="button" to = "/mainpage" active-class="current-page" class="signup__button"  @click="submit">가입</router-link>
          <!-- <button class="signup__button" type="submit" @click="submit">가입</button> -->
        </fieldset>
        <p class="signup__article">가입하면 하루한장의 약관 및 개인정보처리방침에 동의하게 됩니다.</p>
      </form>
  </div>
  <div class="user__box">
    <p class="user__text">계정이 있으신가요?</p>
    <!-- <router-link to = "/login" active-class="current-page" class="goto-other-page">로그인</router-link> -->
    <a href="#" class="user_login" @click="gotoLogin">로그인</a>
  </div>
  </div>
</template>
<script>
export default {
  data: function data() {
    return {
      user_info: {
       newUser_email : '',
       newUser_userName : '',
       newUser_password : '',
       newUser_passwordConfirm : '',
     }
    }
  },
  methods: {
    validatePassword(){
      var password = document.getElementById("user-pw")
      var confirm_password = document.getElementById("confirm-userPw");
      if(password.value !== confirm_password.value) {
       confirm_password.setCustomValidity("비밀번호가 맞지 않습니다.")
      } else {
        confirm_password.setCustomValidity('');
      }
    },
    submit(){
      this.$http.post('https://haru-logintest.firebaseio.com/haruUserList.json',this.user_info)
                .then(function(response){
                  console.log(response);

                })
                .catch(function(error){
                  console.error(error.message);
                })


    },
    gotoLogin(){
      this.$router.push('/loginSignup')
    }
  }
}
</script>
<style>
</style>
