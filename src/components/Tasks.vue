<template>
  <div class="container-lg">
    <div class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-8"><h2>Tasks</h2></div>
            <div class="col-sm-4">
              <button type="button" class="btn btn-info add-new">Delete All</button> 
              <button type="button" class="btn btn-info add-new">Start All</button>
              <router-link to="/taskView"><button type="button" class="btn btn-info add-new" 
                ><i class="fa fa-plus"></i> Add New
              </button></router-link>
            </div>
          </div>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr >
              <th>TID</th>
              <th>Site</th>
              <th>Product</th>
              <th>Size</th>
              <th>Profile</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="(c,pos) in taskInfo" :key="pos">
              <td>{{c.cardName}}</td>
              <td>Kith</td>
              <td>Jordan 1</td>
              <td>10.5</td>
              <td>{{c.address}}</td>
              <td>{{c.email}}</td>
              <td>
                <a class="edit" title="Edit" data-toggle="tooltip"
                  ><i class="material-icons">&#xE254;</i></a
                >
                <a class="delete" title="Delete" data-toggle="tooltip"
                  ><i class="material-icons">&#xE872;</i></a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FirebaseFirestore } from "@firebase/firestore-types";

@Component
export default class Billing extends Vue {
  readonly $appDB!: FirebaseFirestore;
  private uid = "none";
  private billingProfiles: any[] = [];

  mounted() {
    this.$appDB.collection(`users/${this.uid}/billing`).onSnapshot((qs) => {
      this.billingProfiles.splice(0);
      qs.forEach((qds) => {
        if (qds.exists) {
          const billingInfo = qds.data();
          this.billingProfiles.push({
            name: billingInfo.name,
            email: billingInfo.email,
            address: billingInfo.address,
            // city: this.city,
            // state: this.state,
            // zip: this.zip,
            cardName: billingInfo.cardName,
            // cardNumber: this.cardNumber,
            // expMonth: this.expMonth,
            // expYear: this.expYear,
            // cvv: this.cvv,
          });
        }
      });
    });
    console.log("logs: ", this.billingProfiles);
  }
}
</script>

<style>
.table-wrapper {
  margin: auto;
margin-top: 10%;

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
