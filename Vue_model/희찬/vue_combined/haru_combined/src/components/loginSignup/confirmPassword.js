var password = document.getElementById("user-pw")

confirm_password = document.getElementById("confirm-userPw");
console.log('--------------------------------------------------------');
function checkPassword(){
  if(password.value !== confirm_password.value) {
   confirm_password.setCustomValidity("비밀번호가 맞지 않습니다.")
  } else {
    confirm_password.setCustomValidity('');
  }
}

confirm_password.addEventListener('keyup',checkPassword);
