$(document).ready(function() {  
	$(".button-collapse").sideNav();
	$('.scrollspy').scrollSpy();
	
	$(window).scroll(function () {
        if ($(document).scrollTop() > 150) {
            $("nav").addClass("scrolled");
        } else {
            $("nav").removeClass("scrolled");
        }
    });
});