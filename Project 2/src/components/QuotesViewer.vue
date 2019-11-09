<template>
  <div class="container">
    <quotes-component
      v-for="(quote,index) in quotesArray"
      :key="index"
      @deleteNode="deleteQuote"
      :content="sendContent(quote,index)"
    >
      <div class="row" v-if="index % 4 == 0"></div>
      <div v-else></div>
    </quotes-component>
  </div>
</template>

<script>
import Quotes from "./Quotes.vue";
import { eventBus } from "../main.js";
export default {
  components: {
    quotesComponent: Quotes
  },
  props: {
    quotesArray: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteQuote(index) {
      //console.log(index);
      if (this.quotesArray.length != 0) {
        this.quotesArray.splice(index, 1);
        eventBus.counter--;
      }
    },
    sendContent(quote, index) {
      //var obj = { quote: quote, index: index };
      return { quote: quote, index: index };
    }
  }
};
</script>

<style scoped>
.container {
  margin: 20px;
}
</style>
