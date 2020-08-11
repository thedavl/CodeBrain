import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue'
import CreateProblem from "../views/CreateProblem.vue"
import { isLoggedIn } from '../utils/auth.js';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/create",
    name: "Create",
    component: CreateProblem
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name == 'login' && isLoggedIn()) {
    next({ path: '/' })
  } else if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  else {
    next()
  }  
})

export default router;
