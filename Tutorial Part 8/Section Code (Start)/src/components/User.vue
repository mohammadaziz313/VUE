<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <p>{{ name }}</p>
    <button @click="changeName">Change Name</button>
    <p>{{ age }}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :userName="name"
          @nameWasReset=" name = $event"
          :resetFunc="resetName"
          :age="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :age="age" @ageChanged="setAge($event)" :resetAge="setAgeCallback"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data() {
    return {
      name: "Max",
      age: 27
    };
  },
  methods: {
    changeName() {
      this.name = "Anna";
    },
    resetName() {
      this.name = "Max";
    },
    setAge(value) {
      this.age = value;
    },
    setAgeCallback() {
      //console.log("Helo");
      this.age = 30;
    }
  },
  computed: {},
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
