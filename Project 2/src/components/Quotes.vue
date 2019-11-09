<template>
  <div class="col-xs-3">
    <div
      class="well"
      @click="deleteNode"
      style="font: 20pt Arizonia,Arial,Helvetica"
    >{{content.quote}}/{{content.index}}</div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteNode() {
      //console.log(this.content);
      this.$emit("deleteNode", this.content.index);
    }
  }
};
</script>

<style scoped>
</style>