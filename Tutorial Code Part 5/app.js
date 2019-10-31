//For Global setup:
//Vue.component('name-of-selector',{object})

//This is the local way of setting up components
var cmp = {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus: function() {
      this.status = "Normal";
    }
  },
  template:
    "<p>Server Status: {{status}}<button @click='changeStatus'>Change</button></p>"
};

var app1 = new Vue({
  el: "#app1",
  components: {
    hello: cmp
  },
  data: {}
});

var app2 = new Vue({
  el: "#app2",
  data: {
    title: "Hey"
  }
});
