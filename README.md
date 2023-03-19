### 3D&Texture
```js
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
```

### Eye Class
```js
var e1, e2, e3;

function setup() {
  createCanvas(640, 360);
  noStroke(); // 눈알에 그려지는 테두리에 검은 선을 없앰
  e1 = new Eye( 250,  16, 120); // 각 눈알들의 위치 좌표
  e2 = new Eye( 164, 185,  80);  
  e3 = new Eye( 420, 230, 220);
}

function draw() {
  background(102);
  
  e1.update(mouseX, mouseY); // 눈알 움직이기
  e2.update(mouseX, mouseY);
  e3.update(mouseX, mouseY);

  e1.display(); // 화면에 눈알 띄우기
  e2.display();
  e3.display();
}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0.0;

  this.update = function(mx, my) {
    this.angle = atan2(my-this.y, mx-this.x);
  }
  
  this.display = function() {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size); // 눈의 크기
    rotate(this.angle);
    fill(153, 204, 0);
    ellipse(this.size/4, 0, this.size/2, this.size/2); // 동공의 크기
    pop(); //push와 pop이 없으면 눈알들의 위치가 고정되어 있지 않고 e1을  원을 그리며 움직인다.
  }
}
```
