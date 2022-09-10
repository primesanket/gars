jQuery(document).ready(function($){
"use strict";
$( "a.brand-logo" ).on({
mouseenter: function() {
$('.brand-logo').addClass('animated pulse')
}, mouseleave: function() {
$('.brand-logo').removeClass('animated pulse');
}
});
var $top1= $('.header-inner').offset().top  +50;
$(window).scroll(function(){
if ($(window).scrollTop()>$top1)   {
$('#fixed-header').addClass('header-fixed');
$(".top-bar").hide();
}else{
$('#fixed-header').removeClass('header-fixed');
$(".top-bar").show();
}
});
$('.materialboxed').materialbox();
$('.parallax').parallax();
$('.modal-trigger').leanModal();
$('.datepicker').pickadate({
selectMonths: false,
selectYears: false,
});
$('.scrollspy').scrollSpy();
$('#sub-nav a, .smoothscroll').on('click',function(event){
var $anchor = $(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top -78}, 1500,'easeInOutExpo');
event.preventDefault();
});
$( ".modal" ).on({
click: function() {
video_containers = $('.video-container');
video_containers.html( video-container.html() );
}
});
});
wow = new WOW({
animateClass: 'animated',
offset: 100
}
);
wow.init();
jQuery(document).ready(function($){
"use strict";
$("#resbutton").click(function() {
if ($("#reservation_form").valid()) {
$("#reservation_form").submit();
}
});
});