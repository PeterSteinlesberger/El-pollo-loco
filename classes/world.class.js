class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  bottleBar = new BottleBar();
  coinBar = new CoinBar();
  gameOverScreen = new GameOverScreen();
  throwableObjects = [];
  GAMEOVERSCREEN_SOUND = new Audio('audio/gameover-screen.mp3');
  SAD_TRUMPED = new Audio('audio/Sad-trumpet-sound.mp3');
  START_SCREEN_SOUND = new Audio('audio/startscreen-song.mp3');
  INGAME_SOUND = new Audio('audio/ingamesound.mp3');

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.setWorld();
    this.draw();
    this.run();
    this.playSound();

  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectToMap(this.level.backgroundObjects);
    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0);
    // ----------- Space for fixed objects ------------

    if (this.character.energy == 0) {
      this.addToMap(this.gameOverScreen);
      // document.getElementById('canvas').innerHTML += `<a href="#" class="start-button" onclick="startGame()">START</a>`;
    }




    this.addToMap(this.bottleBar);
    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);

    this.ctx.translate(this.camera_x, 0);


    this.addObjectToMap(this.level.clouds);
    this.addObjectToMap(this.level.enemies);
    this.addObjectToMap(this.throwableObjects);
    this.addObjectToMap(this.level.coins);
    this.addObjectToMap(this.level.bottles);
    this.ctx.translate(-this.camera_x, 0);

    //drawCharcter wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  run() {
    setInterval(() => {
      this.checkThrowObjects();
      this.checkCollisionsWithEnemies();
      this.checkCollisionsWithCoins();

    }, 200);
  }

  checkCollisionsWithEnemies() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        this.playGameOverSound();
      }
    });
  }

  checkCollisionsWithCoins() {
    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {
        this.coinBar.setPercentage(percentage);
      }
    });
  }

  checkThrowObjects() {
    if (this.keyboard.CRTL) {
      let bottle = new ThrowableObject(this.character.x + 56, this.character.y + 122);
      this.throwableObjects.push(bottle);
    }
  }

  setWorld() {
    this.character.world = this;
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  playGameOverSound() {
    if (this.character.energy <= 0) {
      INGAME_SOUND.pause();
      setTimeout(() => {
        this.GAMEOVERSCREEN_SOUND.volume = 0.2;
        this.GAMEOVERSCREEN_SOUND.play();
      }, 3000);
      this.SAD_TRUMPED.volume = 0.4;
      this.SAD_TRUMPED.play();

      // document.getElementById('canvas').innerHTML += `<a href="#" class="start-button" onclick="startGame()">START</a>`;
    }
  }

  playSound() {
    START_SCREEN_SOUND.volume = 0.3;
   START_SCREEN_SOUND.play();
 }

// INGAME_SOUND.volume = 0.15;
 // INGAME_SOUND.play();
 // START_SCREEN_SOUND.pause();

}
