import Vue from 'vue'
import App from './App.vue'

import { AppRouter } from "./app-routing";
import firebase from "firebase/app";
import "firebase/firestore";
// import "@/assets/main.css";
import "firebase/auth";


// import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyAeChlh5p9OkZLlsVp7WXdfSmilX0Y33QU",
  authDomain: "final-a5558.firebaseapp.com",
  projectId: "final-a5558",
  storageBucket: "final-a5558.appspot.com",
  messagingSenderId: "1005433594521",
  appId: "1:1005433594521:web:f1090ad3346812ef85ce08",
  measurementId: "G-B6YW0CM8CV",
};

firebase.initializeApp(firebaseConfig);
Vue.prototype.$appAuth = firebase.auth();
Vue.config.productionTip = false;
Vue.prototype.$appDB = firebase.firestore();


new Vue({
  router: AppRouter,
  render: (h) => h(App),
}).$mount("#app");
