class Cloud extends MoveableObject {
    height = 270;
    width = 920;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
    this.x = -100 + Math.random() *6000;  // generate Number between 10 up to 800
this.y = 0 + Math.random() *40;  // generate Number between 0 up to 70
this.animate();
    }

    animate() {
        this.moveLeft();
    }

}