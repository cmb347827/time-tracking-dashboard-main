# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![./images/](screenshot.PNG)

### Links

- Solution URL: [Github](https://github.com/cmb347827/time-tracking-dashboard-main/tree/main/images)
- Live Site URL: [Live Github](https://cmb347827.github.io/time-tracking-dashboard-main/)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap
- Sass/SCSS
- Mobile-first workflow


### What I learned

- I tried several ways to fetch the daily, weekly, and monthly data from the JSON file. 
  The first code I tried would have used three different functions for fetching daily,weekly and monthly:
  
  ```JS
    const showDay=()=>{
       const day= document.querySelectorAll('.day');
       day.forEach(function (element) {
          $(element).addClass('show');
       });
    }

    $(window).on('load',function(){
      onClick('#daily',showDay);
      showDay();  	  
    });
  ```
  ```HTML
     <section class='col-xxl-3 d-flex flex-column'>
          <h2>Work</h2>
		  <p class='d-flex flex-xxl-column'> 
               <span class='day'>5hrs</span><!-- daily -->
               <span class='day'>Previous - 7hrs</span><!-- daily -->
               <span class='week'>32hrs</span> <!-- weekly -->
               <span class='week'>Previous - 36hrs</span> <!-- weekly -->
               <span class='month'>103hrs</span> <!-- monthly -->
               <span class='month'>Previous - 128hrs</span> <!-- monthly -->
		  </p>
     </section>
  ```
  But it seemed unwieldy, and with having to show/hide data each time a user chooses to switch between daily, weekly and monthly
- One solution was to pass displayWhere when calling displayData `displayData(url, displayWhere,'daily');`, and to implement displayData like so :
  ```
    data.forEach((element,index) => {
		 const results= document.querySelector(displayWhere[index]);
	     arr.push( `	        
		           <p class='fs-1'>
				      ${element.timeframes[partWhen].current}hrs       
				   </p>
				   <p class='last'>
				      Last ${which()}-${element.timeframes[partWhen].previous}hrs
				   </p>
				`);
		 results.innerHTML = arr[index];
    });
  ```
  But I think this is too slow , as the queryselector is called each time in the forEach loop (when switching between daily, weekly, and monthly), as opposed to once and saved in `ids`.
- I tried Masonry.js as a layout for the design , together with the Bootstrap card class, but I was not able to add gaps in between the columns and rows , so had to change to classic css grid.

### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascript, Bootstrap, Sass/SCSS, some jQuery. For now, in time I will go re-learn React ect.

### Useful resources

[how to use maps in JS](https://blog.hubspot.com/website/javascript-map)

## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)
