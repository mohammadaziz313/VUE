new Vue({
  el: "#exercise",
  data: {
    attachShrink: false,
    attachHighlight: true,
    buttonTitle: "Start Effect",
    effectStarted: false,
    timeInterval: null,
    timeInterval2: null,
    className: "highlight",
    inputClassName: "",
    inputClassBoolean: "",
    progressBarTitle: "Start Progress",
    isProgressStarted: false,
    progressBarWidth: 0
  },
  methods: {
    startEffect: function() {
      this.effectStarted = !this.effectStarted;
      var vm = this;
      if (this.effectStarted) {
        this.buttonTitle = "Stop Effect";
        vm.timeInterval = setInterval(function() {
          vm.attachShrink = !vm.attachShrink;
          vm.attachHighlight = !vm.attachHighlight;
          console.log("I am in");
        }, 2000);
      } else {
        this.buttonTitle = "Start Effect";
        clearInterval(vm.timeInterval);
        console.log("I am in 2");
        vm.attachShrink = false;
        vm.attachHighlight = true;
      }
    },
    setClassName: function(event) {
      this.inputClassName = event.target.value;
      console.log(this.inputClassName);
    },
    setBooleanValue: function(event) {
      this.inputClassBoolean = event.target.value;
      console.log(this.inputClassBoolean);
    },
    startProgress: function(event) {
      this.isProgressStarted = !this.isProgressStarted;
      var vm = this;
      if (vm.isProgressStarted) {
        vm.progressBarTitle = "Stop Progress";
        vm.timeInterval2 = setInterval(function() {
          vm.progressBarWidth += 40;
          if (vm.progressBarWidth == 440) {
            clearInterval(vm.timeInterval2);
            vm.progressBarTitle = "Start Progress";
            vm.isProgressStarted = false;
            vm.progressBarWidth = 0;
          }
          console.log(vm.progressBarWidth);
        }, 2000);
      } else {
        vm.progressBarTitle = "Start Progress";
        clearInterval(vm.timeInterval2);
        vm.isProgressStarted = false;
        vm.progressBarWidth = 0;
      }
    }
  },
  computed: {
    divClassSetterEffect: function() {
      if (this.effectStarted) {
        return {
          highlight: this.attachHighlight,
          shrink: this.attachShrink
        };
      }
    },
    noClassSetter: function() {
      return {
        red: true,
        large: true
      };
    },
    defaultSetter: function() {
      return {
        height: 100 + "px",
        width: 100 + "px"
      };
    },
    inputClassSetter: function() {
      var temp1 = this.inputClassName + "";
      var temp2 = this.inputClassBoolean;
      //var obj[''+temp1] = temp2;
      var obj = {};
      obj[temp1] = temp2;
      var obj1 = {
        temp1: temp2
      };
      console.log(obj);
      return obj;
    },
    widthSetter: function() {
      return {
        width: this.progressBarWidth + "px"
      };
    }
  }
});
