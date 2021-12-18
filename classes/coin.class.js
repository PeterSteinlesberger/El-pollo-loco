class Coin extends BackgroundObject {
  height = 120;
  width = 120;

  constructor(imagePath, x, y) {
   super().loadImage(imagePath);
   this.x = x;
   this.y = y;
}
}
