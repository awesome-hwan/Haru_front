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
        <img v-model="user_image" :src="image" />
        <button @click="removeImage">Remove image</button>
      </div>
    </div>
  <!-- 그림 삽입태그 -->
      <img src="http://placehold.it/640x640" alt="컨텐츠 이미지" title="컨텐츠 이미지">

    </figure>
    <form class="write__form">
      <input v-model="user_input.h1" class="write__input--title" type="text" placeholder="제목" >
      <div class="write__emotions--box">
        <input v-model="user_input.emotion" class="emotion__happy" type="radio" value="">
        <input v-model="user_input.emotion" class="emotion__sad" type="radio" value="">
        <input v-model="user_input.emotion" class="emotion__normal" type="radio" value="">
        <input v-model="user_input.emotion" class="emotion__irritation" type="radio" value="">
        <input v-model="user_input.emotion" class="emotion__angry" type="radio" value="">
      </div>
      <textarea v-model="user_input.text" class="write__textarea--text" placeholder="글자"></textarea>
      <p class="write__date"><time class="write__date--time">2014.04.05</time></p>
      <div class="write__button--box">
        <!-- <button class="write__button--write" type="button" @click="submit">작성</button> -->
        <router-link to="/home" class="write__button--write" type="button" tag="button">작성</router-link>
        <button class="write__button--reset" type="reset">리셋</button>
        <button class="write__button--cancel" type="button">취소</button>
      </div>
    </form>

  </section>

</template>
<script>
// var config = {
//   apiKey: "<API_KEY>",
//   authDomain: "<PROJECT_ID>.firebaseapp.com",
//   databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
//   storageBucket: "<BUCKET>.appspot.com",
// };
// firebase.initializeApp(config);
// var firebase = require("firebase");

export default {
  // 작성하기 버튼 눌렀을때 화면 전환전에 데이터 서버에 업로드
  beforeDestroy() {
    this.$http.post('https://vue-http-81e7b.firebaseio.com/UserHarulist.json', this.user_input)
              .then(function(response) {
                console.log(response);
              })
              .catch(function(error) {
                console.error(error.message)
              });

            // var files = e.target.files[0];
            // var storage = firebase.storage();
            // var pathReference = storage.ref('images/' + files.name)
            // var storageRef = firebase.storage().ref('images/' + files.name);

            // var gsReference = storage.refFromURL('gs://vue-http-81e7b.appspot.com/images' + )



  },
  data() {
    return {
      user_image: '',
      image: '',
      resource: { },
      imagefile: '',
      user_input: {
        h1: '',
        emotion: '',
        text: ''
      },
      datalist: []
    }
  },
  // created() {
  //   this.resource = this.$resource('vue-http-81e7b.appspot.com');
  // },
  methods: {


    onFileChange(e) {

    //  var files = e.target.files || e.dataTransfer.files;
    //  if (!files.length)
    //    return;
    //   this.imagefile = files[0];
    //    console.log(files[0]);
    //  this.createImage(files[0]);
    //   //create a storage ref
    //   var storageRef = firebase.storage().ref('images/' + files.name);
    //   //Upload file
    //   storageRef.put(files);
      var files = e.target.files[0];

      var storageRef = firebase.storage().ref('images/' + files.name);

      storageRef.put(files);

      this.createImage(files);
   },
   createImage(file) {
     var image = new Image();
     var reader = new FileReader();
     var vm = this;

     reader.onload = (e) => {
       vm.image = e.target.result;
     };
     reader.readAsDataURL(file);
   },
   removeImage: function (e) {
     this.image = '';
   },
   submit() {
      this.$http.post('https://vue-http-81e7b.firebaseio.com/UserHarulist.json', this.user_input)
                .then(function(response) {
                  console.log(response);
                })
                .catch(function(error) {
                  console.error(error.message)
                });
   },
   fetch() {
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

     }
    }
  }


</script>
<style lang="sass" scoped>
  @import "../../Sass_detail/page.sass"
</style>
