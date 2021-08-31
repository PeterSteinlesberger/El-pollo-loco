class ThrowableObject extends MoveableObject {




    constructor() {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
this.x = 100;
this.y = 100;
this.height = 60;
this.width = 50;
this.throw(100, 170);
    }

throw(x, y) {
    this.x = x;
    this.y = y;
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
this.x += 10;
    }, 20);
}



}