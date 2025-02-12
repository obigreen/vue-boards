import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BoardView from "../views/BoardView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/board/:id",
    name: "board",
    component: BoardView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
