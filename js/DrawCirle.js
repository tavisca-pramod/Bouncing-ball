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


function setContext()
{   
    boouncingBallContext = bouncingBallCanvas.getContext('2d');

    setInterval(drawCirle,100);

    /*boouncingBallContext.beginPath();

    boouncingBallContext.fillStyle = "#070719";

    boouncingBallContext.arc(100, 100, 20, 0, Math.PI * 2, true);

    boouncingBallContext.closePath();

    boouncingBallContext.fill();*/
}

function drawCirle()
{
  boouncingBallContext.clearRect(0,0, canvasWidth,canvasHeight);
  boouncingBallContext.beginPath();
  boouncingBallContext.fillStyle="#070719";
  
  boouncingBallContext.arc(postionOnXAxis,postionOnYAxis,radius,startAngle,endAngle,clockDirection);
  boouncingBallContext.closePath();
  boouncingBallContext.fill();
   
  postionOnXAxis+=pointsToMoveOnXAxis; 
  postionOnYAxis+=pointsToMoveOnYAxis; 
}

