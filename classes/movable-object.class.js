class MoveableObject {
    x = 120;
    y = 210;
    img;
    height = 220;
   width = 90;
imageCache = {};

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
    }


}