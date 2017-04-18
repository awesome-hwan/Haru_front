<template>

    <div class="wrapper">
      <div class="write__box">
        <div class="write__contentsBox">
          <!---######################### 이미지 영역 ###################-->
          <div  class="write__imageBox">
            <div v-if="!image" class="imageInputbox">
              <input type="file" @change="onFileChange" class="pa haruphoto" id="haruphoto"  accept="image/*"/>
              <img src="../../images/writepage/buttons/imageIcon.svg" alt="컨텐츠 이미지" title="컨텐츠 이미지" class="imageIcon">
            </div>

            <div v-else class="prevImgBox">
              <img :src="image"  class="prevImg" >
              <button @click="removeImage" class="pa img-upload-cancel-btn">Remove image</button>
            </div>
        </div>
          <!---######################### 텍스트 +감정영역 ###################-->
          <div class="write__textBox">

            <input class="write__haru-title" type="text" name="title" placeholder="제목" v-model="haru_diary.diary_heading">
            <div name="emotions" class="write__emotions">
              <input value="기쁨" title="기쁨" type="radio" name="emotions" v-model="haru_diary.diary_emotions" class="write__emotions-happy"><img src="../../images/emotions/happy.svg" alt="기쁨" width="25" height="25">
              <input value="슬픔" title="슬픔" type="radio" name="emotions" v-model="haru_diary.diary_emotions" class="write__emotions-sad"><img src="../../images/emotions/sad.svg" alt="슬픔" width="25" height="25">
              <input value="보통" title="보통" type="radio" name="emotions" v-model="haru_diary.diary_emotions" class="write__emotions-normal"><img src="../../images/emotions/normal.svg" alt="보통" width="25" height="25">
              <input value="짜증" title="짜증" type="radio" name="emotions" v-model="haru_diary.diary_emotions" class="write__emotions-rage"><img src="../../images/emotions/irritation.svg" alt="짜증" width="25" height="25">
              <input value="분노" title="분노" type="radio" name="emotions" v-model="haru_diary.diary_emotions" class="write__emotions-angry"><img src="../../images/emotions/angry.svg" alt="분노" width="25" height="25">
            </div>
            <textarea class="write__haru-text"  v-model="haru_diary.diary_text" placeholder="오늘 하루는 어땠어?"></textarea>

          </div>




          <button type="button" name="button" class="wirte__button" @click="postHaru">작성</button>
        </div>
      </div>
      <button class="modal-close" @click="gotoMain"></button>
    </div>

</template>
<script>
// import {eventBus} from '../../EventBus';
export default {
  // mounted: function mounted() {
  //   //일단 날짜 표시
  //   var now_time = document.querySelector('.nowtime');
  //   var now = new Date();
  //   var years = now.getFullYear();
  //   var month = now.getMonth()+1;
  //   if(month<10){
  //     month='0'+month;
  //   }
  //   var day = now.getDate();
  //   var hours = now.getHours();
  //
  //   now_time.innerHTML=`${years}-${month}-${day}`
  //   //시간 데이터를 보낼 일이 생기면 새벽 5시는 전날로 처리해서 보내기
  // },
  data: function data() {
    return {
        image: '',
        imgUrl:'',
        storageRef:'',
        haru_diary:{
          diary_heading:'',
          diary_text:'',
          diary_emotions:''
        },
        haruUrl:''
      }
  },
  methods: {
    gotoMain(){
      this.$router.push('/home')
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      this.imgUrl = e.target.files[0];
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
    postHaru(){
       var file= this.imgUrl;
       console.log(file);
       var storageRef =  firebase.storage().ref('haruphoto/'+file.name);
       storageRef.put(file)
                 .then(
        // this.$router.push('/mainpage')
        this.$http.post('https://vue-http-81e7b.firebaseio.com/UserHarulist.json',this.haru_diary)
                  .then(response => console.log(response))

                  .catch(error => console.error(error.message))
        )
        // .then(
        //   this.$router.push('/mainpage')
        // )
        //
        // Create a reference with an initial file path and name

        this.storageRef = storageRef;

        this.$router.push({path: '/'});
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

      this.haruUrl=url;
      // url을 받아 온 다음에 메인 페이지로 이 값을 넘겨줘야 한다.
      // 데이터의 흐름을 쉽게 하기 위해서 vuex랑 eventBus를 쓴다

      // eventBus.$emit('message',url);


      // var img = document.getElementById('myimage');
      // console.log('이미지 이미지', img);
      // img.setAttribute('src',url);


    }).catch(function(error) {

    })
  }
  }
}
</script>
<style lang="sass" scoped>
@import "../../Sass_detail/writePage.sass"
</style>
