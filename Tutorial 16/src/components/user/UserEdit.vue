<template>
  <div>
    <h3>Edit the User {{ $route.params.id }}</h3>
    <p>Local: {{ $route.query.locale }} & Analytics: {{ $route.query.analytics }}</p>
    <button class="btn btn-primary" @click="isConfirmed = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some Data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isConfirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.isConfirmed) {
      next();
    } else {
      if (
        confirm(
          "Your changes haven't been saved.\nWould like to navigate away?"
        )
      ) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>
