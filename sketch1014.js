let x, y, r;
let xSpeed, ySpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('lightblue');

  r = 100;
  x = random(r, width - r);
  y = random(r, height - r);

  xSpeed = 3;
  ySpeed = 2;
}

function draw() {
  x += xSpeed;
  y += ySpeed;

  if (x + r > width || x - r < 0) {
    xSpeed *= -1;
  }
  if (y + r > height || y - r < 0) {
    ySpeed *= -1;
  }

  let d = dist(mouseX, mouseY, x, y);

  if (d < r) {
    fill('orange');
  } else {
    fill('blue');
  }

  stroke(255);      
  strokeWeight(3);  
  circle(x, y, r * 2);

  if (mouseIsPressed) {
    noStroke();
    fill(255);
    circle(mouseX, mouseY, 10);
  }
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    background('lightblue');
  }

  if (key === 'u' || key === 'U') {
    r += 20;
  }

  if (key === 'd' || key === 'D') {
    r = max(20, r - 20);
  }
}
