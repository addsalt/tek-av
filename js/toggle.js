// Toggle Nav JS

var donateTab = document.querySelector('#donate-tab');
	
	document.querySelector('.donate-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (donateTab.getAttribute('data-state') == 'expanded'){
			
			donateTab.setAttribute('data-state', 'collapsed');
		
		}else{
		
			donateTab.setAttribute('data-state', 'expanded');
		
		}
	});

var volunteerTab = document.querySelector('#volunteer-tab');
	
	document.querySelector('.volunteer-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (volunteerTab.getAttribute('data-state') == 'expanded'){
			
			volunteerTab.setAttribute('data-state', 'collapsed');
		
		}else{
		
			volunteerTab.setAttribute('data-state', 'expanded');
		
		}
	});

var seeMore = document.querySelector('.see-more');
	
	document.querySelector('.see-more-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (seeMore.getAttribute('data-state') == 'expanded'){
			
			seeMore.setAttribute('data-state', 'collapsed');
		
		}else{
		
			seeMore.setAttribute('data-state', 'expanded');
		
		}
	});

var seeMoreTwo = document.querySelector('.see-more-2');
	
	document.querySelector('.see-more-btn-2').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (seeMoreTwo.getAttribute('data-state') == 'expanded'){
			
			seeMoreTwo.setAttribute('data-state', 'collapsed');
		
		}else{
		
			seeMoreTwo.setAttribute('data-state', 'expanded');
		
		}
	});

var seeMoreThree = document.querySelector('.see-more-3');
	
	document.querySelector('.see-more-btn-3').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (seeMoreThree.getAttribute('data-state') == 'expanded'){
			
			seeMoreThree.setAttribute('data-state', 'collapsed');
		
		}else{
		
			seeMoreThree.setAttribute('data-state', 'expanded');
		
		}
	});