var postionOnXAxis = 60;
var postionOnYAxis=250;
var pointsToMoveOnXAxis=5;
var pointsToMoveOnYAxis=5;

function setContext()
{   
  setInterval(circle,40); 
}

function circle(){
       
document.getElementsByClassName("ball")[0].style.left  = postionOnXAxis + "px";
document.getElementsByClassName("ball")[0].style.top  = postionOnYAxis + "px";

if(validateBoundaryOnXAxis())
  {
    pointsToMoveOnXAxis=-pointsToMoveOnXAxis; 
  }

  if(validateBoundaryOnYAxis())
  {
     pointsToMoveOnYAxis=-pointsToMoveOnYAxis;
  } 

  moveBall();
}

function validateBoundaryOnXAxis()
{
  var boundaryOffSetForMax =37;
  var boundaryOffSetForMin =15;
  var canvasWidth = 400;

  return (postionOnXAxis<boundaryOffSetForMin) || (postionOnXAxis>(canvasWidth-boundaryOffSetForMax));
}

function validateBoundaryOnYAxis()
{  
  var boundaryOffSetForMax =37;
  var boundaryOffSetForMin =15;
  var canvasHeight = 400;

  return (postionOnYAxis<boundaryOffSetForMin) || (postionOnYAxis>(canvasHeight-boundaryOffSetForMax));
}

function moveBall()
{
  postionOnXAxis += pointsToMoveOnXAxis; 
  postionOnYAxis  += pointsToMoveOnYAxis;    
}