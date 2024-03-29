import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    ageWasEdited(age) {
      this.$emit("ageWasChanged", age);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
