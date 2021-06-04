import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Home from "@/views/Home";
import Index from "@/views/Index"
import Test from "@/views/Test";


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      // {
      //   path: ':name',
      //   name: 'Index',
      //   component: Index
      // },
      {
        path: '',
        name: 'Index',
        component: Index
      },
      {
        path: 'article/add',
        name: 'AddArticle',
        component: ()=>import("@/views/Article/AddArticle")
      },
      {
        path: 'article/edit/:id',
        name: 'EditArticle',
        component: ()=>import("@/views/Article/EditArticle")
      },
      {
        path: 'manage/article',
        name: 'Test',
        component: ()=>import("@/views/Article/ArticleList")
      },
      {
        path: 'manage/tags',
        name: 'Test',
        component: Test
      },
      {
        path: 'manage/categories',
        name: 'Test',
        component: ()=>import("@/views/Article/Category")
      },
      {
        path: 'manage/comment',
        name: 'Test',
        component: ()=>import("@/views/Message/CommentList")
      },
      {
        path: 'manage/message',
        name: 'Test',
        component: Test
      },
      {
        path: 'user/list',
        name: 'Test',
        component: Test
      },
      {
        path: 'user/role',
        name: 'Test',
        component: Test
      },
      {
        path: 'user/online',
        name: 'Test',
        component: Test
      },
      {
        path: 'manage/menu',
        name: 'Test',
        component: Test
      },
      {
        path: 'manage/resource',
        name: 'Test',
        component: Test
      },
      {
        path: 'manage/link',
        name: 'Test',
        component: Test
      },
      {
        path: 'about',
        name: 'Test',
        component: Test
      },
      {
        path: 'manage/log',
        name: 'Test',
        component: Test
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
