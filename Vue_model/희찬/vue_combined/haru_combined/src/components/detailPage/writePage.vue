<template>
  <div>
    <div class="wrapper">
      <section class="card__info">
        <figure class="card__info--image pr" >

            <div v-if="!image">
              <input type="file" @change="onFileChange" class="pa haruphoto" id="haruphoto"  accept="image/*"/>
              <img src="http://placehold.it/640x640" alt="컨텐츠 이미지" title="컨텐츠 이미지">
            </div>
            <div v-else>
              <img :src="image"  class="prevImg">
              <button @click="removeImage" class="pa img-upload-cancel-btn">Remove image</button>
            </div>
            <img class="haru_test pa" src="" alt="" id="myimage">

        </figure>
        <article class="card__info--contents">
          <input class="card__info--title" type="text" name="title" placeholder="제목" v-model="haru_diary.diary_heading">
          <div name="emotions" class="card__info--emotions">
            <input value="기쁨" title="기쁨" type="radio" name="emotions" v-model="haru_diary.diary_emotions"><img src="../../images/emotions/happy.svg" alt="기쁨" width="30" height="30">
            <input value="슬픔" title="슬픔" type="radio" name="emotions" v-model="haru_diary.diary_emotions"><img src="../../images/emotions/sad.svg" alt="슬픔" width="30" height="30">
            <input value="보통" title="보통" type="radio" name="emotions" v-model="haru_diary.diary_emotions"><img src="../../images/emotions/normal.svg" alt="보통" width="30" height="30">
            <input value="짜증" title="짜증" type="radio" name="emotions" v-model="haru_diary.diary_emotions"><img src="../../images/emotions/irritation.svg" alt="짜증" width="30" height="30">
            <input value="분노" title="분노" type="radio" name="emotions" v-model="haru_diary.diary_emotions"><img src="../../images/emotions/angry.svg" alt="분노" width="30" height="30">
          </div>
          <textarea class="card__info--text" rows="10" v-model="haru_diary.diary_text"></textarea>
          <div class="card__info--buttons">
            <p class="card__info--date"><time class="nowtime"></time></p>
            <button type="button" name="button" class="card__info--modify-button" @click="getPhoto">이미지 가져오기</button>
            <button type="button" name="button" class="card__info--modify-button" @click="postHaru">작성</button>
          </div>
        </article>
      </section>
  </div>
  <button class="modal-close" @click="gotoMain">X</button>
</div>
</template>
<script>
export default {
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
    //시간 데이터를 보낼 일이 생기면 새벽 5시는 전날로 처리해서 보내기
  },
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
      this.$router.push('/mainpage')
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
        this.$http.post('https://haruphoto-6ad66.firebaseio.com/haruDiary.json',this.haru_diary)
                  .then(response => console.log(response))
                  .catch(error => console.error(error.message))
        )
        // .then(
        //   this.$router.push('/mainpage')
        // )
        //
        // Create a reference with an initial file path and name

        this.storageRef = storageRef;


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

      EventBus.$emit('message',url);


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
@import "../../style/detailPage/sass/writePage.sass"
</style>
