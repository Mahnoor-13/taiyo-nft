import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LeaderBoard from "../views/LeaderBoard.vue"


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/leaderBoard",
    name: "leaderBoard",
    component: LeaderBoard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
