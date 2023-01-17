(function () {
	"use strict";
	$('#slid_item').skdslider({
		'delay': 5000
		, 'animationSpeed': 2000
		, 'showNextPrev': false
		, 'showPlayButton': false
		, 'autoSlide': true
		, 'animationType': 'fading'
	});
	
	var navOffset = $('nav.navbar').offset().top;

		$('nav.navbar').wrap('<div class="nav-wrapper"></div>');
		$('.nav-wrapper').height($('nav.navbar').outerHeight());

		$(window).scroll(function(){

			var scrollPos = $(window).scrollTop();

			if( scrollPos >= navOffset ){
				$('nav.navbar').addClass('navbar-fixed-top');
				$('.navbar-right').css('margin-right', '0');
			} else{
				$('nav.navbar').removeClass('navbar-fixed-top');
				$('.navbar-right').css('margin-right', '-15px');
			}
		});
	
	
	//modal
	$("#myModal").on('hidden.bs.modal', function (e) {

	 $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
	});
	
	
	
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider_item'
	});
	$('.slider_item').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
		centerPadding:0,
	  centerMode: true,
		arrows:false,
		centerMode:true,
	  focusOnSelect: true
	});
	

	
var singleScreenshot = $('.screenshot_slider');
singleScreenshot.slick({
	centerMode: true,
	dots: true,
	arrows:false,
	draggable:false,
	centerPadding: '0',
	slidesToShow: 5,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: false
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
});
	
function screenshotTransform(){
	var singleScreenshotCenter= $('.single_screenshot.slick-slide.slick-center');
 	singleScreenshotCenter.prev().addClass('prEv').prev().addClass('prEV');
	singleScreenshotCenter.next().addClass('neXt').next().addClass('neXT');
}
screenshotTransform();
singleScreenshot.on('beforeChange', function(){
 	$('.single_screenshot.slick-slide').removeClass('prEv prEV neXt neXT');
}).on('afterChange', function(){
	screenshotTransform();
});	
	
})(jQuery);


$(function () {
	//a[href*="#"]:not([href="#"])
    $('#appon_nav > ul > li a').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 65
                }, 1000);
                return false;
            }
        }
    });
});
