
//	window.addEventListener("resize", function() {
//		"use strict"; window.location.reload(); 
//	});


	document.addEventListener("DOMContentLoaded", function(){
        

    	/////// Prevent closing from click inside dropdown
		document.querySelectorAll('.dropdown-menu').forEach(function(element){
			element.addEventListener('click', function (e) {
			  e.stopPropagation();
			});
		})



		// make it as accordion for smaller screens
		if (window.innerWidth < 992) {

			// close all inner dropdowns when parent is closed
			document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
				everydropdown.addEventListener('hidden.bs.dropdown', function () {
					// after dropdown is hidden, then find all submenus
					  this.querySelectorAll('.submenu').forEach(function(everysubmenu){
					  	// hide every submenu as well
					  	everysubmenu.style.display = 'none';
					  });
				})
			});
			
			document.querySelectorAll('.dropdown-menu a').forEach(function(element){
				element.addEventListener('click', function (e) {
		
				  	let nextEl = this.nextElementSibling;
				  	if(nextEl && nextEl.classList.contains('submenu')) {	
				  		// prevent opening link if link needs to open dropdown
				  		e.preventDefault();
				  		console.log(nextEl);
				  		if(nextEl.style.display == 'block'){
				  			nextEl.style.display = 'none';
				  		} else {
				  			nextEl.style.display = 'block';
				  		}

				  	}
				});
			})
		}
		// end if innerWidth

	}); 
	// DOMContentLoaded  end

	// hover 

	document.addEventListener("DOMContentLoaded", function(){
		// make it as accordion for smaller screens
		if (window.innerWidth > 992) {
		
			document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
		
				everyitem.addEventListener('mouseover', function(e){
		
					let el_link = this.querySelector('a[data-bs-toggle]');
		
					if(el_link != null){
						let nextEl = el_link.nextElementSibling;
						el_link.classList.add('show');
						nextEl.classList.add('show');
					}
		
				});
				everyitem.addEventListener('mouseleave', function(e){
					let el_link = this.querySelector('a[data-bs-toggle]');
		
					if(el_link != null){
						let nextEl = el_link.nextElementSibling;
						el_link.classList.remove('show');
						nextEl.classList.remove('show');
					}
		
		
				})
			});
		
		}
		// end if innerWidth
		}); 
		// DOMContentLoaded  end
		// inner-img
		$(document).ready(function(){
			$(".inner-img").mouseover(function(){


			  $(this).children(".overly-color").css("background-color", "transparent");

			});
			$(".inner-img").mouseleave(function(){


				$(this).children(".overly-color").css("background-color", "rgba(254, 81, 57, .7)");
  
			  });
		});

		// Script for top Navigation Menu
		