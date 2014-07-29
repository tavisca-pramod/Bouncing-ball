var BouncingBall = BouncingBall || {};

BouncingBall.Ball = function(postionOnXAxis,postionOnYAxis,color,htmlElementId,pointsToMove){
	this.postionOnXAxis = postionOnXAxis;
	this.postionOnYAxis = postionOnYAxis;	
	this.color = color;	
	this.htmlElementId = htmlElementId;
	this.pointsToMoveOnXAxis = pointsToMove;
	this.pointsToMoveOnYAxis = pointsToMove;
}

BouncingBall.Canvas = function(width,height,htmlElementId){
	this.width = width;	
	this.height = height;
	this.htmlElementId = htmlElementId;
	this.balls = new Array();
	this.boundaryOffSetForMax =40;
  	this.boundaryOffSetForMin =15;
	
	this.moveBall = function(ball){
		if(this.validateBoundaryOnXAxis(ball))
		{
			ball.pointsToMoveOnXAxis=-ball.pointsToMoveOnXAxis;
		}  

		if(this.validateBoundaryOnYAxis(ball))
		{
			ball.pointsToMoveOnYAxis=-ball.pointsToMoveOnYAxis;
		} 

		ball.postionOnXAxis += ball.pointsToMoveOnXAxis;
		ball.postionOnYAxis += ball.pointsToMoveOnYAxis;
		var ballToMove = document.getElementById(ball.htmlElementId);
  		ballToMove.style.left  = ball.postionOnXAxis + 'px'; 
 		ballToMove.style.top  = ball.postionOnYAxis + "px"; 
	}
	
	this.validateBoundaryOnXAxis = function (ball){
  		return (ball.postionOnXAxis< (this.boundaryOffSetForMin)) 
  		|| (ball.postionOnXAxis> (this.width - this.boundaryOffSetForMax));
	}

	this.validateBoundaryOnYAxis = function (ball){
  		return (ball.postionOnYAxis< (this.boundaryOffSetForMin)) 
  		|| (ball.postionOnYAxis> (this.height - this.boundaryOffSetForMax));
	}

	this.createBall = function(postionOnXAxis, postionOnYAxis, color){
		var postitionsToMove=10;
		var ball = new BouncingBall.Ball(postionOnXAxis, postionOnYAxis, 
		color,'ball'+ (this.balls.length + 1), postitionsToMove);

  		this.balls.push(ball);  
  		
  		var ballHtmlElement = document.createElement('div');  

  		ballHtmlElement.id = ball.htmlElementId;
  		ballHtmlElement.className  = 'circle';
  		ballHtmlElement.style.top = ball.postionOnYAxis + 'px';
  		ballHtmlElement.style.left = ball.postionOnXAxis + 'px';
  		ballHtmlElement.style.background = color;
  		
  		document.getElementById(this.htmlElementId).appendChild(ballHtmlElement);
	}	
}

