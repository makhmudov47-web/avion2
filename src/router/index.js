import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TablesView from "@/views/TablesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tables",
    name: "tables",
    component: TablesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
