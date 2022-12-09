import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/find",
      name: "find",
      component: () => import("../views/FindMentor.vue"),
    },
    {
      path: "/view",
      name: "view",
      component: () => import("../views/ViewAll.vue"),
    },
    {
      path: "/meet",
      name: "meet",
      component: () => import("../views/MeetMentor.vue"),
    },
  ],
});

export default router;
