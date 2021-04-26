<template>
  <div class="vue-main">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="#">
           SNK-Y-BOT
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/signup">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">

          <router-view />
        </div>
      </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from './components/Login.vue';
import Signup from "./components/Signup.vue";
import Tasks from "./components/Tasks.vue";
import AddCard from "./components/AddCard.vue";
import Billing from "./components/Billing.vue";
import {FirebaseFirestore} from "@firebase/firestore-types"


@Component({
  components: {
    Login, Signup, Tasks, AddCard, Billing
  },
})
export default class App extends Vue {
  readonly $appDB!: FirebaseFirestore;

  mounted(): void {
    
    console.log("API Key", this.$appDB.app.options_.apiKey);
  }
}
</script>

<style>
.vue-main a{
    color:#6441a5 ;
}

router-link{
    color:#6441a5;
}
</style>
