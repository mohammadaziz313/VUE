<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="server in servers"
        :key="server.id"
        @click="dummyFunc(server)"
      >Server #{{ server.id }}</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";
export default {
  props: {
    displayInfo: Function
  },
  data() {
    return {
      servers: [
        { id: 1, status: "Critical" },
        { id: 2, status: "Normal" },
        { id: 3, status: "Down" },
        { id: 4, status: "Normal" },
        { id: 5, status: "Critical" }
      ]
    };
  },
  methods: {
    displayServerInfo(server) {
      var message = "Server " + server.id + " is " + server.status;
      //console.log("Server " + server.id + " is " + server.status);
      //eventBus.$emit("serverDetailsChanged", message);
      //this.$emit("serverDetailsChanged", message);
    },
    dummyFunc(server) {
      var message = "Server " + server.id + " is " + server.status;
      this.displayInfo(message);
    }
  }
};
</script>

<style>
</style>
