class CoinBar extends DrawableObject {
    IMAGES_COINS = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'
    ];
    percentage;


constructor() {
super();
this.loadImages(this.IMAGES_COINS);
this.setPercentage(0);
this.x = 5;
this.y = 74;
this.height = 45;
this.width = 180;
}


setPercentage(percentage) {
    this.percentage = percentage;
let path = this.IMAGES_COINS[this.resolveImageIndex()];
    this.img = this.imageCache[path];
}

    resolveImageIndex() {
if(this.percentage >= 100) {
return 5;
} else if(this.percentage > 80) {
    return 4;
} else if(this.percentage > 60) {
    return 3;
} else if(this.percentage > 40) {
    return 2;
} else if(this.percentage > 20) {
    return 1;
} else {
    return 0;
}
}

}