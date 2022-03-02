class ThrowableObject extends MoveableObject {




    constructor(x, y) {
        super();
        this.loadImages(this.IMAGES_SHOOT_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    IMAGES_SHOOT_BOTTLE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];


    throw() {
        this.speedY = 26;
        this.applyGravity();
        this.animateImages(this.IMAGES_SHOOT_BOTTLE);
        setInterval(() => {
            this.x += 10;
        }, 20);
    }



}