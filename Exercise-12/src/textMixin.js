export const textMixin = {
  data() {
    return {
      text: "Hello"
    };
  },
  computed: {
    appendLengthFromMixin() {
      return this.text + "(" + this.text.length + ")";
    }
  }
};
