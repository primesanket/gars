jQuery(document).ready(function($){
"use strict";

// Menu Logo Hover logo animation

$( "a.brand-logo" ).on({
  mouseenter: function() {
    $('.brand-logo').addClass('animated pulse')
  }, mouseleave: function() {
   $('.brand-logo').removeClass('animated pulse');
  }
});
// logo animation
 
// Menu On Mobile Resolution
// $(function(){
// 	$('#sub-nav').slicknav({
// 	label: '',
// 	duration: 1000,
// 	easingOpen: "easeOutQuint", //available with jQuery UI
// 	closeOnClick:true
// });
// });
// Menu On Mobile Resolution


//Top Header Fixed
var $top1= $('.header-inner').offset().top  +50;   

$(window).scroll(function()
{   

    if ($(window).scrollTop()>$top1)   
    {
     $('#fixed-header').addClass('header-fixed');
	   $(".top-bar").hide();
    }
    else
    {
     $('#fixed-header').removeClass('header-fixed');
	 	   $(".top-bar").show();
     }
     
});
//Top Header Fixed end

/**********************1. Header  END**********************/


/*************************************************************
		  		2. GENERAL SECTION
**************************************************************/

//Preloader
/* $("body").jpreLoader(
			  {
				splashID:"#jSplash",
				showPercentage:!0,
				autoClose:!0,
				showSplash: true,
				splashFunction:function(){
				$("#circle").delay(1250).animate({opacity:1},700,"linear");
			  }
			 });   */    
//Preloader end

// Modal Section
 $('.materialboxed').materialbox();
// Modal Section

// Parallax Section
 $('.parallax').parallax();
// Parallax Section
 
// Modal Section
$('.modal-trigger').leanModal();  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
// Modal Section

// Date Time Picker Section
$('.datepicker').pickadate({
    selectMonths: false, // Creates a dropdown to control month
    selectYears: false, // Creates a dropdown of 15 years to control year
  });
// Date Time Picker Section

//scrollSpy
$('.scrollspy').scrollSpy();
// smooth scrolling 


//Navigation smooth Scrolling
$('#sub-nav a, .smoothscroll').on('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top -78}, 1500,'easeInOutExpo');
		event.preventDefault();
});
//Navigation smooth Scrolling

/*   modal video Stop On Click Close Button  */
$( ".modal" ).on({
  click: function() {
   video_containers = $('.video-container');				// Video Stoped While The Modal Is Closed
   video_containers.html( video-container.html() );
}
});
/****************** 2. GENERAL SECTION END******************/

});//ready end


// WOW Init Reveal Animation  
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
   wow.init();
//   
// wow end 


// ******************************************************************************************
// Reservation Form Start
// ******************************************************************************************
jQuery(document).ready(function($){
"use strict";	

   $("#resbutton").click(function() {
    if ($("#reservation_form").valid()) {
        $("#reservation_form").submit();
    }
});

  $('#reservation_form').validate(
    {
    rules: {
   /* date: {
    required: true
    },*/
	time: {
    required: true,
    },
    noofpeople: {
    required: true,
   
    }
    },
    highlight: function(element) {
    $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
    },
	submitHandler: function(form) {
					// do other stuff for a valid form
					$.post('reservation_form.html', $("#reservation_form").serialize(), function(data) { // action file is here 
						$('#reservation_form_thanks').html(data);
					});
				}
    });

    }); // end document.ready


//Reservation Form END

// ******************************************************************************************
// Contact Form Start
// ******************************************************************************************
jQuery(document).ready(function($){
"use strict";	

$("#conbutton").click(function() {
    if ($("#contact_form").valid()) {
        $("#contact_form").submit();
    }
});


  $('#contact_form').validate(
    {
    rules: {
    name: {
    minlength: 2,
    required: true
    },
	phone: {
    required: true,
    },
    email: {
    required: true,
    email: true
    },
    message: {
    minlength: 2,
    required: true
    }
    },
    highlight: function(element) {
    $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
    },
	submitHandler: function(form) {
					// do other stuff for a valid form
					$.post('contact_form.html', $("#contact_form").serialize(), function(data) { // action file is here 
						$('#contact_form_thanks').html(data);
					});
				}
    });
    }); // end document.ready


//Contact Form END