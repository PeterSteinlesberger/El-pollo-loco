class Bottle extends BackgroundObject {
    height = 70;
    width = 50;
  
    constructor(imagePath, x, y) {
     super().loadImage(imagePath);
     this.x = x;
     this.y = y;
  }
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