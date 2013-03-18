function ClockDisplay(clock,el,sideLength,clocklabel){
	var can = this.canvas = el;
	var ctx = can.getContext("2d");
	//configure the canvas
	can.setAttribute("height",sideLength);
	can.setAttribute("width",sideLength);
	can.style.width = can.style.height = sideLength + "px";
	//set values of interest
	var center = Math.floor(sideLength / 2);
	var radius = center * 0.85;

	this.display = function(){
		var hh = clock.getHourHand();
		var mh = clock.getMinuteHand();
		var sh = clock.getSecondHand();

		//paint outer circle
		ctx.beginPath();
		ctx.arc(center,center,radius,0,2 * Math.PI);
		ctx.stroke();
		//paint center circle
		ctx.beginPath();
		ctx.arc(center,center,radius/19,0,2 * Math.PI);
		ctx.fill();

		//re-orient the canvas to the center of the clock
		ctx.translate(center,center);

		//display the hour numbers 
		for(var i=1; i<=12; i++){
			//the canvas is roated 90 degrees, so we've gotta use the position of one number to display another
			var label = i + 3;
			displayHourNumber(i, label > 12 ? label - 12 : label);
		}

		//rotate 90 degrees CCW for easier printing
		ctx.rotate(-Math.PI / 2);

		//display the hands
		displayHand(hh,4);
		displayHand(mh,2);
		displayHand(sh,1);
		ctx.rotate(Math.PI / 2);
		ctx.translate(-center,-center);

		//display the time as a string
		ctx.textAlign="center";
		if(!!clocklabel){
			ctx.font="bold 10px Georgia";
			ctx.fillText(clocklabel,center,8);
		}
		ctx.font="10px Georgia";
		ctx.textAlign="center";
		ctx.fillText(clock.toString(),center,sideLength-3);

		function displayHand(hand,lineWidth){//assumed 0,0 is the center of the clock
			ctx.lineWidth = lineWidth;
			ctx.beginPath();
			ctx.moveTo(0,0);
			var t = hand.getTriangle();
			var theta = t.getTheta();
			var x = t.getX() * radius;
			var y = t.getY() * radius;
			ctx.lineTo(x, y);
			ctx.stroke();
		}
		function displayHourNumber(hour,label){
			var nh = new HourHand(hour,0.85);
			var t = nh.getTriangle();
			var x = t.getX() * radius;
			var y = t.getY() * radius;
			ctx.textAlign="center";
			ctx.font="10px Georgia";
			ctx.fillText(label,x,y);
		}
		return this;
	}
}
