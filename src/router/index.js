import VueRouter from "vue-router";

// 引入的組件
import Test from "pages/Test";


const router = new VueRouter({
  mode: "history",
  routers: [
    {
      path: "/test",
      component: Test
    }
  ]
});
export default router;
