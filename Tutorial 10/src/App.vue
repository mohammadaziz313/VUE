<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <!-- <p v-highlight.delayed="'red'">Green</p> -->
        <p
          v-local-highlight:background.delayed.blink="{mainColour:'red',secondColour:'green',delay:500}"
        >Green</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColour = binding.value.mainColour;
          let secondColour = binding.value.secondColour;
          let currentColour = mainColour;
          setTimeout(() => {
            setInterval(() => {
              currentColour == mainColour
                ? (currentColour = secondColour)
                : (currentColour = mainColour);
              if (binding.arg == "background")
                el.style.backgroundColor = currentColour;
              else el.style.color = currentColour;
            }, 1000);
          }, binding.value.delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background")
              el.style.backgroundColor = binding.value.mainColour;
            else el.style.color = binding.value.mainColour;
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
