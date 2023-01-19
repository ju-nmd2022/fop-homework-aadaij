background(234, 191, 203);

// body of the frog
push();
noStroke();
fill(87, 136, 108);
ellipse(300, 300, 400, 250);
ellipse(165, 240, 150, 270);
ellipse(435, 240, 150, 270);
pop();

// eyes
fill(249, 219, 109);
noStroke();
ellipse(165, 180, 90);
ellipse(435, 180, 90);

// pupils
fill(0);
// right
beginShape();
vertex(165, 135);
bezierVertex(180, 180, 180, 180, 165, 225);
bezierVertex(150, 180, 150, 180, 165, 135);
endShape();
// left
beginShape();
vertex(435, 135);
bezierVertex(450, 180, 450, 180, 435, 225);
bezierVertex(420, 180, 420, 180, 435, 135);
endShape();

// nostrils
strokeWeight(3);
stroke(0, 0, 0);
line(230, 270, 260, 280);
line(370, 270, 340, 280);
