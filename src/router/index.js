import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/pages/HomePage.vue";
import EdomPage from "@/pages/EdomPage.vue";
// import Projects from "../views/Projects.vue";
// import Team from "../views/Team.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
