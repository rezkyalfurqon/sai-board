import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/pages/HomePage.vue";
import EdomPage from "@/pages/EdomPage.vue";
// import LoginPage from "@/pages/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: Dashboard,
  },
  {
    path: "/edom",
    name: "edom",
    component: EdomPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
