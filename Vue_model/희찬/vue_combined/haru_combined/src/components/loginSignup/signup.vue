<template >
  <div>
    <form class="signup__form" id="signup__form" ref="form" method="POST" @submit="submit" enctype="multipart/form-data">
      <fieldset class="signup__filedset">
        <legend class="signup__legend">하루 한장 Signup form </legend>
        <label class="signup__label-email" for="user-id">이메일</label>
        <input type="email" class="signup__input-email" id="user-id" placeholder="이메일" required v-model="user_info.newUser_email" name="email">
        <label class="signup__label-password" for="user-pw">비밀번호</label>
        <input type="password" class="signup__input-password" id="user-pw" placeholder="비밀번호" minlength="8" required v-model="user_info.newUser_password" name="password">
        <label class="signup__label-passwordConfirm" for="confirm-userPw">비밀번호</label>
        <input type="password" class="signup__input-passwordConfirm" id="confirm-userPw" @keyup="validatePassword" placeholder="비밀번호확인" minlength="8" required>
        <button class="signup__button" type="submit" >가입</button>
        <button class="signup__button-facebook">
          <span class="fb__icon"></span>
          <span href="#" class="signup__facebook">Facebook으로 로그인</span>

        </button>
      </fieldset>
    </form>

      <div class="user__box">
        <p class="user__text">계정이 있으신가요?</p>
        <a href="#" class="newuser_signup" @click="gotoLogin">로그인 하러 가기</a>
      </div>
  </div>
</template>

<script>
export default {
  mounted: function mounted() {
    //do something after mounting vue instance
    console.log(axios);
  },
  data: function data() {
    return {
      user_info: {
       newUser_email : '',
       newUser_password : '',

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

      var userData = new FormData(this.$refs.form);

      axios.post('/signup/',userData)
                .then(function(response){
                  console.log("응답:",response);
                })
                .catch(function(error){
                  console.error("에러:",error.message);
                })


    },
    gotoLogin(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../style/loginSignup/sass/signup'
</style>
