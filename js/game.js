let canvas;
let world;
let keyboard = new Keyboard();
let screenSize = 0;
START_SCREEN_SOUND = new Audio('audio/startscreen-song.mp3');
INGAME_SOUND = new Audio('audio/ingamesound.mp3');

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (event.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (event.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (event.keyCode == 38) {
    keyboard.UP = true;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (event.keyCode == 17) {
    keyboard.CRTL = true;
  }
});


window.addEventListener("keyup", (event) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (event.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (event.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (event.keyCode == 38) {
    keyboard.UP = false;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (event.keyCode == 17) {
    keyboard.CRTL = false;
  }
});


function startGame() {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('canvas').style.display = 'block';
  init();
  whichScreenSize();
  startIngameSound();
}

function showKeyboardImg() {
  document.getElementById('keyboardImgBig').style.display = "block";
  document.getElementById('keyboardImgSmall').style.display = "none";
}

function removeKeyboardImg() {
  document.getElementById('keyboardImgSmall').style.display = "block";
  document.getElementById('keyboardImgBig').style.display = "none";
}

function fullscreenMode() {
  let startScreen = document.getElementById('startScreen');
  startScreen.style.width = "100%";
  startScreen.style.height = "100vh";
  screenSize = 1;
}

function whichScreenSize() {
  if (screenSize > 0) {
    canvas.requestFullscreen();
  }
}

function playSound() {
  START_SCREEN_SOUND.volume = 0.3;
  START_SCREEN_SOUND.play();
}


function startIngameSound() {
  START_SCREEN_SOUND.pause();
  INGAME_SOUND.volume = 0.15;
  INGAME_SOUND.play();
}

