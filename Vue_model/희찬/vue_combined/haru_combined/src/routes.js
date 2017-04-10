

//Load components
import login       from   './components/loginSignup/login.vue';
import signup      from   './components/loginSignup/signup.vue';
import mainpage    from   './components/mainPage/mainpage.vue';
import detailpage  from   './components/detailPage/detailpage.vue';
import loginSignup from   './components/loginSignup/loginSignup.vue';
import loginbox    from   './components/loginSignup/loginbox.vue';
import signupbox   from   './components/loginSignup/signupbox.vue';
import writePage   from   './components/detailPage/writePage.vue';



export const routes = [
  {path: '/', component: login},
  {path: '/login', component : login},
  {path: '/signup', component : signup},
  {path: '/mainpage', component : mainpage},
  {path: '/detailpage', component : detailpage},
  {path: '/writePage', component : writePage},
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
