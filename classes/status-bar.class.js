class StatusBar extends DrawableObject {

IMAGES_ENERGY = [
'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
];

percentage = 500;


constructor() {
super();
this.loadImages(this.IMAGES_ENERGY);
this.setPercentage(500);
this.x = 5;
this.y = -5;
this.height = 45;
this.width = 180;
}


setPercentage(percentage) {
    this.percentage = percentage;
let path = this.IMAGES_ENERGY[this.resolveImageIndex()];
    this.img = this.imageCache[path];
}

    resolveImageIndex() {
if(this.percentage >= 470) {
return 5;
} else if(this.percentage > 360) {
    return 4;
} else if(this.percentage > 250) {
    return 3;
} else if(this.percentage > 140) {
    return 2;
} else if(this.percentage > 30) {
    return 1;
} else {
    return 0;
}
}

}