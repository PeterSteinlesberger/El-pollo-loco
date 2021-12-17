class DrawableObject {
    x = 120;
    y = 210;
    img;
    height = 220;
   width = 90;
imageCache = {};
currentImage = 0;

loadImage(path) {
    this.img = new Image();
    this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height );
    }

    loadImages(arr) {
        arr.forEach((path) => {
     let img = new Image();
    img.src = path;
    this.imageCache[path] = img;   
        });
    }

    drawFrame(ctx) {
        if(this instanceof Character || this instanceof Chicken) {
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    } 


}