<template>
  <div class="wrapper">
    <!-- 모달 윈도우 -->
    <div class="modal">
      <!-- 상세 페이지 컨텐츠 영역 -->
      <!-- <section v-for="data in this.$store.haruinfo" class="detail-contents"> -->
      <section class="detail-contents">
        <!-- 상세페이지 나가기 버튼 -->
        <img @click.prevent="gohome" class="detail-contents--exit" src="../../images/x_button.png" alt="나가기 버튼" width="32" height="32">
        <!-- 컨텐츠 내용 영역 -->
        <article class="detail-contents__article">
          <figure class="detail-contents__figure">
            <!-- 컨텐츠 이미지 -->
            <!-- <img src="../../images/21.stephanie-mccabe-24620.jpg" alt="" class="detail-contents--image" width="600" height="400"> -->
            <img :src=this.$store.detailData.image alt="" class="detail-contents--image" width="600" height="400">
            <!-- <img src="../../images/emotions/happy.svg" alt="기쁨" class="detail-contents--emotion" width="40" height="40"> -->
            <img src="" alt="기쁨" class="detail-contents--emotion" width="40" height="40">
          </figure>
          <!-- <div class="untitle"> -->
            <!-- 컨텐츠 제목 영역 -->
            <h1 class="detail-contents__title">{{ this.$store.detailData.title }}</h1>
            <!-- 컨텐츠 내용 영역 -->
            <p class="detail-contents__text">{{ this.$store.detailData.content }}</p>
            <!-- 날짜 시간 영역 -->
            <p class="detail-content--date">
              <time class="nowtime"></time>
            </p>
            <div class="detail-contents__button--box">
              <button type="button" class="detail-contents--modify__button">수정</button>
              <button type="button" class="detail-contents--delete__button">삭제</button>
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
  mounted: function mounted() {
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
    //시간 데이터를 보낼 일이 생기면 새벽 5시는 전날로 처리해서 보내기 주석 테스

    switch (this.$store.detailData.status) {
  case 1:
    var status = document.querySelector('.detail-contents--emotion')
    status.setAttribute('src', 'dist/happy.svg')
    break;
  case 2:
    var status = document.querySelector('.detail-contents--emotion')
    status.setAttribute('src', 'dist/normal.svg')
    // console.log('그럭저럭이라니~~');
    break;
  case 3:
    var status = document.querySelector('.detail-contents--emotion')
    status.setAttribute('src', 'dist/sad.svg')
    // console.log('슬픔이라니~~');
    break;
  case 4:
    var status = document.querySelector('.detail-contents--emotion')
    status.setAttribute('src', 'dist/irritation.svg')
    // console.log('짜증이라니~~');
    break;
  case 5:
    var status = document.querySelector('.detail-contents--emotion')
    status.setAttribute('src', 'dist/angry.svg')
    // console.log('분노라니~~~');
    break;

  default:
    console.error('감정을 선택해주세요');
}

  },
    methods: {
      gohome() {
        this.$router.push({path: '/home'});
      }
    }
  }

</script>
<style lang="sass" scoped>
  @import "../../Sass_detail/main.sass"
</style>
