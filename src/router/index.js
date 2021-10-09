import VueRouter from "vue-router";

import Test from "pages/Test";

const router = new VueRouter({
  mode: history,
  routers: [
    {
      path: "/test",
      component: Test
    }
  ]
});
export default router;
