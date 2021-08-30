class StatusBar {

IMAGES_ENERGY = [
'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
'img/7.Marcadores/Barra/Marcador vida/azul/0_.png'
];

percentage = 100;


constructor() {
this.loadImages(this.IMAGES_ENERGY);

}


setPercentage(percentage) {
    this.percentage = percentage;
}
    rexolveImageIndex() {
if(this.percentage == 100) {
return 5;
} else if(this.percentage > 80) {
    return 4;
} else if(this.percentage > 60) {
    return 3;
} else if(this.percentage > 40) {
    return 2;
} else if(this.percentage > 20) {
    return 1;
} else if(this.percenage < 20) {
    return 0;
}


}

}