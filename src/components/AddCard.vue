<template>
  <div class="container">
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
    >
      <div class="container">
        <a class="navbar-brand float-left" href="#">
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
        </ul>
      </div>
    </nav>
    <div class="table-wrapper">
      <div class="row">
        <div class="col-75">
          <div class="card-container">
            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" v-model="fullname" />
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" v-model="userEmail" />
                <label for="adr"
                  ><i class="fa fa-address-card-o"></i> Address</label
                >
                <input type="text" id="adr" v-model="address" />
                <label for="city"><i class="fa fa-institution"></i> City</label>
                <input type="text" id="city" v-model="city" />

                <div class="row">
                  <div class="col-50">
                    <label for="state">State</label>
                    <input type="text" id="state" v-model="state" />
                  </div>
                  <div class="col-50">
                    <label for="zip">Zip</label>
                    <input type="text" id="zip" v-model="zip" />
                  </div>
                </div>
              </div>

              <div class="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa" style="color:navy;"></i>
                  <i class="fa fa-cc-amex" style="color:blue;"></i>
                  <i class="fa fa-cc-mastercard" style="color:red;"></i>
                  <i class="fa fa-cc-discover" style="color:orange;"></i>
                </div>
                <label for="cname">Name on Card</label>
                <input type="text" id="cname" v-model="cardName" />
                <label for="ccnum">Credit card number</label> <br />
                <input id="ccnum" v-model="cardNumber" /> <br />
                <label for="expmonth">Exp Month</label> <br />
                <input id="expmonth" v-model="expMonth" />
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input id="expyear" v-model="expYear" />
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input id="cvv" v-model="cvv" />
                  </div>
                </div>
              </div>
            </div>

            <router-link to="/billing"
              ><input
                type="submit"
                value="Save Card"
                class="save-btn"
                @click="saveBilling"
            /></router-link>
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FirebaseFirestore } from "@firebase/firestore-types";

@Component
export default class AddCard extends Vue {
  readonly $appDB!: FirebaseFirestore;
  private message = "";
  private uid = "none";
  private fullname = "";
  private userEmail = "";
  private address = "";
  private city = "";
  private state = "";
  private zip = "";
  private cardName = "";
  private cardNumber = "";
  private expMonth = "";
  private expYear = "";
  private cvv = "";

  showMessage(m: string): void {
    this.message = m;
    setTimeout(() => {
      // Auto disappear after 5 seconds
      this.message = "";
    }, 5000);
  }
  //this.$
  saveBilling(): void {
    this.$appDB
      .collection(`users/${this.uid}/billing`)
      .add({
        name: this.fullname,
        email: this.userEmail,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        cardName: this.cardName,
        cardNumber: this.cardNumber,
        expMonth: this.expMonth,
        expYear: this.expYear,
        cvv: this.cvv,
      })
      .then(() => {
        this.$router.push({ path: "/billing" });
      })
      .then(() => {
        this.showMessage(`Card saved successfully!`);
      });
  }
}
</script>

<style scope>
.table-wrapper {
  margin: auto;
  margin-top: 10%;
  margin-left: 15%;

  width: 100%;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.card-container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.save-btn {
  background-color: #6441a5;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.save-btn:hover {
  background-color: #493077;
}
</style>
