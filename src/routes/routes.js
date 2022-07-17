import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Reports from "@/pages/Reports.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import UsersList from "@/pages/Users/List.vue";

import SurveyList from "@/pages/Survey/List.vue";
import CreateSurvey from "@/pages/Survey/Create.vue";
import ViewSurvey from "@/pages/Survey/View.vue";
import EditSurvey from "@/pages/Survey/Edit.vue";
import ShareSurvey from "@/pages/Survey/Email.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "reports",
        name: "Reports",
        component: Reports,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
      {
        path: "all-users",
        name: "Users List",
        component: UsersList,
      },
      {
        path: "/surveys",
        name: "SurveyList",
        component: SurveyList,
      },
      {
        path: '/survey/create',
        name: 'createSurvey',
        // lazy-loaded
        component: CreateSurvey
      },
      {
        path: "/survey/edit/:id",
        name: "editSurvey",
        component: EditSurvey,
        props: true
      },
      {
        path: "/survey/:id",
        name: "viewSurvey",
        component: ViewSurvey,
        props: true
    },
    {
      path: "/survey/share",
      name: "shareSurvey",
      component: ShareSurvey,
      props: true
  },
      
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      layout: 'blank',
    },
  },
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default routes;
