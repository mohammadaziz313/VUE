<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-header></app-header>
        <app-quotes-bar :numberOfQuotesAdded="counters"></app-quotes-bar>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2"></div>
      <div class="col-xs-8">
        <app-quotes-adder @quoteHasBeenAdded="addQuote"></app-quotes-adder>
      </div>
      <div class="col-xs-2"></div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <app-quotes-viewer :quotesArray="passQuotesArray"></app-quotes-viewer>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <app-footer>
          <p>Info: Click on a Quote to delete it.</p>
        </app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import QuotesAdder from "./components/QuotesAdder.vue";
import QuotesBar from "./components/QuotesBar.vue";
import QuotesViewer from "./components/QuotesViewer.vue";
import { eventBus } from "./main.js";

export default {
  // import {eventBus} from '';

  components: {
    appHeader: Header,
    appFooter: Footer,
    appQuotesAdder: QuotesAdder,
    appQuotesBar: QuotesBar,
    appQuotesViewer: QuotesViewer
  },
  data() {
    return {
      quotesArray: []
    };
  },
  methods: {
    addQuote(quote) {
      this.quotesArray.push(quote);
    }
  },
  computed: {
    counters() {
      return eventBus.counter;
    },
    passQuotesArray() {
      return this.quotesArray;
    }
  }
};
</script>

<style scoped>
</style>
