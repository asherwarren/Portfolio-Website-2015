$(document).ready(function() {
	$(".photo_carousel").carousel( {
		show: {
			"300px" : 1,
			"480px" : 2,
	     "740px" : 3,
	     "960px" : 4,
    	},
    });

  $(".photo_carousel_two").carousel( {
    show: {
      "300px" : 1,
      "480px" : 1,
       "740px" : 1,
       "960px" : 1,
      },

    });


    $(".js-lightbox").lightbox( {
    	mobile: true,
    });


});

new WOW().init();

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function($){
           $( '.menu-btn' ).click(function(){
           $('.responsive-menu').toggleClass('expand');
           $('.modal').toggleClass('expand_menu');
           $('#nav-icon1 span:nth-child(1)').toggleClass('x_one');
           $('#nav-icon1 span:nth-child(2)').toggleClass('x_two');
           $('#nav-icon1 span:nth-child(3)').toggleClass('x_three');
           $('#nav-icon1 span:nth-child(4)').toggleClass('x_four');
           })
        })
$(function($){
           $( '.menu_text' ).click(function(){
           $('.responsive-menu').toggleClass('expand');
           $('.modal').toggleClass('expand_menu');
           $('#nav-icon1 span:nth-child(1)').toggleClass('x_one');
           $('#nav-icon1 span:nth-child(2)').toggleClass('x_two');
           $('#nav-icon1 span:nth-child(3)').toggleClass('x_three');
           $('#nav-icon1 span:nth-child(4)').toggleClass('x_four');
           })
        })
$(function($){
           $( '.aboutclick' ).click(function(){
           $('.description_box_two').toggleClass('textreveal');
           $('.description_box').toggleClass('texthide');
           })
        })
$(function($){
           $( '.aboutclicktwo' ).click(function(){
           $('.description_box_two').toggleClass('textreveal');
           $('.description_box').toggleClass('texthide');
           })
        })

