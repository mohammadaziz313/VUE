<template>
  <div class="form-group">
    <label for="Quote">Quote</label>
    <textarea class="form-control" rows="5" v-model="textInput"></textarea>
    <div style="text-align:center;">
      <button type="button" class="btn btn-primary" @click="addQuote">Add Quote</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      textInput: ""
    };
  },
  methods: {
    addQuote() {
      if (this.textInput == "") {
        alert("Input a valid message");
      } else if (eventBus.counter == 10) {
        alert("Maximum capacity for quotes reached!");
      } else {
        if (eventBus.counter < 10) {
          eventBus.counter++;
          this.$emit("quoteHasBeenAdded", this.textInput);
          this.textInput = "";
        }
      }
    }
  }
};
</script>

<style scoped>
.form-group,
button {
  margin: 20px;
}
</style>