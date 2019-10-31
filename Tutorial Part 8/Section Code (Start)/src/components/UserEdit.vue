<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <button @click="editAge">Edit Age</button>
    <button @click="resetAge">Reset Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  props: {
    age: Number,
    resetAge: Function
  },
  methods: {
    editAge() {
      this.age = 30;
      this.$emit("ageChanged", this.age);
      //eventBus.$emit("ageWasChanged", this.age);
      //eventBus.ageWasEdited(this.age);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
