<template>
  <div>
    <h3>Some User Details</h3>
    <router-link class="btn btn-primary" :to="link">Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: {
          id: this.$route.params.id
        },
        query: {
          locale: "en",
          analytics: 500
        },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    if (false) {
      next(false);
    } else {
      next();
    }
  },
  beforeCreate() {
    console.log("User Details");
  }
};
</script>
