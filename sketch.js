let playerPaddle;
let aiPaddle;
 
function setup() {
  createCanvas(624, 351);

  //TODO Paddle instances
  playerPaddle = new Paddle(26);
  aiPaddle = new Paddle(width - 48);
}
 
function draw() {
  background(0);

  //TODO Draw Paddles
  playerPaddle.display();
  aiPaddle.display();
}