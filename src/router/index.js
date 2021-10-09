import VueRouter from "vue-router";

// 引入路由組件
/* import Test from "pages/Test";
import About from "pages/About";
import Home from "pages/Home"; */

// 路由的懒加载
const Test = () => import(/* webpackChunkName: "Test" */ "pages/Test.vue");
const About = () => import(/* webpackChunkName: "About" */ "pages/About.vue");
const Home = () => import(/* webpackChunkName: "Home" */ "pages/Home.vue");
const NotFound = () =>
  import(/* webpackChunkName: "404" */ "pages/notFound/notFound.vue");
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/test/:id",
      component: Test
    },
    {
      path: "/about",
      component: About,
      beforeEnter(to, from, next) {
        console.log("beforeEnter");
        next();
      }
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  next();
});
router.afterEach((to, from) => {
  console.log("afterEach");
})

export default router;
