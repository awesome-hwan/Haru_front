<template>
  <div class="wrapper">
    <!-- 모달 윈도우 -->
    <div class="modal">
      <!-- 상세 페이지 컨텐츠 영역 -->
      <section class="detail-contents">
        <!-- 상세페이지 나가기 버튼 -->
        <img class="detail-contents--exit" src="../../images/x_button.png" alt="나가기 버튼" width="32" height="32">
        <!-- 컨텐츠 내용 영역 -->
        <article class="detail-contents__article">
          <figure class="detail-contents__figure">
            <!-- 컨텐츠 이미지 -->
            <img src="../../images/21.stephanie-mccabe-24620.jpg" alt="" class="detail-contents--image" width="600" height="400">
            <img src="../../images/emotions/angry.svg" alt="기쁨" class="detail-contents--emotion" width="40" height="40">
          </figure>
          <!-- <div class="untitle"> -->
            <!-- 컨텐츠 제목 영역 -->
            <h1 class="detail-contents__title">Lorem ipsum dolor sit amet.</h1>
            <!-- 컨텐츠 내용 영역 -->
            <p class="detail-contents__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sequi eligendi, libero ab distinctio aliquam nostrum, quibusdam dolorem. Similique, quia soluta ad nisi perferendis distinctio, reiciendis id aperiam ut quam assumenda, labore enim, rem cumque  dicta maxime! Dolor voluptatum ipsam recusandae fugit minus, ratione accusamus optio eius. Architecto suscipit dolorum consectetur quae, laborum maiores optio in quam praesentium! Illum commodi sint totam repellat consequatu.</p>
            <!-- 날짜 시간 영역 -->
            <p class="detail-content--date">
              <time class="date__time">2017.04.03</time>
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
  }
}
</script>
<style lang="sass" scoped>
  @import "../../Sass_detail/main.sass"
</style>
