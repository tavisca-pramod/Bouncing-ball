var canvas= null;

function setContext()
{   
  var speed= 50;
  var canvasDiv  = document.getElementById('canvas');
  canvasWidth = canvasDiv.clientWidth;
  canvasHeight = canvasDiv.clientHeight;
  canvas =   new BouncingBall.Canvas(canvasWidth,canvasHeight,canvasDiv.id);
  setInterval(circle,speed); 
}

var addBallBtn  = document.getElementById('addBallBtn');
addBallBtn.onclick = function(){
  var maxOffset = 350;
  var minOffset = 15;

  var ballColor  = document.getElementById('ballColor').value;
  
  canvas.createBall(Math.floor((Math.random() * maxOffset) + minOffset),
  Math.floor((Math.random() * maxOffset) + minOffset), ballColor);
}

function circle(){ 
  for( i=0,  noOfBalls = canvas.balls.length; i < noOfBalls; i++)
  {
    var ball = canvas.balls[i];
    canvas.moveBall(ball)
  }
}
