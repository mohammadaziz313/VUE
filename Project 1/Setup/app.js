new Vue({
  el: "#app",
  data: {
    isGameStart: true,
    userHealth: 100,
    monsterHealth: 100,
    logger: []
  },
  methods: {
    changeGameStatus: function() {
      this.isGameStart = !this.isGameStart;
    },
    initGame: function() {
      this.logger = [];
      this.isGameStart = false;
      this.userHealth = this.monsterHealth = 100;
    },
    endGame: function() {
      this.logger = [];
      this.isGameStart = true;
      this.userHealth = this.monsterHealth = 100;
    },
    attack: function() {
      var userRand = this.generateRandom(1);
      var monsterRand = this.generateRandom(1);
      this.logger.unshift("Monster Attacked User for " + monsterRand);
      this.logger.unshift("User Attacked Monster for " + userRand);

      this.checkWinner(userRand, monsterRand);
    },
    specialAttack: function() {
      var userRand = this.generateRandom(10);
      var monsterRand = this.generateRandom(10);
      this.logger.unshift("Monster Special Attacked User for " + monsterRand);
      this.logger.unshift("User Special Attacked Monster for " + userRand);
      this.checkWinner(userRand, monsterRand);
    },
    checkWinner: function(userRand, monsterRand) {
      if (this.userHealth - userRand < 0) this.userHealth = 0;
      else this.userHealth -= userRand;

      if (this.monsterHealth - monsterRand < 0) this.monsterHealth = 0;
      else this.monsterHealth -= monsterRand;

      if (this.monsterHealth == 0 && this.userHealth == 0) {
        if (confirm("It is a draw!!\nDo you want to restart?")) this.initGame();
        else this.endGame();
      } else if (this.monsterHealth == 0) {
        if (confirm("You won!!\nDo you want to restart?")) this.initGame();
        else this.endGame();
      } else if (this.userHealth == 0) {
        if (confirm("You lost!!\nDo you want to restart?")) this.initGame();
        else this.endGame();
      }
    },
    heal: function() {
      var userRand = this.generateRandom(10);
      var monsterRand = this.generateRandom(1);
      if (this.userHealth + userRand - monsterRand > 100) {
        this.userHealth = 100;
      } else {
        this.userHealth += userRand - monsterRand;
        this.logger.unshift("Monster Attacked User for " + monsterRand);
        this.logger.unshift("User Healed for " + userRand);
      }
    },
    giveup: function() {
      if (confirm("Do you really want to quit?")) {
        this.endGame();
      }
    },
    generateRandom: function(factor) {
      return Math.floor(Math.random() * 10 + factor);
    }
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
        width: this.monsterHealth + "%"
      };
    }
  },
  watch: {}
});
