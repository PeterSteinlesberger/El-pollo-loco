class ThrowableBottle extends ThrowableObject {




    constructor(x, y) {
        super();
        this.loadImages(this.IMAGES_SHOOT_BOTTLE);
        this.loadImages(this.BROKEN_BOTTLE);
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
      
      
        IMAGES_BROKEN_BOTTLE = [
          'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png', 
          'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png', 
          'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png', 
          'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png', 
          'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png', 
          'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
        ];

    throw() {
        this.speedY = 26;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 20);
    }





}