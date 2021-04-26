<template>
  <div class="container">
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
    >
      <div class="container">
        <a class="navbar-brand float-left" href="/tasks">
          SNK-Y-BOT
        </a>

        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/tasks">Tasks</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/billing"
              >Billing</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/leaderboard"
              >Leaderboard</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="table-wrapper">
      <div class="table-title">
        <div class="row">
          <div class="col-sm-8"><h2>Leaderboard</h2></div>
        </div>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>User</th>
            <th>Site</th>
            <th>Product</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in checkouts" :key="c.id">
            <td>{{ c.profile.profile }}</td>
            <td>{{ c.site }}</td>
            <td>{{ c.item }}</td>
            <td>{{ c.size }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FirebaseFirestore } from "@firebase/firestore-types";

@Component
export default class Leaderboard extends Vue {
  readonly $appDB!: FirebaseFirestore;

  private uid = "none";
  private cardInfo: any[] = [];

  private billingProfiles: any[] = [];
  private checkouts: any[] = [];
  private userAgent = require("user-agents");
  private puppeteer = require("puppeteer-extra");
  private StealthPlugin = require("puppeteer-extra-plugin-stealth");
  
  mounted() {
    this.$appDB.collection(`/checkout`).onSnapshot((qs) => {
      this.checkouts.splice(0);
      qs.forEach((qds) => {
        if (qds.exists) {
          const taskinfo = qds.data();
          this.checkouts.push({
            tid: taskinfo.tid,
            site: taskinfo.site,
            profile: taskinfo.profile,
            size: taskinfo.size,
            item: taskinfo.item,
            atc: taskinfo.atc,
            status: taskinfo.status,
          });
        }
      });
    });
    console.log("tasks: ", this.checkouts);
  }
}
</script>

<style>
.table-wrapper {
  margin: auto;
  margin-top: 10%;
  margin-left: 18%;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}
.table-title {
  padding-bottom: 10px;
  margin: 0 0 10px;
}
.table-title h2 {
  margin: 6px 0 0;
  font-size: 22px;
}
.table-title .add-new {
  float: right;
  height: 30px;
  font-weight: bold;
  font-size: 12px;
  text-shadow: none;
  min-width: 100px;
  border-radius: 50px;
  line-height: 13px;
  background-color: #6441a5;
}
.table-title .add-new i {
  margin-right: 4px;
}
table.table {
  table-layout: fixed;
}
table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table th:last-child {
  width: 100px;
}
table.table td a {
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
  min-width: 24px;
}
table.table td a.add {
  color: #27c46b;
}
table.table td a.edit {
  color: #ffc107;
}
table.table td a.delete {
  color: #e34724;
}
table.table td i {
  font-size: 19px;
}
table.table td a.add i {
  font-size: 24px;
  margin-right: -1px;
  position: relative;
  top: 3px;
}
table.table .form-control {
  height: 32px;
  line-height: 32px;
  box-shadow: none;
  border-radius: 2px;
}
table.table .form-control.error {
  border-color: #f50000;
}
table.table td .add {
  display: none;
}
</style>
