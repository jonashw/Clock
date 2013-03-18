function TextCanvas(el){
	//canvas.getContext("2d");
	var contexts = {};
	this.getContext = function(key){
		if(!(key in contexts)){
			contexts[key] = new TextCanvas2DContext();
		}
		return contexts[key];
	}
}
