function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (ball.color[0])
  circle(ball.x, ball.y, ball.r)
  ball.xVelocity = 1
  ball.x = ball.x+ball.xVelocity
}
var ball = { 
  x:15,
  y:50,
  r:30,
  xVelocity:0,
  yVelocity:0,
  color:["blue","green","red"]
}