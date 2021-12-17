class Cocina extends MoveableObject {
    y = 368;
    height = 55;
    width = 40;
  
  
  
    IMAGES_WALKING = [
      "img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png",
      "img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png",
      "img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png",
    ];
  
    constructor() {
      super().loadImage(
        "img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png"
      );
      this.x = 200 + Math.random() * 8500; // generate Number between 200 up to 700
      this.speed = 0.2 + Math.random() * 1.45;
      this.loadImages(this.IMAGES_WALKING);
      this.animate();
    }
  
    animate() {
      setInterval(() => {
     this.moveLeft();
      }, 1000 / 60);
    
      setInterval(() => {
        this.animateImages(this.IMAGES_WALKING);
      }, 185);
    }
  }
  