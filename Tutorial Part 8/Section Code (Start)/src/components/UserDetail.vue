<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName }}</p>
    <button @click="resetName">Reset</button>
    <button @click="resetFunc">Reset Parent</button>
    <p>{{ age }}</p>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  props: {
    userName: {
      type: String,
      required: true
    },
    resetFunc: Function,
    age: Number
  },
  computed: {
    switchName() {
      return this.userName
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    resetName() {
      this.userName = "Max";
      this.$emit("nameWasReset", this.userName);
    }
  },
  created() {
    eventBus.$on("ageWasChanged", age => {
      this.age = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
