// set context
//initialize the diagram
//fill color in circle
//draw circle
//draw after an interval
//move circle position

var boouncingBallContext;

var postionOnXAxis=50;
var postionOnYAxis=270;
var radius = 20;
var startAngle =0;
var endAngle = Math.PI*2;//THTS A FULL CIRCLE
var clockDirection = true;
var pointsToMoveOnXAxis=5;
var pointsToMoveOnYAxis=5;
var canvasHeight = 500;
var canvasWidth = 500;
var boundaryOffSet =5;


function setContext()
{   
    boouncingBallContext = bouncingBallCanvas.getContext('2d');

    setInterval(drawCirle,100); 
}

function drawCirle()
{
  boouncingBallContext.clearRect(0,0, canvasWidth,canvasHeight);
  boouncingBallContext.beginPath();
  boouncingBallContext.fillStyle="#070719";
  
  boouncingBallContext.arc(postionOnXAxis,postionOnYAxis,radius,startAngle,endAngle,clockDirection);
  boouncingBallContext.closePath();
  boouncingBallContext.fill();
 
  if( validateXAxisPostion)
  {
    pointsToMoveOnXAxis=-pointsToMoveOnXAxis; 
  }

  if(validateYAxisPostion)
  {
     pointsToMoveOnYAxis=-pointsToMoveOnYAxis;
  } 

  moveBall();
}

function validateXAxisPostion()
{
   return postionOnXAxis<(radius+boundaryOffSet) || postionOnXAxis>canvasWidth-(radius+boundaryOffSet);
}

function validateYAxisPostion()
{
   return postionOnYAxis<(radius+boundaryOffSet) || postionOnYAxis>canvasHeight-(radius+boundaryOffSet);
}

function moveBall()
{
  postionOnXAxis+=pointsToMoveOnXAxis; 
  postionOnYAxis+=pointsToMoveOnYAxis; 
}