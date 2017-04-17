

//Load components
import login       from   './components/loginSignup/login2.vue';
import signup      from   './components/loginSignup/signup2.vue';
import mainpage    from   './components/mainPage/mainpage.vue';
import detailpage  from   './components/detailPage/detailpage.vue';
import loginSignup from   './components/loginSignup/loginSignup.vue';
import loginbox    from   './components/loginSignup/loginbox.vue';
import signupbox   from   './components/loginSignup/signupbox.vue';
import writePage   from   './components/detailPage/writePage.vue';
import writePage2   from   './components/detailPage/writePage2.vue';






export const routes = [
  {path: '/', component: login},
  {path: '/login', component : login},
  {path: '/signup', component : signup},
  {path: '/mainpage', component : mainpage},
  {path: '/detailpage', component : detailpage},
  {path: '/writePage', component : writePage},
  {path: '/writePage2', component : writePage2},
  {path: '/loginSignup', component : loginSignup, children:[
    {path:'', component : loginbox},
    {path:'signupbox', component : signupbox}
  ]},

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
