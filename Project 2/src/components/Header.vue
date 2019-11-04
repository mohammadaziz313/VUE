<template>
  <h2>{{headerText}}</h2>
</template>

<script>
export default {
  data() {
    return {
      headerText: "Quotes Added"
    };
  }
};
</script>

<style scoped>
    h2{
        font-weight: bold;
    }
</style>