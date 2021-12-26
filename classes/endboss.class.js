class Endboss extends MoveableObject {

  height = 350;
  width = 220;
  y = 95;
  energy = 100;

  IMAGES_ATTENTION = [
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
  ];

  IMAGES_WALKING = [
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
  ];

  IMAGES_ATTACK = [
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
  ];

  IMAGES_HURT = [
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png'
  ];

  IMAGES_DEAD = [
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
  ];


  constructor() {
    super().loadImage(this.IMAGES_ATTENTION[0]);
    this.loadImages(this.IMAGES_ATTENTION);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_ATTACK);
    this.x = 7200;
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.animateImages(this.IMAGES_ATTENTION);
      if (this.isDead()) {
        this.animateImages(this.IMAGES_DEAD);
      } else if (this.isHurt()) {
        this.animateImages(this.IMAGES_HURT);
        if(this.energy <= 80 && this.energy >= 60) {
          this.animateImages(this.IMAGES_ATTACK);
        } else  if(this.energy <= 30 && this.energy >= 10) {
          this.animateImages(this.IMAGES_ATTACK);
        }
      }
    }, 185);
}

endbossDiedAnimation() {
  setInterval(() => {
      if (this.energy == 0) {
          this.y -= this.speedY;
          this.speedY -= this.acceleration;
      }
  }, 1000 / 25);
}


}

