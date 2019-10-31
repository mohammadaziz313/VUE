<template>
  <div>
    <slot name="app-red-header"></slot>
  </div>
</template>

<script>
export default {
  activated() {
    console.log("Activated");
  },
  deactivated() {
    console.log("Deactivated");
  },
  destroyed() {
    console.log("Destroyed");
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
  background-color: lightcoral;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>