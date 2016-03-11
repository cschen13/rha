$(document).ready(function() {  
	$(".button-collapse").sideNav();
	 $('.parallax').parallax();
	
	$(window).scroll(function () {
        if ($(document).scrollTop() > 150) {
            $("nav").addClass("scrolled");
        } else {
            $("nav").removeClass("scrolled");
        }
    });
});