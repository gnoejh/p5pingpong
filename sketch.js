let playerPaddle;
let aiPaddle;
let ball;
//TODO Scores
let countPlayer = 0;
let countAI = 0;

function setup() {
  createCanvas(624, 351);
  playerPaddle = new Paddle(26);
  aiPaddle = new Paddle(width - 48);
  ball = new Ball();
}
 
function draw() {
  background(0);
     
  playerPaddle.display();
  aiPaddle.display();
 
  //Human paddle
  if (playerPaddle.isUp) {
    playerPaddle.up();
  } else if (playerPaddle.isDown) {
    playerPaddle.down();
  }

  //TODO Use AI Paddle
  playerPaddle.update(); // add this
  aiPaddle.update();     // and this
  processAI();   // and add this


  //Draw ball
  ball.update()
  ball.display()

  //TODO Collision
  ball.hasHitPlayer(playerPaddle); 
  ball.hasHitAi(aiPaddle); 
  
  //TODO half line
  stroke(255); // gives a white stroke
  line(width/2, 0, width/2, height); // draws a line between two points line(x,y,x1,y1)

  //TODO Scores
  text(countPlayer,width/2-60,50)
  text(countAI,width/2+10,50)
  textSize(32)
  
}

//TODO AI Paddle
function processAI() {
  let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2;
     
  if (middleOfPaddle > ball.y) {
    aiPaddle.isUp = true;
    aiPaddle.isDown = false;
  } else {
    aiPaddle.isDown = true;
    aiPaddle.isUp = false;
 
  }
}

//Remove
function keyPressed() {
  if (keyCode == UP_ARROW) {
      playerPaddle.isUp = true;
  } else if (keyCode == DOWN_ARROW) {
      playerPaddle.isDown = true;
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW) {
      playerPaddle.isUp = false;
  } else if (keyCode == DOWN_ARROW) {
      playerPaddle.isDown = false;
  }
}