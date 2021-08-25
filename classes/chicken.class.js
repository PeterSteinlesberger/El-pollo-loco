class Chicken extends MoveableObject {
  y = 354;
  height = 75;
  width = 55;
  IMAGES_WALKING = [
    "img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png",
    "img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_centro.png",
    "img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_izquierdo.png",
  ];

  constructor() {
    super().loadImage(
      "img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png"
    );
    this.x = 200 + Math.random() * 500; // generate Number between 200 up to 700
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_WALKING.length;
      let path = this.IMAGES_WALKING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 100);
  }
}
