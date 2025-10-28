let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 230, 255);
  movers.push(new Mover(width * 0.25, height * 0.35, 2.5, 1.8, 60, "star", color(220, 40, 70), color(255, 230, 180)));
  movers.push(new Mover(width * 0.75, height * 0.35, -2, 2.2, 70, "square", color(30, 120, 200), color(200, 255, 220)));
  movers.push(new Mover(width * 0.25, height * 0.75, 1.6, -2.4, 55, "circle", color(90, 20, 150), color(255, 200, 240)));
  movers.push(new Mover(width * 0.75, height * 0.75, -2.8, -1.6, 65, "triangle", color(10, 160, 90), color(255, 245, 180)));
}

function draw() {
  noStroke();
  fill(200, 230, 255, 60);
  rect(0, 0, width, height);
  for (let m of movers) {
    m.update();
    m.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Mover {
  constructor(x, y, vx, vy, size, shape, strokeCol, fillCol) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.baseSize = size;
    this.size = size;
    this.shape = shape;
    this.strokeCol = strokeCol;
    this.fillCol = fillCol;
    this.pulsePhase = random(TWO_PI);
    this.pulseSpeed = random(0.02, 0.06);
    this.pulseAmount = random(0.06, 0.18);
  }

  update() {
    this.pos.add(this.vel);
    let pulse = 1 + sin(frameCount * this.pulseSpeed + this.pulsePhase) * this.pulseAmount;
    this.size = this.baseSize * pulse;
    let r = this.baseSize * 0.6;
    let bounced = false;
    if (this.pos.x - r <= 0) {
      this.pos.x = r;
      this.vel.x *= -1;
      bounced = true;
    } else if (this.pos.x + r >= width) {
      this.pos.x = width - r;
      this.vel.x *= -1;
      bounced = true;
    }
    if (this.pos.y - r <= 0) {
      this.pos.y = r;
      this.vel.y *= -1;
      bounced = true;
    } else if (this.pos.y + r >= height) {
      this.pos.y = height - r;
      this.vel.y *= -1;
      bounced = true;
    }
    if (bounced) this.onBounce();
  }

  onBounce() {
    if (this.shape === "circle") this.shape = "triangle";
    else if (this.shape === "triangle") this.shape = "star";
    else if (this.shape === "star") this.shape = "square";
    else if (this.shape === "square") this.shape = "circle";
    else this.shape = "circle";
    let tmp = this.strokeCol;
    this.strokeCol = this.fillCol;
    this.fillCol = tmp;
    let scaleChange = random(0.85, 1.25);
    this.baseSize = constrain(this.baseSize * scaleChange, 25, 180);
    this.pulseSpeed = random(0.02, 0.07);
    this.pulseAmount = random(0.05, 0.22);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    strokeWeight(3);
    stroke(this.strokeCol);
    fill(this.fillCol);
    let s = this.size;
    if (this.shape === "circle") ellipse(0, 0, s, s);
    else if (this.shape === "square") {
      rectMode(CENTER);
      push();
      rotate(frameCount * 0.005 + this.pos.x * 0.0005);
      rect(0, 0, s, s);
      pop();
    } else if (this.shape === "triangle") {
      let h = (sqrt(3) / 2) * s;
      beginShape();
      vertex(-s / 2, h / 3);
      vertex(s / 2, h / 3);
      vertex(0, -2 * h / 3);
      endShape(CLOSE);
    } else if (this.shape === "star") {
      this.drawStar(0, 0, s / 2, s / 4, 5);
    } else ellipse(0, 0, s, s);
    pop();
  }

  drawStar(cx, cy, outerR, innerR, points) {
    push();
    translate(cx, cy);
    beginShape();
    let angle = TWO_PI / (points * 2);
    let a = -HALF_PI;
    for (let i = 0; i < points * 2; i++) {
      let r = (i % 2 === 0) ? outerR : innerR;
      let x = cos(a) * r;
      let y = sin(a) * r;
      vertex(x, y);
      a += angle;
    }
    endShape(CLOSE);
    pop();
  }
}
