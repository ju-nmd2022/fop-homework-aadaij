/* 
whistling face emoji
that happened to be my latest used emoji
*/

// variables to be able to move the whole emoji
let x = 400;
let y = 300;
// value to scale
let s = 1;
//speech bubble string
const textBubble = "yo";

// rotate the whole emoji
rotate(0.5);

//background colour
background(162, 136, 166);

//face of the emoji
noStroke();
fill(255, 231, 76);
ellipse(x, y, 300 * s);

//mouth
noFill();
stroke(36, 16, 35);
strokeWeight(6 * s);
push();
translate(s, s);
curve(
  (x - 200) * s,
  y * s,
  x * s,
  (y + 40) * s,
  x * s,
  (y + 70) * s,
  (x - 200) * s,
  (y + 50) * s
);
curve(
  (x - 200) * s,
  (y + 50) * s,
  x * s,
  (y + 70) * s,
  x * s,
  (y + 100) * s,
  (x - 200) * s,
  (y + 150) * s
);
pop();
/*beginning control point,
cordinates for beginning point,
cordinates for end point,
ending control point
*/

//eyes
fill(36, 16, 35);
ellipse(x - 50 * s, y - 20 * s, 35 * s, 50 * s);
ellipse(x + 50 * s, y - 20 * s, 35 * s, 50 * s);

// speech bubble
push();
fill(255, 255, 255);
strokeWeight(0);
beginShape();
vertex(x + 250, y - 150);
vertex(x + 125, y - 150);
vertex(x + 100, y - 125);
vertex(x + 100, y - 150);
bezierVertex(x + 50, y - 150, x + 50, y - 200, x + 100, y - 200);
vertex(x + 100, y - 200);
vertex(x + 250, y - 200);
bezierVertex(x + 300, y - 200, x + 300, y - 150, x + 250, y - 150);
endShape();
line();
pop();

// text
noStroke();
textSize(20);
text(textBubble, x + 150, y - 169);
