import { createRouter, createWebHistory } from "vue-router/auto";

const router = createRouter({
  history: createWebHistory(),
  // You don't need to pass the routes anymore,
  // the plugin writes it for you 🤖
});

router.beforeEach(function (to, from, next) {
  next();
});

export default router;
