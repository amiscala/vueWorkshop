import Vue from "vue";
import Router from "vue-router";
import Menu from "@/components/Menu";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      meta: {
        chuchu: "Chuchu"
      },
      components: {
        menu: Menu,
        content: () => import( /* webpackChunkName: "home" */ "./views/Home.vue")
      },
      beforeEnter(to, from, next) {
        if (from.path === "/about") {
          alert("Ola");
        }
        next();
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