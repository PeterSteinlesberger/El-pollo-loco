class Character extends MoveableObject {
  y = 65;
  height = 270;
  width = 100;
  IMAGES_WALKING = [
    "img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png",
    "img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png",
    "img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png",
    "img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png",
    "img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png",
    "img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png",
  ];

IMAGES_JUMPING = [
  'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
  'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
  'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
  'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
  'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
  'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
  'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
  'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
  'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
  'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'
];


world;
speed = 8;
walking_sound = new Audio('audio/walking.mp3');
jumping_sound = new Audio('audio/jumping.mp3');


  constructor() {
    super().loadImage(
      "img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"
    );
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.applyGravity();
    this.animate();
  }

  animate() {

    setInterval(() => {
      this.walking_sound.pause();
      if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
     this.moveRight();
     this.otherDirection = false;
     this.walking_sound.play();
      }

    if(this.world.keyboard.LEFT && this.x > 120 ) {
       this.moveLeft();
   this.otherDirection = true;
   this.walking_sound.play();
}
      
      
      if(this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
        this.jumping_sound.play();
}
      this.world.camera_x = -this.x +120;
  }, 1000 / 60);



    setInterval(() => {
if(this.isAboveGround()) {
  this.animateImages(this.IMAGES_JUMPING);

} else {
      if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //Walking animation
      this.animateImages(this.IMAGES_WALKING);
      }
    }}, 70);
  }
}



