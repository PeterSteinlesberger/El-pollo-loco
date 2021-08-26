class Character extends MoveableObject {
  y = 165;
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
world;
speed = 8;

  constructor() {
    super().loadImage(
      "img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"
    );
    this.loadImages(this.IMAGES_WALKING);

    this.animate();
  }

  jump() {}

  animate() {

    setInterval(() => {
      if(this.world.keyboard.RIGHT) {
      this.x += this.speed;
      }

    if(this.world.keyboard.LEFT) {
      this.x -= this.speed;
      }
  }, 1000 / 60);



    setInterval(() => {

      if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //Walking animation
      let i = this.currentImage % this.IMAGES_WALKING.length;
      let path = this.IMAGES_WALKING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }}, 70);

  }
}
