<template>
  <div>
    <input v-model="filteredText" />
    <ul>
      <li v-for="(fruit,i) in filteredFruits" :key="i">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitsMixin";
export default {
  mixins: [fruitMixin]
};
</script>

<style>
</style>
