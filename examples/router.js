/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

const docs = ["button", "icon"];

const routes = docs.map(doc => {
  return {
    path: `/${doc}`,
    name: `${doc}`,
    component: () => import(`./docs/${doc}.md`)
  }
})

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});