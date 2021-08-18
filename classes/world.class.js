class World {
 character = new Character();
 enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    ];
canvas;
    ctx;

constructor(canvas) {
this.ctx = canvas.getContext('2d');
this.canvas = canvas;
this.drawCharacter();

this.drawEnemies();
}

    drawCharacter() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
    

       //drawCharcter wird immer wieder aufgerufen
       let self = this;
       requestAnimationFrame(function() {
           self.drawCharacter();
       })
    }

drawEnemies() {
for (let i = 0; i < enemies.length; i++) {
    enemie = this.enemies[i];
    this.ctx.drawImage(this.enemie.img, this.enemie.x, this.enemie.y, this.enemie.width, this.enemie.height);
}
}

}