<template>
  <div class="container">
    <div class="row">
      <button @click="selectedComponent = 'appQuote'">Quote</button>
      <button @click="selectedComponent = 'appAuthor'">Author</button>
      <button @click="selectedComponent = 'appNew'">New</button>
      <div class="col-xs-12">
        <keep-alive>
          <component :is="selectedComponent">
            <h2 slot="quote-title">{{ quoteTitle }}</h2>
            <p slot="quote-content">{{quoteContent}}</p>
            <p slot="author-content">{{quoteContent}}</p>
          </component>
        </keep-alive>
        <!-- <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p slot="content"></p>
        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  },
  data() {
    return {
      quoteTitle: "The Quote",
      quoteContent: "Passing Some Data!",
      selectedComponent: "appQuote"
    };
  }
};
</script>

<style>
p {
  color: grey;
}
</style>
