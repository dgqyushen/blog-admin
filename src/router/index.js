import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Home from "@/views/Home";
import Index from "@/views/Index"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: ':name',
        name: 'Index',
        component: Index
      },
      {
        path: '',
        name: 'Index',
        component: Index
      }
    ]
  },
  // {
  //   path: '/home/index',
  //   name: 'Index',
  //   component: Index
  // }
  // {
  //   path: '/home/index',
  //   name: 'Index',
  //   component: ()=>import("@/views/tabs/Index")
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
