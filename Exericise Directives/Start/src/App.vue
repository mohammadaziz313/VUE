<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Form</h1>
      </div>
    </div>
    <form v-if="!isSubmitted">
      <!-- <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">-->
      <!-- Exercise 1 -->
      <!-- Create a Signup Form where you retrieve the following Information -->
      <!-- Full Name (First Name + Last Name) -->
      <!-- <div class="row" v-if="!isSubmitted">
        <div class="col-xs-6 col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" class="form-control" id="firstName" v-model.trim="firstName" />
          </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" class="form-control" id="lastName" v-model.trim="lastName" />
          </div>
        </div>
      </div>-->
      <!-- Mail -->
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" v-model="email" />
          </div>
        </div>
      </div>
      <!-- Password -->
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" v-model.lazy="password" />
          </div>
        </div>
      </div>
      <!-- Store Data? Yes/No -->
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <div class="radio">
              <label v-for="(data,index) in storeData" :key="index">
                <input type="radio" :id="data" :value="data" v-model="picked" />
                {{data}}
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- Exercise 3 -->
      <!-- Edit the Example from above and create a custom "Full Name" Control -->
      <!-- which still holds the First Name and Last Name Input Field -->
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-full-name v-model.trim="fullName"></app-full-name>
        </div>
      </div>
      <!-- Exercise 2 -->
      <!-- Only display the Form if it has NOT been submitted -->
      <!-- Display the Data Summary ONCE the Form HAS been submitted -->
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
          </div>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ getFullName }}</p>
            <p>Mail: {{ email }}</p>
            <p>Password: {{ password }}</p>
            <p>Store in Database?: {{picked}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullNameComponent from "../FullNameComponent.vue";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      storeData: ["Yes", "No"],
      picked: "",
      isSubmitted: false,
      fullName: ""
    };
  },
  computed: {
    getFullName() {
      return this.fullName;
      //return this.firstName + " " + this.lastName;
    }
  },
  methods: {
    submitted() {
      this.isSubmitted = !this.isSubmitted;
    }
  },
  components: {
    appFullName: FullNameComponent
  }
};
</script>

<style>
</style>
