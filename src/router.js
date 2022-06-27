import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  }
];



const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/survey-frontend/',
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;