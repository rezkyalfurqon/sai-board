import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/pages/HomePage.vue";
import EdomPage from "@/pages/EdomPage.vue";
import LoginPage from "@/pages/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: { layout: "PublicLayout" },
    component: LoginPage,
  },
  {
    path: "/home",
    name: "HomePage",
    meta: { layout: "PrivateLayout" },
    component: Dashboard,
  },

  {
    path: "/edom",
    name: "edom",
    meta: { layout: "PrivateLayout" },
    component: EdomPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
