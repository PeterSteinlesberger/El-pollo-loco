class ThrowableObject extends MoveableObject {

otherDirection = false;

    IMAGES_SHOOT_BOTTLE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    constructor(x, y) {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGES_SHOOT_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }


    throw() {
        this.speedY = 26;
        this.applyGravity();
        console.log('DirectionLeft:' + this.otherDirection);
        setInterval(() => {
            this.animateImages(this.IMAGES_SHOOT_BOTTLE);
            // if(this.otherDirection) {
            //     this.x -= 14; 
            // } else {
                 this.x += 14;
          //  }
        }, 36);
    }
}



