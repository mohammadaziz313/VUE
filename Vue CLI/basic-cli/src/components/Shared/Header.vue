<template>
  <div class="row">
    <div class="col-xs-12">
      <header>
        <h1>{{ headerText }}</h1>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerText: "Server Status"
    };
  }
};
</script>