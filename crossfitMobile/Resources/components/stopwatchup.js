var stopwatchup =  function( m , s, fn_tick ) {
	return {
		total_sec:m*60+s,
		timer:this.timer,
		set: function(m,s) 
		{
			this.total_sec = parseInt(m,10)*60 + parseInt(s,10);
			this.time = {m:m,s:s};
			return this;
		},
		start: function() {
			Ti.API.info("start");
			var self = this;
			this.timer = setInterval( function() {
					//Ti.API.info("tick " + self.total_sec);
					self.total_sec += 1 ;
					self.time = { m : parseInt(self.total_sec/60,10), s: (self.total_sec%60) };
					fn_tick();
				}, 1000 );
			return this;
		},
		stop: function() {
			Ti.API.info("stop");
			clearInterval(this.timer);
			this.time = {m:0,s:0};
			this.total_sec = 0;
			return this;
		}
	};
};