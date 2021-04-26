<template>
  <div class="vue-login">
    <div class="inner-block">
      <div class="vertical-center">
        <form>
          <h3>Welcome to SNK-Y-BOT</h3>

          <div class="form-group">
            <input
              type="email"
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

          <router-link to="/tasks"
            ><button
              class="btn btn-dark btn-lg btn-block"
              @click="authenticate"
            >
              Sign In
            </button></router-link
          >

          <p class="create-account text-center">
            Or
            <router-link to="/signup" replace>Sign up</router-link>
            to create an account
          </p>

          <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/forgot-password">Forgot password ?</router-link>
          </p>
          <div>{{ message }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FirebaseAuth } from "@firebase/auth-types";
import { UserCredential } from "@firebase/auth-types";

@Component
export default class Login extends Vue {
  readonly $appAuth!: FirebaseAuth;
  private message = "";
  private userEmail = "";
  private userPassword = "";

  get noInput(): boolean {
    return this.userEmail.length === 0 || this.userPassword.length === 0;
  }

  authenticate(): void {
    console.log("olivier");
    this.$appAuth
      .signInWithEmailAndPassword(this.userEmail, this.userPassword)
      .then((u: UserCredential) => {
        this.showMessage(`Login successful UID ${u.user?.uid}`);
        this.$router.push({ path: "/billing" });
      })
      .catch((err: any) => {
        this.showMessage(`Unable to login ${err}`);
      });
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  box-sizing: border-box;
}

body {
  background: #6441a5 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

.vue-login,
.vertical-center {
  width: 100%;
  height: 100%;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.vue-login .inner-block {
  margin-top: 50%;
  margin-left: 125%;

  width: 100%;

  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
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

.create-account {
  color: black;
}

.already-registered {
  color: black;
}

.vue-login a {
  color: #6441a5;
}

router-link {
  color: #6441a5;
}
</style>
