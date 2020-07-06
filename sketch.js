function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(248,193,216);
  translate(200,200);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
   strokeWeight(8);
  stroke(0);
  noFill();
  let end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  push();
  rotate(end);
  stroke(0);
  line(0,0,100,0);
  pop();
  
  stroke(245,0,0);
  let end1 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end1);
  
  push();
  rotate(end1);
  stroke(245,0,0);
  line(0,0,75,0);
  pop();
  
   stroke(0,0,255);
   let end2 = map(hr % 12,0,12,0,360);
  arc(0,0,260,260,0,end2);
  
  push();
  rotate(end2);
  stroke(0,0,255);
  line(0,0,50,0);
  pop();
 
  stroke(0);
  point(0,0);
 // fill(255);
 // noStroke();
 // text(hr + ':' + mn + ':' + sc,10,200);
}