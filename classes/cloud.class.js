class Cloud extends MoveableObject {

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
    this.x = 200 + Math.random() *500;  // generate Number between 200 up to 700
    
    }
}