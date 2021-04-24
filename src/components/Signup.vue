<template>
  <div class="vue-signup">
    <div class="inner-block">
    <form>
      <h3>Welcome to SNK-Y-BOT</h3>

      <!-- <div class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          placeholder="First Name"
          v-model="firstName"
        />
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          placeholder="Last Name"
          v-model="lastName"
        />
      </div> -->

      <div class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          placeholder="Email address"
          v-model="userEmail"
        />
      </div>

      <div class="form-group">
        <input
          type="password"
          class="form-control form-control-lg"
          placeholder="Password"
          v-model="userPassword"
        />
      </div>

      <button  class="btn btn-dark btn-lg btn-block" @click="createAccount">
        Sign Up
      </button>

      <p class="already-registered text-center">
        Already registered?
        <router-link to="/login" replace>Sign In</router-link>
      </p>
    </form>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FirebaseAuth } from "@firebase/auth-types";
import { UserCredential } from "@firebase/auth-types";

@Component
export default class Signup extends Vue {
  readonly $appAuth!: FirebaseAuth;
  private message = "";
  private userEmail = "";
  private userPassword = "";
  private firstName = "";
  private lastName = "";

  createAccount(): void {
    this.$appAuth
      .createUserWithEmailAndPassword(this.userEmail, this.userPassword)
      .then((u: UserCredential) => {
        this.showMessage(`User create UID ${u.user?.uid}`);
        // In createAccount()
        this.$router.push({ path: "/billing" });
      })
      .catch((err: any) => {
        this.showMessage(`Unable to create account ${err}`);
      });console.log("olivier")
  }

  
  showMessage(m: string): void {
    this.message = m;
    setTimeout(() => {
      // Auto disappear after 5 seconds
      this.message = "";
    }, 5000);
  }
}
</script>

<style  >
* {
  box-sizing: border-box;
}

body {
  background: #6441a5 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}


.vue-signup,
.vertical-center {
  width: 100%;
  height: 100%;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}



 .vue-signup .inner-block {
  margin-top: 50%;
    margin-left: 125%;
  
width: 100%;

  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.vertical-center .form-control:focus {
  border-color: #6441a5;
  box-shadow: none;
}

.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

label {
  font-weight: 500;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: white;
  margin: 0;
}

.forgot-password a {
  color: white;
}

.create-account{
    color: black;
}

.already-registered{
    color: black;
}

.vue-login a{
    color:#6441a5 ;
}

router-link{
    color:#6441a5;
}


</style>