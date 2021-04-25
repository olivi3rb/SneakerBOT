import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
import Tasks from "./components/Tasks.vue";
import Billing from "./components/Billing.vue";
import AddCard from "./components/AddCard.vue";
Vue.use(VueRouter);

const myRoutes: Array<RouteConfig> = [
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "Signup",
    path: "/signup",
    component: Signup,
  },
  {
    name: "Tasks",
    path: "/tasks",
    component: Tasks,
  },

  {
    name: "Billing",
    path: "/billing",
    component: Billing,
  },

  {
    name: "AddCard",
    path: "/addCard",
    component: AddCard,
  },
];

export const AppRouter = new VueRouter({
  routes: myRoutes,
  mode: "history",
});  