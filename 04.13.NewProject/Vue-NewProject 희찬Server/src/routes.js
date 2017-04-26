// import UserLogin from './components/User/UserLogin.vue';
import Home from './components/Home.vue';
import Login from './components/UserLogin.vue';
import SignUp from './components/UserSignUp.vue';
import userDetail from './components/User/UserDetail.vue';
import Edit from './components/User/UserEdit.vue';

export const routes = [
  { path: '/login', component: Login},
  { path: '/signup', component: SignUp},
  { path: '/home', component:Home },
  { path: '/Detail' , component: userDetail},
  { path: '/Edit' ,component: Edit },
  {
    // * === wild card
   path: '*', redirect: '/home'
  }
];
