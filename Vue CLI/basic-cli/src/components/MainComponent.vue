<template>
  <div class="container">
    <header-component></header-component>
    <hr />
    <body-component></body-component>
    <hr />
    <footer-component></footer-component>
  </div>
</template>

<script>
import Header from "./Shared/Header.vue";
import Body from "./Shared/Body.vue";
import Footer from "./Shared/Footer.vue";

export default {
  components: {
    "header-component": Header,
    "body-component": Body,
    "footer-component": Footer
  }
};
</script>