let QAQ, QVQ, z;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);


QAQ = width/3;
  QVQ = height/3;
  z = 100;
}

function draw() {
  if (QAQ<= 350 && QVQ <= 350){
    background('green');
    stroke('red');
    strokeWeight(3);
    fill('blue');
    circle(QAQ ++, QVQ ++, z );
   
  }
  else{
    background('green');
    circle(QAQ --, QVQ --, z=QAQ/3 );
  }
}