function Clock(date, hourHandLength, minuteHandLength, secondHandLength){
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hours   = date.getHours  ();

	var isAM = true;

	if (hours > 12){
		hours -= 12;
		isAM = false;
	};
	
	var secondHand = new SecondHand(seconds,secondHandLength);
	var minuteHand = new MinuteHand(minutes,minuteHandLength);
	var hourHand   = new HourHand  (hours  ,hourHandLength);

	this.getHourHand   = function(){ return   hourHand; };
	this.getMinuteHand = function(){ return minuteHand; };
	this.getSecondHand = function(){ return secondHand; };

	this.toString = function(){
		return (hours == 0 ? 12 : padNumber(hours))
			+ ":" + padNumber(minutes)
			+ ":" + padNumber(seconds)
			+ " " + (isAM ? "AM" : "PM")
		;
	};
}

function padNumber(n){
	return (n < 10) ? "0" + n : n;
};
