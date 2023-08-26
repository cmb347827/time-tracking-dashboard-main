function getJson(url) {
    return fetch(url)
     .then(response => response.json())
     .then(response => response)
     .catch(err => {
       console.error(err);
     });  
}

async function displayData(url,displayWhere,partWhen){
	
	const data= await(getJson(url));
	let arr =[]; let displayArr=[];
	
	let which = ()=>{
		if(partWhen==='daily'){ return 'Day';}
		if(partWhen==='weekly'){return 'Week';}
		return 'Month';
	}
		
	data.forEach((element,index) => {
		 //const results= document.querySelector(displayWhere[index]);
	     arr.push( `	        
		           <p class='fs-1'>
				      ${element.timeframes[partWhen].current}hrs       
				   </p>
				   <p class='last'>
				      Last ${which()}-${element.timeframes[partWhen].previous}hrs
				   </p>
				`);
		 //results.innerHTML = arr[index];
		 displayWhere[index].innerHTML= arr[index];
    });
	
	/*let display = displayWhere.map(function(element,index){
		return element.innerHTML = arr[index];
	});*/
	
}