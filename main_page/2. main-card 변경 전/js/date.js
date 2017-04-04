var date = new Date();
var body_date = document.querySelector('.main__page-card__body-date');
// var card_body = document.querySelector('.main__page-card');
var para = document.createElement('p')
// console.log(para);

// 년도, 월, 날짜를 순서대로 나타냄
var getYear = date.getFullYear();
var getMonth = (date.getMonth() + 1);
var getDate = date.getDate();

var today = ( getYear + ', '+ getMonth + ', ' + getDate);

body_date.appendChild(para)
para.innerHTML = `${today}`
