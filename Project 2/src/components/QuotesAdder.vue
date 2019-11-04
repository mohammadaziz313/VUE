<template>
  <div class="form-group">
    <label for="Quote">Quote</label>
    <textarea class="form-control" rows="5" v-model="textInput"></textarea>
    <button type="button" class="btn btn-primary center" @click="addQuote">Add Quote</button>
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
div,
button {
  margin: 20px;
}

.center {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
}
</style>