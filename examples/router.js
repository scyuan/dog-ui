/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
    path: "/test",
    name: "test",
    component: () => import("./docs/test.md")
  }, {
    path: "/button",
    name: "button",
    component: () => import("./docs/button.md")
  }]
});