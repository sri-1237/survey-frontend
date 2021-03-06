import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

import EditSurvey from './views/Survey/EditSurvey.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: '/adduser',
      name: 'adduser',
      // lazy-loaded
      component: () => import('./views/Users/addUser.vue')
    },
    {
      path: '/survey',
      name: 'survey',
      // lazy-loaded
      component: () => import('./views/Survey/CreateSurvey.vue')
    },
    {
      path: "/edit/:id",
      name: "editSurvey",
      component: () => import('./views/Survey/EditSurvey.vue'),
      props: true
    },
    {
      path: "/view/:id",
      name: "viewSurvey",
      component: () => import("./views/Survey/ViewSurvey.vue"),
      props: true
  },

  ]
});



// const router = createRouter({
//   base: process.env.NODE_ENV === 'development' ? '/' : '/survey-frontend/',
//   // history: createWebHistory(import.meta.env.BASE_URL),
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });
// export default router;