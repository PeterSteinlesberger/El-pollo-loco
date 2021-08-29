class World {
 character = new Character();
 level = level1;
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
this.checkCollisions();
}

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
       this.addObjectToMap(this.level.backgroundObjects); 
       this.addToMap(this.character);
       this.addObjectToMap(this.level.clouds);
       this.addObjectToMap(this.level.enemies);
      
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
        this.flipImage(mo);
    }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
      
if(mo.otherDirection) {
    this.flipImageBack(mo);
}
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if( this.character.isColliding(enemy) ) {
                    console.log('Collision with Character', enemy);
                }
            });
        }, 200);
    }


    setWorld() {
        this.character.world = this;
    }

flipImage(mo) {
    this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
}

flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
}




}
