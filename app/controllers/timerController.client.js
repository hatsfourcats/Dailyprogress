// Put timer handling in this file. Keep state, update view etc. 
'use strict';

var timerState = {
started:false,
sessionTime:0,
startTime:0,
activeHours:[],
tags:[],
startDate:0,
endDate:0,
displayUpdateInterval:0,

getMinutes: function(){
	return Math.ceil(this.sessionTime / 60); 	
	},
resetState: function(){
	this.started = false;
	this.sessionTime = 0;
	this.startTime = 0;
	this.startDate = 0;
	this.endDate = 0;
	this.tags=[];
	this.displayUpdateInterval = 0;
	$('#taskNotes').val("");
	},

getNiceTime :function(){
let niceTime = new Date(this.startDate);
niceTime =  (niceTime.getHours() %12 || 12) + ":" + (niceTime.getMinutes()  > 9 ? niceTime.getMinutes() : "0" + niceTime.getMinutes() ); 
return niceTime;
	
}
};


