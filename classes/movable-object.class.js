class MoveableObject {
    x = 120;
    y = 210;
    img;
    height = 220;
   width = 90;
imageCache = {};
currentImage = 0;
speed = 0.11;
otherDirection = false;
speedY = 0;
acceleration = 2.65;

applyGravity() { 
   
    setInterval(() => { 
        if(this.isAboveGround() || this.speedY > 0) {
this.y -= this.speedY;
this.speedY -= this.acceleration; 
        }
    }, 1000 / 25);
}


isAboveGround() {
   return this.y < 165;
}


loadImage(path) {
this.img = new Image();
this.img.src = path;
}

loadImages(arr) {
    arr.forEach((path) => {
 let img = new Image();
img.src = path;
this.imageCache[path] = img;   
    });
}

draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height );
}


drawFrame(ctx) {
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "blue";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
}


    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
           this.x -= this.speed;  
  }

  jump() {
    this.speedY = 27;
  }

  animateImages(images) {
    let i = this.currentImage % this.IMAGES_WALKING.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }



}