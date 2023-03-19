let img;
function preload() {
  img = loadImage('https://raw.githubusercontent.com/bearfoot11/img/main/bird.jpg');
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  //background(255);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(width / 2);
}






