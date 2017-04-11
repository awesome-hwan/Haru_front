<template>
  <div class="container">
    <!-- ######################### header area ######################### -->
    <header class="header">
      <h1 class="header__logo"><img src="../images/HaruLogoWithName_Black.svg" alt="하루한장 메인로고">하루한장 메인로고</h1>
      <!-- <a href="#" class="header__logout">Log out</a> -->
      <router-link to="/login" tag="a" class="header__logout">Log out</router-link>
    </header>

    <!-- ######################### main area ######################### -->
    <main class="main">
    <!-- ######################### intitle area ######################### -->
      <ul class="main__years">
        <li class="main__years-heading">Years</li>
        <li class="main__years-list"><a href="#">2017</a></li>
        <li class="main__years-list"><a href="#">2016</a></li>
        <li class="main__years-list"><a href="#">2015</a></li>
      </ul>
  <!-- ######################### emotion ######################### -->
      <ul class="main__emotions">

        <li class="main__emotions-heading">감정</li>

        <li class="main__emotions-happy"><a href="#">기쁨</a></li>

        <li class="main__emotions-sad"><a href="#">슬픔</a></li>

        <li class="main__emotions-anger"><a href="#">버럭</a></li>

        <li class="main__emotions-fear"><a href="#">그럭저럭</a></li>

        <li class="main__emotions-disgust"><a href="#">짜증</a></li>

      </ul>
      <!-- ######################### emotion ######################### -->
        <!-- ######################### main__contents area ######################### -->
        <!-- 클래스네임 main__contents-list 로 번경 -->
      <div class="main__contents">

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/trees-190865_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목가마나가다제목가마나가다제목가마나가다</h2>
            <p class="main__page-card__body-text">부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/amsterdam-164818_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/back-light-350586_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/bordeaux-869032_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/bridge-19513_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/forest-2165911_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/hdr-186926_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/mushrooms-116973_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/tianjin-2185510_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">제목</h2>
            <p class="main__page-card__body-text">부제목</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

      </div>
      <div class="main__button-position">
        <button class="main__button-lodamore">더보기 &#xE001;</button>
      </div>
      <!-- <button class="main__button-textadd">글쓰기 &#xE001;</button> -->
      <router-link to="/detail" class="main__button-textadd" tag="button">글쓰기 &#xE001;</router-link>
    </main>
    <!-- ######################### footer area ######################### -->
    <footer class="footer">

        <ul class="footer__nav-haru">
          <li class="footer__nav-haru-info"><a href>하루한장 정보</a></li>
          <li class="footer__nav-haru-support"><a href="#">지원</a></li>
          <li class="footer__nav-haru-blog"><a href="#">블로그</a></li>
          <li class="footer__nav-haru-news"><a href="#">관련기사</a></li>
          <li class="footer__nav-haru-api"><a href="#">API</a></li>
          <li class="footer__nav-haru-recruit"><a href="#">채용 정보</a></li>
          <li class="footer__nav-haru-privacy-info"><a href="#">개인정보처리방침</a></li>
          <li class="footer__nav-haru-provision"><a href="#">약관</a></li>
          <li class="footer__nav-haru-dir"><a href="#">디렉터리</a></li>
          <li class="footer__nav-haru-lang"><a href="#">언어</a></li>
        </ul>

      <span class="footer__haru-copyright">&copy; 2017 하루한장</span>
    </footer>

  </div>

</template>
<script>
export default {

data() {
    return {

    }
  }
}
</script>
<style lang="sass">
  @import "../Sass_main/main__page-style.sass"
</style>
