import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
import Tasks from "./components/Tasks.vue";
import Billing from "./components/Billing.vue";
import AddCard from "./components/AddCard.vue";
import EditCard from "./components/EditCard.vue";
import TaskView from "./components/TaskView.vue";
import Leaderboard from "./components/Leaderboard.vue";
Vue.use(VueRouter);

const myRoutes: Array<RouteConfig> = [
  {
    name: "",
    path: "",
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

  {
    name: "EditCard",
    path: "/editCard",
    component: EditCard,
  },

  {
    name: "TaskView",
    path: "/taskview",
    component: TaskView,
  },

  {
    name: "Leaderboard",
    path: "/leaderboard",
    component: Leaderboard,
  },
];

export const AppRouter = new VueRouter({
  routes: myRoutes,
  mode: "history",
});  