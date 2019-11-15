export const fruitMixin = {
  data() {
    return {
      filteredText: "",
      fruits: ["Mango", "Pineapple", "Apple", "Grapes"]
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filteredText);
      });
    }
  }
};
