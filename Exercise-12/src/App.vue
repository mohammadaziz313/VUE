<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ text | reverseText }}</p>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ text | lengthUshiro }}</p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <!--Reversing a text-->
        <p>{{ textReversal }}</p>
        <!--Append Length-->
        <p>{{ appendLength }}</p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        {{ appendLengthFromMixin }}
      </div>
    </div>
  </div>
</template>

<script>
import { textMixin } from "./textMixin";

export default {
  mixins: [textMixin],
  filters: {
    reverseText(value) {
      return (value || "")
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    textReversal() {
      return this.text
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style></style>
