var app1 = new Vue({
  el: "#app",
  data: {
    title: "Hey World",
    link: "http://some.com",
    finishedLink: '<a href="https://berlin3.com">Berlin3</a>',
    counter: 0,
    x: 0,
    y: 0,
    name: "Furigana"
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    increase: function() {
      this.counter++;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    dummy: function(event) {
      event.stopPropagation();
    },
    alert: function() {
      alert("Alert ME!");
    }
  }
});

app1.$refs.increaseButton.innerText = "Hey";

console.log(app1.$refs);

var app2 = new Vue({
  el: "#app2",
  data: {
    counter: 0,
    secondCounter: 0
  },
  computed: {
    output: function() {
      return this.counter >= 5 ? "Less Than 5" : "Greater than 5";
    }
  },
  methods: {
    result: function() {
      return this.counter >= 5 ? "Less Than 5" : "Greater than 5";
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  }
});

var app3 = new Vue({
  el: "#app3",
  data: {
    attachRed: false,
    attachBlue: false,
    color: "yellow"
  },
  computed: {
    classSetter: function() {
      return { blue: this.attachBlue };
    }
  },
  watch: {},
  methods: {}
});

var app4 = new Vue({
  el: "#app4",
  data: {
    color: "yellow",
    width: 100
  },
  computed: {
    myStyle: function() {
      return { backgroundColor: this.color, width: this.width + "px" };
    }
  },
  methods: {},
  watch: {}
});

var app5 = new Vue({
  template: "<h3>App5 using template property</h3>"
});

//app5.$mount("#app5");

app5.$mount();
document.getElementById("app5").appendChild(app5.$el);
