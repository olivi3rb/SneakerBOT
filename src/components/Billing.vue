<template>
  <div class="container-lg">
    <div class="container">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-8"><h2>My Cards</h2></div>
            <div class="col-sm-4">
              <router-link to="/addCard"><button type="button" class="btn btn-info add-new" 
                ><i class="fa fa-plus"></i> Add New
              </button></router-link> 
            </div>
          </div>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr >
              <th>Card Name</th>
              <th>Address</th>
              <th>E-mail</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="c in cardInfo" :key="c.id">
              <td>{{c.cardName}}</td>
              <td>{{c.address}}</td>
              <td>{{c.email}}</td>
              <td>
                <button class="btn btn-primary edit" title="Edit" data-toggle="tooltip">Edit</button>
                <button class="btn btn-danger delete" title="Delete"  @click="deleteCard(id)">Delete</button>
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
  private id = {};
  private cardid= {};
  private cardInfo: any[] = [];



  mounted() {
    this.$appDB.collection(`users/${this.uid}/billing`).onSnapshot((qs) => {
      this.cardInfo.splice(0);
      qs.forEach((qds) => {
        if (qds.exists) {
          const billingInfo = qds.data();
          this.cardInfo.push({
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
    console.log(this.cardInfo);
  }



  deleteCard(c: any) { console.log("olivier");

this.$appDB.collection(`/billing`).doc(c).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
}); console.log();
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
