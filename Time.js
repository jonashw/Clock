function Time(){
	return {
		hours: 0,
		minutes: 0,
		seconds: 0,
		next: function(){
			this.seconds++;
			if(this.seconds == 60){
				this.seconds = 0;
				this.minutes++;
				if(this.minutes > 60){
					this.minutes = 0;
					this.hours++;
					if(this.hours > 12) this.hours = 0;
				}
			}
			return new Date(null,null,null, this.hours, this.minutes, this.seconds);
		}
	};
}
