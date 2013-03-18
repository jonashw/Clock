function Triangle(H,theta){
	/*  
		|\
		| \
		|  \
		|   \  H
	  y |    \
		|     \
		|     _\
		|_   /th\
		|_|_|____\
			 x 
	   
	*/
	var slope = Math.tan(degreesToRadians(theta));
	var x = H * Math.cos(degreesToRadians(theta));
	var y = H * Math.sin(degreesToRadians(theta));

	this.getTheta = function(){ return theta; };
	this.getH     = function(){ return H;     };
	this.getX     = function(){ return x;     };
	this.getY     = function(){ return y;     };

	this.getHLineFunction = function(){
		return function(x){ return slope * x; };
	};
}

function degreesToRadians(deg){
	return deg * Math.PI / 180;
}
