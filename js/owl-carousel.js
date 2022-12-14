jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();
		jQuery("#portfolio-grid:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false,deeplinking:false});
		jQuery(".portfolio-grid:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:3000, deeplinking:false});
		jQuery("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
		});
		jQuery("#custom_content a[data-rel^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
		});


//mixitup gallery filters
	  $('#portfolio-grid').mixitup({
		effects: ['fade','scale'],
		easing: 'snap'
	  });
//mixitup Portfolio END

//gallery Owl Carousel **/

$(document).ready(function () {
    var carousel = $("#portfolio-grid");
  carousel.owlCarousel({
    navigation:false,
	autoPlay:true,
	loop:true,
	items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,2],
	pagination:false,
    navigationText : ["prev","next"],
  });
});
//	 Owl Carousel end