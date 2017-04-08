

//Load components
import login from './components/loginSignup/login.vue';
import signup from './components/loginSignup/signup.vue';
import mainpage from './components/mainPage/mainpage.vue'
import detailpage from './components/detailPage/detailpage.vue'


export const routes = [
  {path: '/', component: login},
  {path: '/login', component: login},
  {path: '/signup', component: signup},
  {path: '/mainpage', component: mainpage},
  {path: '/detailpage', component: detailpage}
];





//Routes Setting


//
// export const routes = [
//   { path:'',component: Home},
//   { path:'/user/', component : User ,children:[
//     {path:'', component: userStart},
//     {path:':id',component: userDetail},
//     {path:':id/edit',component: userEdit},
//   ]},
// ];
