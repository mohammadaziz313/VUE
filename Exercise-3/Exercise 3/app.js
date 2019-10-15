new Vue({
  el: "#exercise",
  data: {
    value: 0,
    timeOutValue: 5000
  },
  computed: {
    result: function() {
      return this.value <= 37 ? "not there yet!" : "done";
    }
  },
  watch: {
    value: function() {
      var vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, vm.timeOutValue);
    }
  }
});
