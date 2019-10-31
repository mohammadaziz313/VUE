<template>
  <div class="row">
    <server-component></server-component>
    <server-details-component></server-details-component>
  </div>
</template>


<script>
import Server from "../Server/Server.vue";
import ServerDetails from "../Server/ServerDetails.vue";

export default {
  components: {
    "server-component": Server,
    "server-details-component": ServerDetails
  }
};
</script>