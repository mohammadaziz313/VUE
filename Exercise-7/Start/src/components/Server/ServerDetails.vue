<template>
  <div class="col-xs-12 col-sm-6">
    <p>{{messageSetter}}</p>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
  props: {
    status: {
      type: String,
      default: "Server Details are currently not updated"
    }
  },
  computed: {
    messageSetter() {
      return this.status;
    }
  }
  //created() {
  // eventBus.$on("serverDetailsChanged", message => {
  //  this.serverStatus = message;
  //});
  //}
};
</script>

<style>
</style>
