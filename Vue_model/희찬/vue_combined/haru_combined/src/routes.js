
//Load components
import home        from  './components/loginSignup/home.vue';
import login       from   './components/loginSignup/login.vue';
import signup      from   './components/loginSignup/signup.vue';

import mainpage    from   './components/mainPage/mainpage.vue';



// import detailpage  from   './components/detailPage/detailpage.vue';

import writePage  from   './components/detailPage/writePage.vue';


export const routes = [
  {path: '/', component: home, children:[
    {path: '/', component: login},
    {path: '/signup', component: signup}
  ]},
  {path:'/signup', component:signup},
  {path: '/mainpage', component : mainpage},
  // {path: '/detailpage', component : detailpage},

  {path: '/writePage', component : writePage}

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
