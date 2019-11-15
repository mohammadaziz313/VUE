<template>
  <div>
    <div class="form-group">
      <label for="firstName">First Name:</label>
      <input type="text" class="form-control" id="firstName" v-model="firstName" />
    </div>
    <div class="form-group">
      <label for="secondName">Second Name:</label>
      <input type="text" class="form-control" id="secondName" v-model="secondName" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      secondName: ""
    };
  },
  watch: {
    firstName() {
      this.$emit("input", this.getFullName());
    },
    secondName() {
      this.$emit("input", this.getFullName());
    }
  },
  methods: {
    getFullName() {
      var fullName = "";
      if (this.firstName != "") fullName += this.firstName;
      if (this.secondName != "") fullName += " " + this.secondName;
      return fullName;
    }
  }
};
</script>

<style scoped>
</style>