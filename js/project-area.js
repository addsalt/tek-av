$(document).ready(function(){

	$("#projects").owlCarousel({
		singleItem : true,
		navigation: true,
		navigationText: [
		'<a class="arrow arrow-left">Prev project</a>',
		' <a class="arrow arrow-right">Next project</a>'
		],
		theme : 'projects-theme',
		mouseDrag: false
	});

	$('#projects .projects-carousel-item aside.media').each(function(){

		var slider = {

			// Not sure if keeping element collections like this
			// together is useful or not.
			

			/* properites */

			el: {
				slider: $(this).find('.slider'),
				allSlides:  $(this).find('.slide'),
				sliderNav: $(this).find(".slider-nav"),
				allNavButtons: $(this).find(".slider-nav > a")
			},

			timing: 800,
			slideWidth: $(this).find('.slider').width(), // could measure this

			/* methods */

			init: function() {
				this.bindUIEvents();
			},

			bindUIEvents: function() {

				// ... or click a thing
				
				this.el.sliderNav.on("click", "a", function(event) {
					slider.handleNavClick(event, this);
				});

			},

			handleNavClick: function(event, el) {

				event.preventDefault();

				var position = $(el).data("order");

				this.el.slider.animate({
					scrollLeft: position * this.slideWidth
				}, this.timing);

				this.changeActiveNav(el);
			},

			changeActiveNav: function(el) {
				this.el.allNavButtons.removeClass("active");
				$(el).addClass("active");
			}

		};

		slider.init();

		// http://codepen.io/BaylorRae/pen/ImGBC
		// Originally added click links, so I ported over and re-wrote

	});

	
});