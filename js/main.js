;(function () {

	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	// Main Menu Superfish
	var mainMenu = function() {

		$('#fh5co-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	//Date Picker

   $('#date-start, #date-end').datepicker();

   [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
      new SelectFx(el);
   } );

	// Offcanvas and cloning of the main menu
	var offcanvas = function() {

		var $clone = $('#fh5co-menu-wrap').clone();
		$clone.attr({
			'id' : 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class' : '',
			'id' : ''
		});

		$('#fh5co-page').prepend($clone);

		// click the burger
		$('.js-fh5co-nav-toggle').on('click', function(){

			if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			} else {
				$('body').addClass('fh5co-offcanvas');
			}
			// event.preventDefault();

		});

		$('#offcanvas-menu').css('height', $(window).height());

		$(window).resize(function(){
			var w = $(window);


			$('#offcanvas-menu').css('height', w.height());

			if ( w.width() > 769 ) {
				if ( $('body').hasClass('fh5co-offcanvas') ) {
					$('body').removeClass('fh5co-offcanvas');
				}
			}

		});

	}



	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			}
	    }
		});
	};


	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};

	var sliderMain = function() {

	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
	  	$(window).resize(function(){
	  		$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
	  	});

	};

	var stickyBanner = function() {
		var $stickyElement = $('.sticky-banner');
		var sticky;
		if ($stickyElement.length) {
		  sticky = new Waypoint.Sticky({
		      element: $stickyElement[0],
		      offset: 0
		  })
		}
	};

	// Document on load.
	$(function(){
		mainMenu();
		offcanvas();
		mobileMenuOutsideClick();
		contentWayPoint();
		sliderMain();
		fullHeight();
		stickyBanner();
	});


}());

// sclick add
jQuery(document).ready(function() {
    jQuery('#mySlider-slick').slick({
		infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4
		});
});

// Калькулятор


// Получение title
// jQuery(document).ready(function() {
//
//
//
// 	jQuery('#from-place').on('input', function() {
// 	let titleCompani = jQuery('#from-place').val();
// 	if(titleCompani !== ''){
// 		jQuery('#title_compani span').text(titleCompani);
// 		jQuery('#title_compani').fadeIn(); // fadeIn - плавное появление;
// 		}else{
// 			jQuery('#title_compani').fadeOut(); // fadeOut - плавное исчезновение
// 		}
// 	});

// Получение услуг
// 	let sum = 0;
// 	let count = 0;
// 	jQuery('.checkbox').on('click', function() {
// 		if (jQuery(this).is(':checked')){
// 			count++;
// 			jQuery('.raschet_rais').fadeIn(); // fadeIn - плавное появление;
// 			sum = sum + parseInt(jQuery(this).data('role'));
// 			jQuery('#itogSum span').text(sum);
// 			let nameServes = jQuery(this).siblings('.label').text();
// 			jQuery('#nameServises ul').append('<li class="liDelit">'+nameServes+'</li>');
// 		}else {
// 			count--;
// 			if(count == 0){
// 				jQuery('.raschet_rais').fadeOut(); // fadeOut - плавное исчезновение
// 			}
// 			sum = sum - parseInt(jQuery(this).data('role'));
// 			jQuery('#itogSum span').text(sum);
// 			jQuery('#nameServises li').remove();
// 			$('.checkbox').each(function() {
// 				if (jQuery(this).is(':checked')){
// 					let nameServes = jQuery(this).siblings('.label').text();
// 					jQuery('#nameServises ul').append('<li class="liDelit">'+nameServes+'</li>');
// 		}
// 	});
// 		}
// 	});
//
// 	$('.search-property input').each(function() {
// 		jQuery('.search-property input').on('input', function() {
// 			if(jQuery('.search-property input[type="text"]').val() !== '' || jQuery('.search-property input').is(':checked')){
// 				 jQuery('.wrap_curent_sum').fadeIn(); // fadeIn - плавное появление;
// 			}else{
// 				 jQuery('.wrap_curent_sum').fadeOut(); // fadeOut - плавное исчезновение
// 			}
// 		});
//
//
// 	});
//
//  });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//  function prostovSelect(args, args2) {
//    $(args2+ ' ul li:first-child').css({'display':'block'});
//    $(args+' ul li').on('click', function() {
//      $(this).parent().toggleClass('open');
//       if($(this).parent().hasClass('open') ){
//         $(this).text('Выбрать');
//         $(args2).removeClass('args2_none').fadeIn();
//       }else{
//         var text = $(this).text();
//         var data = $(this).data("id");
//         $( args2+' ul li:first-child').text('Выбрать');
//         $(this).siblings('li:first-child').text(text);
//         $( args2+' ul li:first-child').attr("data-id", data);
//         $(args+' ul li[data-id]').removeClass('my_none');
//         $(args+' ul li[data-id='+data+']').addClass('my_none');
//         $(this).siblings().removeClass('activSelect');
//         $(this).addClass('activSelect');
//
//       }
//    });
// 	 $( args2+' ul li:first-child').on('click', function () {
// 	 	$( args2+' ul li:first-child').addClass('opendefaultRadio');
// 	});
//
//
// 	$('.wrap_label input[type=radio]').on('click',function(event) {
// 		if(!$( args2+' ul li:first-child').hasClass('opendefaultRadio')){
//  			console.log('ok');
// 			event.preventDefault();
//
//  	 }else{
// 		 if($(this).hasClass('radioYes')){
// 			 console.log('yes');
// 			 $(this).parent('.myStyleLabel').siblings('.inputNamber').fadeIn();
// 		 }else if($(this).hasClass('radioNo')){
// 			 $(this).parent('.myStyleLabel').siblings('.inputNamber').fadeOut();
// 		 }
//
// 	 }
//
//
//
//  });
//
//
//  $('.btn_raschet').on('click',function(event) {
// 	 if(!$( args2+' ul li:first-child').hasClass('opendefaultRadio')){
// 		 console.log('ok');
// 		 event.preventDefault();
//
// 	}
// });
//
//
//  }
//
//  prostovSelect('.wrap', '.ch2');


	// jQuery('#from-place').on('input', function() {
	// let titleCompani = jQuery('#from-place').val();
	// if(titleCompani !== ''){
	// 	jQuery('#title_compani span').text(titleCompani);
	// 	jQuery('.wrap_curent_sum').fadeIn();
	// 	jQuery('#title_compani').fadeIn(); // fadeIn - плавное появление;
	// 	}else{
	// 		jQuery('.wrap_curent_sum').fadeOut();
	// 		jQuery('#title_compani').fadeOut(); // fadeOut - плавное исчезновение
	// 	}
	// });


