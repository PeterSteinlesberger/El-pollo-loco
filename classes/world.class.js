class World {
 character = new Character();
 enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
];
clouds = [
        new Cloud()
    ];

backgroundObjects = [
    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*2),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*2),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*2),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*2),
    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*3),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*3),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*3),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*3),

    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*4),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*4),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*4),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*4),
    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*5),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*5),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*5),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*5)
    


    ];
canvas;
ctx;
keyboard;
camera_x = 0;


constructor(canvas, keyboard) {
this.ctx = canvas.getContext('2d');
this.canvas = canvas;
this.keyboard = keyboard;
this.setWorld();
this.draw();
}

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
       this.addObjectToMap(this.backgroundObjects); 
       this.addToMap(this.character);
       this.addObjectToMap(this.clouds);
       this.addObjectToMap(this.enemies);
      
       this.ctx.translate( -this.camera_x, 0);
    
       //drawCharcter wird immer wieder aufgerufen
       let self = this;
       requestAnimationFrame(function() {
           self.draw();
       })
    }

addObjectToMap(objects) {
    objects.forEach(object => {
        this.addToMap(object);
    })
}

addToMap(mo) {
    if(mo.otherDirection) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height );

if(mo.otherDirection) {
    mo.x = mo.x * -1;
    this.ctx.restore();
}
    }


    setWorld() {
        this.character.world = this;
    }

}

