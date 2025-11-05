let sizeW, sizeH, numShapes;
let x, y;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  numShapes = 25;
  sizeW = width / numShapes;
  sizeH = height / numShapes;
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(255);
  noStroke();

  let offSetX = sin(frameCount * 0.02) * 5;
  let offSetY = cos(frameCount * 0.02) * 5;

  push();
  translate(x, y);
  rotate(frameCount * 0.01);

  for (let i = numShapes; i > 0; i--) {
    push();
    translate(offSetX * i * 0.2, offSetY * i * 0.2);


    let c = color(255, 150 - i * 3, 0 + i * 4, 180);
    fill(c);
    rect(0, 0, sizeW * i, sizeH * i, 5);


    push();
  
    rotate(-frameCount * 0.03);

    let scaleFactor = 0.5 + 0.3 * sin(frameCount * 0.05 + i * 0.3);

    let innerW = sizeW * i * scaleFactor;
    let innerH = sizeH * i * scaleFactor;


    let topMid    = createVector(0, -innerH / 2);
    let rightMid  = createVector(innerW / 2, 0);
    let bottomMid = createVector(0, innerH / 2);
    let leftMid   = createVector(-innerW / 2, 0);

    let innerColor = color(100 + i * 3, 100, 255 - i * 8, 200);
    fill(innerColor);
    stroke(255);
    strokeWeight(1.2);

    beginShape();
    vertex(topMid.x, topMid.y);
    vertex(rightMid.x, rightMid.y);
    vertex(bottomMid.x, bottomMid.y);
    vertex(leftMid.x, leftMid.y);
    endShape(CLOSE);

    pop();
 

    pop();
  }
  pop();
}
