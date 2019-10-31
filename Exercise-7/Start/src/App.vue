<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <servers @serverDetailsChanged="setMessage" :displayInfo="setMessageCallback"></servers>
      <app-server-details :status="message"></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";

export default {
  data() {
    return {
      message: "Servers are not updated"
    };
  },
  components: {
    appHeader: Header,
    Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  },
  methods: {
    setMessage($event) {
      this.message = $event;
    },
    setMessageCallback(message) {
      //console.log(message);
      this.message = message;
    }
  }
};
</script>

<style>
</style>
