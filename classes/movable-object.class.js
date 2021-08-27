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

    moveRight() {
        console.log('Moving Right', character);
    }

    moveLeft() {
        setInterval(() => {
           this.x -= this.speed;  
      }, 1000 / 60);
  }

  animateImages(images) {
    let i = this.currentImage % this.IMAGES_WALKING.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

}