// Функция для открытия первых двух окон

	jQuery('.wrap ul li').on('click', function() {
		if(jQuery(this).parent().hasClass('open')){
				jQuery(this).parent().toggleClass('open');
				var text = jQuery(this).text();
				var data = jQuery(this).data("id");
				jQuery(this).siblings('li:first-child').text(text);
				jQuery(this).siblings('li:first-child').attr("data-id", data);
				jQuery('.ch2 ul li[data-id]').removeClass('my_block');
				jQuery('.ch2 ul li[data-id='+data+']').addClass('my_block');
				console.log('Закрыто');
		// ЗАКРЫТО
		}else{
			jQuery('.wrap ul').removeClass('open');
			jQuery(this).parent().toggleClass('open');
			jQuery(this).parent().find('li:first-child').text('Выбрать');
			// jQuery(this).attr("data-id", '0');
			console.log('открыто');
		// ОТКРЫТО
		}
	});

	// конец

// Проверка на открытие раздела услуги
jQuery('.ch1 ul li').on('click', function() {
	if(jQuery(this).data("id") != '0'){
		jQuery('.click_wrap_section_servis').removeClass('wrap_section_servis');
}
});

	jQuery('.ch2 ul li').on('click', function() {
		if(jQuery(this).data("id") != '0'){
		jQuery(this).parents('.ch2').removeClass('my_delit_class');
		$('.delit_disabled').removeAttr("disabled");
	}
	});
	// Конец
	jQuery(".only_number").keypress(function(e) {
if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
return false;
}
});
// код для да / нет
jQuery('.wrap_radio .myStyleLabel .radioYes').on('click', function(event) {
	if(jQuery('.click_wrap_section_servis').hasClass('wrap_section_servis')){
		event.preventDefault();
			jQuery(this).parents('.wrap_radio').find('.inputNamber').css({ "display": "none" });
	}else {
		jQuery(this).parents('.wrap_radio').find('.inputNamber').css({ "display": "block"});
	}
});
jQuery('.wrap_radio .myStyleLabel .radioNo').on('click', function(event) {
if(jQuery('.click_wrap_section_servis').hasClass('wrap_section_servis')){
	event.preventDefault();
}else{
	jQuery(this).parents('.wrap_radio').find('.inputNamber').css({ "display": "none" });
}


});

// Конец




// jQuery('#from-place').on('input', function() {
//
// 	jQuery('.wrap_curent_sum').css({'display' : 'block'});
// 	var inp_company_name = jQuery('#from-place').val();
// 	jQuery('#title_compani').css({'display' : 'block'});
// 	jQuery('#title_compani span').text(inp_company_name);
//
// });




jQuery('.btn_raschet').on('click', function() {

	var inp = jQuery('#from-place').val();
	var inp_ownership_val = jQuery('.ch1 ul li:first-child').text();
	var inp_setvice_val = jQuery('.ch2 ul li:first-child').text();



	console.log(inp_setvice_val);

});


// jQuery(document).ready(function() {
//
//
//
// 	jQuery('#from-place').on('input', function() {
// 	let titleCompani = jQuery('#from-place').val();
// 	if(titleCompani !== ''){
// 		jQuery('#title_compani span').text(titleCompani);
// 		jQuery('#title_compani').fadeIn(); // fadeIn - плавное появление;
// 		}else{
// 			jQuery('#title_compani').fadeOut(); // fadeOut - плавное исчезновение
// 		}
// 	});


// Конец калькулятора
