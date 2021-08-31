class ThrowableObject extends MoveableObject {




    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
this.x = x;
this.y = y;
this.height = 60;
this.width = 50;
this.throw();
    }

throw() {
    this.speedY = 26;
    this.applyGravity();
    setInterval(() => {
this.x += 10;
    }, 20);
}



}