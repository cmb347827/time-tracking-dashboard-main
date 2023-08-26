'use strict'; 

const colors ={
	'Almost White': 'hsl(0, 0%, 98%)',
	'Lighter Gray': 'hsl(11, 2%, 95%)',
	'Overlay': 'hsla(8, 24%, 2%, 0.5)',
};

const displayWhere = ['#work','#play','#study','#exercise','#social','#self-care'];
const url = 'https://raw.githubusercontent.com/cmb347827/time-tracking-dashboard-main/main/data.json';

$(window).resize(function(){
	location.reload();
});
const onClick = (selector, handler) => {
  document.querySelector(selector).addEventListener('click', handler,false);
};



$(window).on('load',function(){
	let ids = displayWhere.map(function(element){
		let id = document.querySelector(element);
		return id;
	});
	//display daily on first load
	displayData(url, ids,'daily');
 
	//display daily on the user clicking the daily button
	onClick('#daily',function(){
	    displayData(url, ids,'daily');
    });
	//display weekly on the user clicking the weekly button
	onClick('#weekly',function(){
	    displayData(url, ids,'weekly');
    });
	//display monthly on the user clicking the monthly button
	onClick('#monthly',function(){
	    displayData(url, ids,'monthly');
    });
});