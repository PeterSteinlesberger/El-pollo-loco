let canvas;
let ctx; 

let world = new World();

function init() {
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

console.log('meine Welt ist', world.enemies);

}