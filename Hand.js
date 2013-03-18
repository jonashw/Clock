function Hand(length, current_value, max_value){
	this.current_value = current_value;
	this.max_value = max_value;
	this.length = length;

	var degrees = current_value * 360 / max_value;
	var triangle = new Triangle(length, degrees);

	this.getDegrees = function(){
		return degrees;
	};

	this.getCurrentValue = function(){ return current_value; };
	this.getTriangle     = function(){ return triangle;      };
}

SecondHand.prototype = new Hand();
function SecondHand(seconds,length){
	Hand.call(this, length, seconds, 60);
}

MinuteHand.prototype = new Hand();
function MinuteHand(minutes, length){
	Hand.call(this, length, minutes, 60);
}

HourHand.prototype = new Hand();
function HourHand(hours, length){
	var hours = hours > 12 ? hours - 12 : hours; //convert 24-H time to 12-H time
	Hand.call(this, length, hours, 12);
}
