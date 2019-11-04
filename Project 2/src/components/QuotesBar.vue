<template>
  <div class="barOuter">
    <div v-if="isDataPresent" class="barInner" :style="innerDivStyle">
      <span>{{numberOfQuotesAdded}}/10</span>
    </div>
    <div v-else class="barInnerNotPresent" :style="innerDivStyle">
      <span>{{numberOfQuotesAdded}}/10</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numberOfQuotesAdded: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    isDataPresent() {
      return this.numberOfQuotesAdded > 0 ? true : false;
    },
    innerDivStyle() {
      return { width: this.numberOfQuotesAdded * 10 + "%" };
    }
  }
};
</script>

<style scoped>
.barOuter {
  width: 100%;
  height: 30px;
  background-color: #eee;
  box-shadow: inset 0px 0px 0px #eee;
  margin: auto;
}

.barInner {
  height: 30px;
  background-color: blue;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 12pt;
  transition: width 500ms;
}

.barInnerNotPresent {
  height: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 12pt;
  color: black;
}
</style>