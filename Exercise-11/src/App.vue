<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCase | to-lowercase }}</p>
        <hr />
        <input v-model="filteredText" />
        <ul>
          <li v-for="(fruit,i) in filteredFruits" :key="i">{{fruit}}</li>
        </ul>
        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitsMixin";
import List from "./List.vue";

export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: "Hello there"
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  }
};
</script>

<style>
</style>
