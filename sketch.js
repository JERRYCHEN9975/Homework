let posX = [200, 50, 100, 80];
let posY = [150, 30, 200, 300];
let d = [20, 40, 100, 60];
let baseColors, glowColors;
let myAngle = [15, 45, 90, 120];
let vX = [], vY = [], rotationSpeed = [], colorSpeed = [];
let orbitCenter = [], orbitRadius = [], orbitSpeed = [];

let dualCircle = {
  x: 300,
  y: 400,
  size: 80,
  angle: 0,
  vx: 2,
  vy: 1.5,
  rotationSpeed: 1.2,
  colorSpeed: 0.02,
  orbitAngle: 0,
  orbitSpeed: 0.6,
  orbitRadius: 150
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  noCursor();

  baseColors = [
    color('#4FC3F7'),
    color('#F57C00'),
    color('#81C784'),
    color('#BA68C8')
  ];

  glowColors = [
    color('#B3E5FC'),
    color('#FFB74D'),
    color('#AED581'),
    color('#CE93D8')
  ];

  for (let i = 0; i < posX.length; i++) {
    vX[i] = random(-2, 2);
    vY[i] = random(-2, 2);
    rotationSpeed[i] = random(-2, 2);
    colorSpeed[i] = random(0.01, 0.03);
    orbitCenter[i] = createVector(random(width), random(height));
    orbitRadius[i] = random(80, 200);
    orbitSpeed[i] = random(0.3, 1.2);
  }
}

function draw() {
  background(0, 5);
  drawGlowBackground();

  for (let i = 0; i < posX.length; i++) {
    let t = (sin(frameCount * colorSpeed[i]) + 1) / 2;
    let currentColor = lerpColor(baseColors[i], glowColors[i], t);
    let orbitX = orbitCenter[i].x + cos(frameCount * orbitSpeed[i] + i * 90) * orbitRadius[i];
    let orbitY = orbitCenter[i].y + sin(frameCount * orbitSpeed[i] + i * 90) * orbitRadius[i];

    push();
    translate(orbitX, orbitY);
    rotate(myAngle[i]);
    stroke(255);
    strokeWeight(2);
    fill(currentColor);
    rect(0, 0, d[i] * 2, d[i]);
    pop();

    myAngle[i] += rotationSpeed[i];
  }

  drawDualCircle();
  drawSignature();
}

function drawGlowBackground() {
  noStroke();
  for (let i = 0; i < 40; i++) {
    let x = noise(frameCount * 0.002 + i) * width;
    let y = noise(frameCount * 0.003 + i + 200) * height;
    let r = noise(frameCount * 0.01 + i) * 100 + 50;
    fill(255, 255, 255, 8);
    ellipse(x, y, r, r);
  }
}

function drawDualCircle() {
  let t = (sin(frameCount * dualCircle.colorSpeed) + 1) / 2;
  let c1 = lerpColor(color('#29B6F6'), color('#81D4FA'), t);
  dualCircle.orbitAngle += dualCircle.orbitSpeed;
  dualCircle.x = width / 2 + cos(dualCircle.orbitAngle) * dualCircle.orbitRadius;
  dualCircle.y = height / 2 + sin(dualCircle.orbitAngle) * dualCircle.orbitRadius;

  push();
  translate(dualCircle.x, dualCircle.y);
  rotate(dualCircle.angle);
  noStroke();
  fill(c1);
  ellipse(-dualCircle.size / 4, 0, dualCircle.size);
  ellipse(dualCircle.size / 4, 0, dualCircle.size);
  pop();

  dualCircle.angle += dualCircle.rotationSpeed;
}

function drawSignature() {
  textSize(22);
  stroke('#FFF59D');
  fill('#FFB74D');
  text('Rongqi Chen', width - 190, height - 30);
}
