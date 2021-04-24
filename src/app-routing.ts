import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
import Tasks from "./components/Tasks.vue";
import Billing from "./components/Billing.vue";

Vue.use(VueRouter);

const myRoutes: Array<RouteConfig> = [
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "signup",
    path: "/signup",
    component: Signup,
  },
  {
    name: "tasks",
    path: "/tasks",
    component: Tasks,
  },

  {
    name: "billing",
    path: "/billing",
    component: Billing,
  },
];

export const AppRouter = new VueRouter({
  routes: myRoutes,
  mode: "history",
});  