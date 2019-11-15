<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-custom-on:click="changeText">Toggle Button</button>
        <div
          v-custom-on:mouseenter="mouseEnter"
          v-custom-on:mouseleave="mouseLeft"
          style="background-color:pink"
        >Hello</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "custom-on": {
      bind(el, binding) {
        // el.onclick = function() {
        //   binding.value(el);
        // };
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    changeText(element) {
      alert("Hey");
    },
    mouseEnter() {
      console.log("Mouse Enter");
    },
    mouseLeft() {
      console.log("Mouse Left");
    }
  }
};
</script>

<style>
</style>
