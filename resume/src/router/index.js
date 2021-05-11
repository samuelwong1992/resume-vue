import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Work from "../views/Work.vue";
import Project from "../views/Project.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/project/:id",
    name: "Project",
    component: Project,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
