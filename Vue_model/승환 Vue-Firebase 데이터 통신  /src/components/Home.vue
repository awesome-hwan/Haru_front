<template>
  <div class="container">
    <!-- ######################### header area ######################### -->

    <!-- ######################### backgroundColor area ######################### -->
    <header class="header">
      <h1 class="header__logo"><img src="../images/HaruLogoWithName_Black.svg" alt="하루한장 메인로고">하루한장 메인로고</h1>
      <router-link to="/login" tag="a" class="header__logout">Log out</router-link>
    </header>

    <nav class="main__background" aria-label="select color list">
      <ul>
        <li v-for="color in colorList">
          <a
            href
            role="button"
            :class="'main__background__item--' + color.className"
            :title="color.name"
            :aria-label="color.name"
            @click.prevent="changeBGColor($event)"></a>
        </li>
      </ul>
    </nav>
    <!-- ######################### backgroundColor area ######################### -->

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



        <!-- <a href="/Detail" v-for="data in datalist" class="main__page-card">
          <div class="main__page-card__header">
              <img src="../images/trees-190865_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="감정이미지" class="main__page-card__body-profile-img">
            </div>
              <h2 v-model="data" class="main__page-card__body-title">{{ data.h1 }}</h2>
              <p v-model="data" class="main__page-card__body-text"> {{ data.text }} </p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a> -->

    <!-- $$$$$$$$$$$$$$$$$$$$$$$원형을 보존해야한다 Vue 첫 작성 $$$$$$$$$$$$$$$$$$$$$$$-->

          <!-- <router-link to="/Detail" class="main__page-card" tag="a" v-for="data in datalist">
          <div class="main__page-card__header">
            <img src="../images/trees-190865_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>

          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
              <h2 class="main__page-card__body-title" >{{ data.h1 }}</h2>
              <p class="main__page-card__body-text">{{ data.text }}</p>
            <div class="main__page-card__body-date"></div>
          </div>
          </router-link> -->

      <!-- $$$$$$$$$$$$$$$$$$$$$$$원형을 보존해야한다 Vue 첫 작성 $$$$$$$$$$$$$$$$$$$$$$$-->

        <a href="#" class="main__page-card">
          <div class="main__page-card__header">
            <img src="../images/amsterdam-164818_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
          </div>
          <!-- ################################ 카드 중단  ############################################# -->
          <div class="main__page-card__body">
            <div class="main__page-card__body-profile">
              <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
            </div>
            <h2 class="main__page-card__body-title">하나</h2>
            <p class="main__page-card__body-text">하나하나</p>
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
            <h2 class="main__page-card__body-title">둘둘</h2>
            <p class="main__page-card__body-text">둘둘둘둘</p>
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
            <h2 class="main__page-card__body-title">셋셋</h2>
            <p class="main__page-card__body-text">셋세셋셋</p>
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
            <h2 class="main__page-card__body-title">네네네넷</h2>
            <p class="main__page-card__body-text">네네네네네넷</p>
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
            <h2 class="main__page-card__body-title">다서서서섯</h2>
            <p class="main__page-card__body-text">다서서서서섯</p>
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
            <h2 class="main__page-card__body-title">여서서서섯</h2>
            <p class="main__page-card__body-text">여서서서서섯</p>
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
            <h2 class="main__page-card__body-title">일고고고곱</h2>
            <p class="main__page-card__body-text">일고고고고곱</p>
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
            <h2 class="main__page-card__body-title">여덟여럽</h2>
            <p class="main__page-card__body-text">여덟여럽</p>
            <div class="main__page-card__body-date"></div>
          </div>
        </a>

        <router-link to="/Detail" class="main__page-card" tag="a" v-for="data in datalist">
            <div class="main__page-card__header">
              <img src="../images/trees-190865_1920.jpg" alt="고대의 유물이다." class="main__page-card__header-img">
            </div>

            <div class="main__page-card__body">
              <div class="main__page-card__body-profile">
                <img src="../images/tianjin-2185510_1920.jpg" alt="" class="main__page-card__body-profile-img">
              </div>
                <h2 class="main__page-card__body-title" >{{ data.h1 }}</h2>
                <p class="main__page-card__body-text">{{ data.text }}</p>
              <div class="main__page-card__body-date"></div>
            </div>
        </router-link>


      </div>
      <div class="main__button-position">
        <button class="main__button-lodamore">더보기▶</button>
      </div>
      <router-link to="/Edit" class="main__button-textadd" tag="button">글쓰기▶</router-link>
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

  // mounted() {
  //   // console.log('mounted');
  //   // console.log(document.querySelector('.main__background'));
  //   var color_list       = document.querySelector('.main__background');
  //   var color_list_items = color_list.querySelectorAll('a');
  //   var body             = document.body;
  //
  //   for( var i=0; i < color_list_items.length; i++ ) {
  //     color_list_items[i].onclick = function() {
  //       body.style.background =  window.getComputedStyle(this,null).background;
  //       return false;
  //     }
  //   }
  //
  // },
mounted() {
      //  console.log(this.$http)
       this.$http.get('https://vue-http-81e7b.firebaseio.com/UserHarulist.json')
                 .then(function(response) {
                   return response.json();
                 })
                 .then( function(data) {
                   this.datalist = Object.values(data);
                 })
                 .catch(function(error) {
                   console.error(error.message)
                 });

},

  data() {
    return {
      colorList: [
        {
          name: 'light tan',
          className: 'tan'
        },
        {
          name: 'light khaki',
          className: 'khaki'
        },
        {
          name: 'beige',
          className: 'beige'
        },
        {
          name: 'pale grey',
          className: 'pale'
        }
      ],
      datalist: []
    }
  },
  methods: {
    changeBGColor(e) {
      var body = window.document.body;
      var bg = window.getComputedStyle(e.target).background;
      body.style.background = bg;
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "../Sass_main/main__page-style.sass"
</style>
