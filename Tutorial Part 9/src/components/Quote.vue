<template>
  <div>
    <div>
      <slot name="quote-title"></slot>
    </div>
    <hr />
    <div>
      <slot name="quote-content">The content</slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
h2 {
  color: red;
}
</style>