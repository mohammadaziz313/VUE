import Vue from "vue";
import App from "./App.vue";
import MainComponent from "./components/MainComponent.vue";

Vue.component("main-component", MainComponent);

new Vue({
  el: "#app",
  render: h => h(App)
});
