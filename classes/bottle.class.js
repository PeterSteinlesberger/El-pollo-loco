class Bottle extends BackgroundObject {
    height = 70;
    width = 50;
  
    constructor(imagePath, x, y) {
     super().loadImage(imagePath);
     this.x = x;
     this.y = y;
  }
  }
  
