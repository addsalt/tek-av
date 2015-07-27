$(document).ready(function(){
	$("#projects").owlCarousel({
		singleItem : true,
		navigation: true,
		navigationText: [
		'<a class="arrow arrow-left">Prev project</a>',
		' <a class="arrow arrow-right">Next project</a>'
		],
		theme : 'projects-theme'
	});
});