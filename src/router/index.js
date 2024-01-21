import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import QuizView from '../views/QuizView.vue'
import NotFound from '../views/404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizView
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not found",
      component: NotFound
    }
  ]
});

export default router;