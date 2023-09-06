import { Router, createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { APP_TITLE } from "@/composables/useLayout";
const router: Router = createRouter({
  routes,
  history: createWebHistory(),
})



router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${APP_TITLE.value} | ${to.meta.title}`;
    APP_TITLE.value = to.meta.title as string;
  }
  next();
});


export default router;  