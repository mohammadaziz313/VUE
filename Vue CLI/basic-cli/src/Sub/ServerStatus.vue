<template>
  <div>
    <p>Server Status: {{status}}</p>
    <button @click="changeStatus">Change</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus() {
      if (this.status == "Critical") this.status = "Not Critical";
      else this.status = "Critical";
    }
  }
};
</script>

<style>
</style>