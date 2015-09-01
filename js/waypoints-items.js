var $win = $(window);

//Footer Animations
var $navTrigger =$('#about-us');
var $header =$('.header');

$navTrigger.waypoint(function() {
    $header.addClass('scroll-header');
}, { offset:'10%'});