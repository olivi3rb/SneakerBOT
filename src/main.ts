import Vue from 'vue'
import App from './App.vue'

import { AppRouter } from "./app-routing";
import firebase from "firebase/app";
import "firebase/firestore";
// import "@/assets/main.css";
import "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyCEC-myBj8w1jJOztnM6MlrhfrSe_lmHJc",
  authDomain: "snk-y-db.firebaseapp.com",
  projectId: "snk-y-db",
  storageBucket: "snk-y-db.appspot.com",
  messagingSenderId: "456032801986",
  appId: "1:456032801986:web:0e86141a58b4e96a52d75b",
  measurementId: "G-RL9R97BVG6",
}


firebase.initializeApp(firebaseConfig);
Vue.prototype.$appAuth = firebase.auth();
Vue.config.productionTip = false;
Vue.prototype.$appDB = firebase.firestore();


new Vue({
  router: AppRouter,
  render: (h) => h(App),
}).$mount("#app");
