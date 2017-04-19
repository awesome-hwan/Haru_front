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
              <input value="1" title="기쁨" type="radio" name="emotions" v-model="haru_diary.diary_emotions" class="write__emotions-happy"><img src="../../images/emotions/happy.svg" alt="기쁨" width="25" height="25">
              <input value="2" title="그럭저럭" type="radio" name="emotions" v-model="haru_diary.diary_emotions" class="write__emotions-normal"><img src="../../images/emotions/normal.svg" alt="보통" width="25" height="25">
              <input value="3" title="슬픔" type="radio" name="emotions" v-model="haru_diary.diary_emotions" class="write__emotions-sad"><img src="../../images/emotions/sad.svg" alt="슬픔" width="25" height="25">
              <input value="4" title="짜증" type="radio" name="emotions" v-model="haru_diary.diary_emotions" class="write__emotions-rage"><img src="../../images/emotions/irritation.svg" alt="짜증" width="25" height="25">
              <input value="5" title="분노" type="radio" name="emotions" v-model="haru_diary.diary_emotions" class="write__emotions-angry"><img src="../../images/emotions/angry.svg" alt="분노" width="25" height="25">
            </div>
            <textarea class="write__haru-text"  v-model="haru_diary.diary_text" placeholder="오늘 하루는 어땠어?"></textarea>

          </div>




          <button type="button" name="button" class="wirte__button" @click="postHaru">작성</button>
          <span class="nowtime"></span>
        </div>
      </div>
      <button class="modal-close" @click="gotoMain"></button>
    </div>

</template>
<script>
// import {eventBus} from '../../EventBus';
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
    //시간 데이터를 보낼 일이 생기면 새벽 5시는 전날로 처리해서 보내기 주석 테스트
  },
  data: function data() {
    return {
        image: '',

        storageRef:'',
        haru_diary:{
          diary_heading:'',
          diary_text:'',
          diary_emotions:'',
          image_link:'',
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
      this.haru_diary.image_link = e.target.files[0];
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
       var file= this.haru_diary.image_link;
       this.haru_diary.image_link = JSON.stringify(this.haru_diary.image_link);
       console.log(file);
       var storageRef =  firebase.storage().ref('haruphoto/'+file.name);
      storageRef.put(file)
                .then(
      axios.post('https://haruphoto-6ad66.firebaseio.com/haruDiary.json',this.haru_diary)
                  .then(response => console.log(response))
                  .catch(error => console.error(error.message)))
    }
  }
}
</script>
<style lang="sass" scoped>
@import "../../Sass_detail/writePage.sass"
</style>
