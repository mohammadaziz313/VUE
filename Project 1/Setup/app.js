new Vue({
  el: "#app",
  data: {
    isGameStart: true,
    userHealth: 100,
    monsterHealth: 100,
    logger: []
  },
  methods: {
    changeGameStatus: function(message) {
      this.isGameStart = !this.isGameStart;
    },
    attack: function() {
      var userRand = generateRandom(1);
      var monsterRand = generateRandom(1);
      this.logger.unshift("Monster Attacked User for " + monsterRand);
      this.logger.unshift("User Attacked Monster for " + userRand);
      this.userHealth -= userRand;
      this.monsterHealth -= monsterRand;
    },
    specialAttack: function() {
      var userRand = generateRandom(10);
      var monsterRand = generateRandom(10);
      this.logger.unshift("Monster Special Attacked User for " + monsterRand);
      this.logger.unshift("User Special Attacked Monster for " + userRand);
      this.userHealth -= userRand;
      this.monsterHealth -= monsterRand;
    },
    heal: function() {
      var userRand = generateRandom(1);
      var monsterRand = generateRandom(1);
    },
    giveup: function() {}
  },
  computed: {
    checkGameStatus: function() {
      return this.isGameStart;
    },
    getUserHealth: function() {
      return {
        width: this.userHealth + "%"
      };
    },
    getMonsterHealth: function() {
      return {
        width: this.userHealth + "%"
      };
    },
    generateRandom: function(factor) {
      return Math.floor(Math.random() * 10 + factor);
    }
  },
  watch: {}
});
