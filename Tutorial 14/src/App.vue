<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />
        <select v-model="selectType" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br />
        <button class="btn btn-primary" @click="show = !show">Toggle</button>
        <br />
        <br />
        <transition enter-active-class="animated bounce" leave-active-class="animated shake" appear>
          <div class="alert alert-info" v-if="show">Some Info.</div>
        </transition>
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">Some Info.</div>
        </transition>
        <transition :name="selectType" appear>
          <div class="alert alert-info" v-if="show">Some Info.</div>
        </transition>
        <transition name="slide" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">Some Info.</div>
          <div class="alert alert-warning" v-if="!show" key="warning">Some Info.</div>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="load = !load">Load/Unload</button>
        <br />
        <br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-cancelled="afterCancelled"
          :css="false"
        >
          <div style="height:100px;width:300px;background-color: lightgreen" v-if="load"></div>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="toggleComponent">Toggle Class</button>
        <br />
        <br />
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="addNumber">Add Item</button>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(number,index) in numbers"
            :key="index"
            @click="removeItem(index)"
            style="cursor:pointer"
          >{{number}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SuccessComponent from "./SuccessComponent.vue";
import DangerComponent from "./DangerComponent.vue";

export default {
  components: {
    "app-success-component": SuccessComponent,
    "app-danger-component": DangerComponent
  },
  data() {
    return {
      show: false,
      selectType: "fade",
      load: true,
      elementWidth: 100,
      selectedComponent: "app-success-component",
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    toggleComponent() {
      this.selectedComponent =
        this.selectedComponent == "app-success-component"
          ? (this.selectedComponent = "app-danger-component")
          : (this.selectedComponent = "app-success-component");
    },
    beforeEnter(el) {
      console.log("Before Enter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("Enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("After Enter");
    },
    enterCancelled(el) {
      console.log("Enter Cancelled");
    },
    beforeLeave(el) {
      console.log("Before Leave");
      this.elementWidth = 300;
      el.style.width = "300px";
    },
    leave(el, done) {
      console.log("Leave");
      console.log("Enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("After Leave");
    },
    afterCancelled(el) {
      console.log("After Cancel");
    },
    addNumber() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    }
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
