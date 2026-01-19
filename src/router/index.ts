import HomePage from "@/pages/Home-page.vue";
import TodoList from "@/pages/Todo-List.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage },
    { path: "/todo", component: TodoList },
  ],
});

export default router;
