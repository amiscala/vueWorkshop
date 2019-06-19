import Vue from "vue";
import Router from "vue-router";
import Menu from "@/components/Menu";

Vue.use(Router);

const router = new Router({
  routes: [{
      path: "/",
      name: "home",
      meta: {
        chuchu: "Chuchu"
      },
      components: {
        menu: Menu,
        content: () => import( /* webpackChunkName: "home" */ "./views/Home.vue")
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        menu: Menu,
        content: () =>
          import( /* webpackChunkName: "about" */ "./views/About.vue")
      }
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   let chuchuRoutes = router.options.routes
//     .filter(item => item.meta && item.meta.chuchu)
//     .map(route => route.path);

//   if (chuchuRoutes.includes(to.path)) {
//     alert("CHUCHU!!!");
//   }

//   next();
// });

export default router;