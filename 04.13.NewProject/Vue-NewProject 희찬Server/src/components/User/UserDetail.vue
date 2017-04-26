<template>
  <div class="wrapper">
    <!-- 모달 윈도우 -->
    <div class="modal">
      <!-- 상세 페이지 컨텐츠 영역 -->
      <section class="detail-contents">
        <!-- 상세페이지 나가기 버튼 -->
        <img class="detail-contents--exit" src="../../images/x_button.png" alt="나가기 버튼" width="32" height="32" @click="goHome">
        <!-- 컨텐츠 내용 영역 -->
        <article class="detail-contents__article" >
          <figure class="detail-contents__figure">
            <!-- 컨텐츠 이미지 -->

            <img :src=this.$store.detailData.image alt="" class="detail-contents--image" width="600" height="400">

            <!-- <img src="../../images/21.stephanie-mccabe-24620.jpg" alt="" class="detail-contents--image" width="600" height="400"> -->
            <img src="../../images/emotions/angry.svg" alt="기쁨" class="detail-contents--emotion" width="40" height="40">
          </figure>
          <!-- <div class="untitle"> -->
            <!-- 컨텐츠 제목 영역 -->
            <h1 class="detail-contents__title">{{this.$store.detailData.title}}</h1>
            <!-- 컨텐츠 내용 영역 -->
            <p class="detail-contents__text">{{this.$store.detailData.content}} </p>
            <!-- 날짜 시간 영역 -->
            <p class="detail-content--date">
              <span class="nowtime"></span>
            </p>
            <div class="detail-contents__button--box">
              <button type="button" class="detail-contents--modify__button">수정</button>
              <button type="button" class="detail-contents--delete__button" @click.prevent="deleteHaru">삭제</button>
            </div>
          <!-- </div> -->
        </article>
        <div class="arrow-box">
          <button type="button" class="detail-contents--arrow-left">
            <img src="../../images/arrow-left.png" alt="이전 컨텐츠 이동" width="60" height="80">
          </button>
          <button type="button" class="detail-contents--arrow-right">
            <img src="../../images/arrow-right.png" alt="다음 컨텐츠 이동" width="60" height="80">
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {

    }
  },
  methods: {
    goHome() {
      this.$router.push('/home');
    },
    deleteHaru(){
      var _this = this;
      console.log('글 숫자 가지고 있어?',_this.$store.postID)
      // axios.post("/post/"+_this.$store.postID+"/",{
        axios.post("/post/"+_this.$store.postID+"/",{
        headers: {
          'Authorization': 'Token ' + _this.$store.token
        }
      }).then(function(){
          _this.$router.push('/home');
      });
    }
  },
  mounted() {
    //일단 날짜 표시
    var now_time = document.querySelector('.nowtime');
    var now = new Date();
    var years = now.getFullYear();
    var month = now.getMonth()+1;
    if(month<10){
      month='0'+month;
    }
    var day = now.getDate();
    var hours = now.getHours();

    now_time.innerHTML=`${years}-${month}-${day}`

    console.log("헐 이건데",this.$store.detailData);
    var detailEmotion = document.querySelector('.detail-contents--emotion');

    switch(this.$store.detailData.status) {
    case 1:
        detailEmotion.setAttribute('src',"/dist/happy.svg")
        break;
    case 2:
        detailEmotion.setAttribute('src',"/dist/normal.svg")
        break;
    case 3:
        detailEmotion.setAttribute('src',"/dist/sad.svg")
        break;
    case 4:
        detailEmotion.setAttribute('src',"/dist/irritation.svg")
        break;
    case 5:
        detailEmotion.setAttribute('src',"/dist/angry.svg")
        break;
    default:
        break;
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "../../Sass_detail/main.sass"
</style>
