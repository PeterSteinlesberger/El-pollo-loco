class Cloud extends MoveableObject {
    height = 270;
    width = 520;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
    this.x = 10 + Math.random() *600;  // generate Number between 10 up to 800
this.y = 0 + Math.random() *40;  // generate Number between 0 up to 70
    }
}