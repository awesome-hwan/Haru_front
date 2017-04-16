<template>
  <section class="write">
    <figure class="write__image">
      <!-- 그림 삽입태그 -->
    <div class="write__image-insert-box">
      <div class="write__image-insert" v-if="!image">
        <h2>이미지를 선택하시오</h2>
        <input type="file" value="upload" @change="onFileChange" class="fileButton">
      </div>
      <div class="write__image-inserted" v-else>
        <img :src="image" />
        <button @click="removeImage">Remove image</button>
      </div>
    </div>
  <!-- 그림 삽입태그 -->
      <img src="http://placehold.it/640x640" alt="컨텐츠 이미지" title="컨텐츠 이미지">

    </figure>
    <form class="write__form">
      <input v-model="user_input.h1" class="write__input--title" type="text" placeholder="제목" >
      <div class="write__emotions--box">
        <input v-model="user_input.emotion.happy" class="emotion__happy" type="checkbox" value="1">
        <img src="../../images/emotions/happy.svg" alt="기쁨" width="30" height="30">
      </label>
      <label>
        <input v-model="user_input.emotion.sad" class="emotion__sad" type="checkbox" value="2">
        <img src="../../images/emotions/sad.svg" alt="슬픔" width="30" height="30">
      </label>
      <label>
        <input v-model="user_input.emotion.normal" class="emotion__normal" type="checkbox" value="3">
        <img src="../../images/emotions/normal.svg" alt="보통" width="30" height="30">
      </label>
      <label>
        <input v-model="user_input.emotion.irritation" class="emotion__irritation" type="checkbox" value="4">
        <img src="../../images/emotions/irritation.svg" alt="짜증" width="30" height="30">
      </label>
      <label>
        <input  v-model="user_input.emotion.angry" class="emotion__angry" type="checkbox" value="5">
        <img src="../../images/emotions/angry.svg" alt="분노" width="30" height="30">
      </label>
      </div>
      <textarea v-model="user_input.text" class="write__textarea--text" placeholder="글자"></textarea>
      <p class="write__date"><time class="write__date--time">2014.04.05</time></p>
      <div class="write__button--box">
        <button class="write__button--write" type="button" @click="UploadData">작성</button>
        <button class="write__button--reset" type="button" @click="getPhoto">이미지 가져오기</button>
        <router-link to="/home" class="write__button--cancel" type="button" tag="button">취소</router-link>
        <!-- <router-link to="/home" class="write__button--write" type="button" tag="button" @change="UploadData">작성</router-link> -->
        <!-- <button class="write__button--reset" type="reset">리셋</button> -->
        <button class="write__button--cancel" type="button">취소</button>
      </div>
    </form>
  <img class="haru_test pa" src="" alt="" id="myimage">
  </section>

</template>
<script>


export default {
  // 작성하기 버튼 눌렀을때 화면 전환전에 데이터 서버에 업로드
  // beforeDestroy() {
  //   this.$http.post('https://vue-http-81e7b.firebaseio.com/UserHarulist.json', this.user_input)
  //             .then(function(response) {
  //               console.log(response);
  //             })
  //             .catch(function(error) {
  //               console.error(error.message)
  //             });

            // var files = e.target.files[0];
            // var storage = firebase.storage();
            // var pathReference = storage.ref('images/' + files.name)
            // var storageRef = firebase.storage().ref('images/' + files.name);

            // var gsReference = storage.refFromURL('gs://vue-http-81e7b.appspot.com/images' + )



  // },
  data() {
    return {
      user_image: '',
      image: '',
      resource: { },
      imagefile: '',
      user_input: {
        h1: '',
        img: '',
        text: '',
        emotion: {
          happy : '',
          sad : '',
          normal : '',
          irritation: '',
          angry: '',
        },
        storageRef: '',
        haruUrl: '',
        imgUrl:'',
      }
    }
  },
  // created() {
  //   this.resource = this.$resource('vue-http-81e7b.appspot.com');
  // },
  methods: {
    UploadData() {
      var file= this.imgUrl;
      console.log(file);
      var storageRef =  firebase.storage().ref('images/'+file.name);

      storageRef.put(file)
                .then(

      this.$http.post('https://vue-http-81e7b.firebaseio.com/UserHarulist.json', this.user_input)
                .then(function(response) {
                  console.log(response);
                })
                .catch(function(error) {
                  console.error(error.message)
                })
        ),

        this.storageRef = storageRef;

        this.$router.push({path: '/'});
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      this.imgUrl=e.target.files[0];



   },
   createImage(file) {
     var image = new Image();
     var reader = new FileReader();
     var vm = this;
     //막쓴거
    //  this.$on('e')

     reader.onload = (e) => {
       vm.image = e.target.result;
     };
     reader.readAsDataURL(file);
   },
   removeImage: function (e) {
     this.image = '';
   },

   getPhoto(){
   var storageRef = this.storageRef;
   storageRef.getDownloadURL().then(function(url) {
     // `url` is the download URL for 'images/stars.jpg'

     // This can be downloaded directly:
     var xhr = new XMLHttpRequest();
     xhr.responseType = 'blob';
     xhr.onload = function(event) {
       var blob = xhr.response;
     };
     xhr.open('GET', url);
     xhr.send();
     console.log('url: ', url)

     this.haruUrl = url;

     var img = document.querySelector('myimage');
     console.log('이미지 이미지', img);
     img.setAttribute('src',url);

   }).catch(function(error) {

       })
     }
     }
  }


</script>
<style lang="sass" scoped>
  @import "../../Sass_detail/page.sass"
</style>
