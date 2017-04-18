(function(global) {
  'use strict';

  var addtext = document.querySelector('.print-callback-data')

  var xhr = new XMLHttpRequest();
  //HTML 파일 요청
  xhr.open("GET", "../data/Detail-page/detail-page.html")

  xhr.onreadystatechange = function() {
    if (this.status === 200) {
      if( this.readyState === 4 ) {
        console.log( "연결 성공" );
        addtext.innerHTML = xhr.responseText;
      } else {
        console.log("연결중...");
        addtext.innerText = "연결중....";
      }

  } else {
      console.error('데이터 로드에 실패했습니다.');
  }
};
  global.sendRequest = function () {
    xhr.send ( null );
  };

})(window);
