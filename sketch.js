let img;
let a = 0.01;

function preload() {
  img = loadImage('https://raw.githubusercontent.com/bearfoot11/img/main/bird.jpg');
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(255);
  
  
  rotateX(frameCount * a);
  rotateY(frameCount * a);
  rotateZ(frameCount * a);
  
  //rotateX(mouseY * a);
  //rotateY(mouseX * a);
  
  texture(img);
  
  box(img.width / 2);
  a = a + 0.00001;
}




