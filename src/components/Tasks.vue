<template>
<div class="vue-tasks inner-block">
      <section>
        <h3>Tasks</h3>
        <tbody>
        <tr>
          <th>Store</th>
          <th>Product</th>
          <th>Size</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      
      </tbody>
      </section>
</div>

</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FirebaseFirestore } from "@firebase/firestore-types";

@Component
export default class Tasks extends Vue {
  readonly $appDB!: FirebaseFirestore;
  private store = "";

  createTask(): void {
    this.$appDB
      .collection("employees")
      .add({ store: this.store })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  
}
</script>
<style >
 .inner-block {
  margin-top: 50%;
  margin-left: 125%;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

</style>
