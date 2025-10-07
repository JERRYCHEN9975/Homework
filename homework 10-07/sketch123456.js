let angle1 = 0;
let angle2 = 0;
let angle3 = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {

  noStroke();

  fill(230, 240, 255);   
  beginShape();
  vertex(0, 0);         
  vertex(width, 0);      
  vertex(0, height);     
  endShape(CLOSE);

  fill(255, 230, 240);   
  beginShape();
  vertex(width, 0);      
  vertex(width, height); 
  vertex(0, height);     
  endShape(CLOSE);

  strokeWeight(2);

  push();
  translate(width/2, height/2);
  rotate(angle1);
  fill(255, 120, 100);
  stroke(50);
  rect(0, 0, 250, 150);
  pop();

  fill(120, 200, 255, 180);
  stroke(30, 30, 100);
  ellipse(200, 200, 280, 280);

  push();
  translate(80, 80);
  rotate(angle2);
  fill(200, 255, 100, 200);
  stroke(50);
  rect(0, 0, 120, 120);
  pop();

  fill(255, 200, 80, 220);
  stroke(100, 50, 0);
  triangle(250, 50, 380, 60, 320, 160);

  push();
  translate(80, 320);
  rotate(angle3);
  fill(180, 120, 255, 200);
  stroke(60, 0, 100);
  triangle(-50, 40, 50, 40, 0, -60);
  pop();

  fill(100, 255, 200, 220);
  stroke(0, 100, 80);
  rect(300, 300, 150, 80);

  noStroke();
  fill(255, 100, 150, 180);
  ellipse(150, 220, 80);
  fill(100, 255, 220, 180);
  ellipse(240, 260, 100);

  angle1 += 0.5;
  angle2 -= 1;
  angle3 += 2;
}

