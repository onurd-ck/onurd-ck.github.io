$(document).ready(function ($) {
  'use strict';


/* ---------------------------------------------
     page  Prealoader
     --------------------------------------------- */
     $(window).on('load', function () {
      $("#loading-center-page").fadeOut();
      $("#loading-page").delay(400).fadeOut("slow");
    });

 /* ---------------------------------------------
  Accordion
 --------------------------------------------- */

 $(".collapse.in").each(function(){
  $(this).siblings(".panel-heading").find(".icon-accordion").addClass("fas fa-angle-down").removeClass("arrow_triangle-right_alt2");
});

$(".collapse").on('show.bs.collapse', function(){
  $(this).parent().find(".icon-accordion").removeClass("fas fa-angle-up").addClass("fas fa-angle-down");
}).on('hide.bs.collapse', function(){
  $(this).parent().find(".icon-accordion").removeClass("fas fa-angle-down").addClass("fas fa-angle-up");
});

 
 /* ---------------------------------------------
     Sticky header
     --------------------------------------------- */
     $(window).on('scroll', function () {
      var scroll_top=$(window).scrollTop();

      if (scroll_top > 40){
        $('.navbar').addClass('sticky');

      }
      else{
        $('.navbar').removeClass('sticky');  
      }

    });


 

/*--------------------
Slick  JS
----------------------*/

$('.testmonial-slider').slick({
  dots: false,
  padding:0,
  slidesPerRow: 1,
  rows: 1,
  arrows: true,
   prevArrow: "<button type='button' class='slick-prev'><img src='assets/images/prev.svg'></button>",
   nextArrow: "<button type='button' class='slick-next'><img src='assets/images/next.svg'></button>",
  centerMode: true,
  margin:20,
  slidesToShow: 1,
  slidesToScroll: 1,
 
}); 
 
  
$('.price-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true, 
  margin:15,
  padding:0,
  slidesToShow: 2,
  autoplaySpeed:3000,
  slidesToScroll: 2,
  centerMode: true,
  prevArrow: "<button type='button' class='slick-prev'><img src='assets/images/back.svg'></button>",
  nextArrow: "<button type='button' class='slick-next'><img src='assets/images/next_blog.svg'></button>",
   responsive: [
  {
   breakpoint: 1024,
   settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     
   }
 },
 {
   breakpoint: 600,
   settings: {
     slidesToShow: 1,
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
 ]
 });
 
 

/*----------------------------------------------------*/
/*  VIDEO POP PUP
/*----------------------------------------------------*/

$('.video-modal').magnificPopup({
  type: 'iframe',

  iframe: {
    patterns: {
      youtube: {

        index: 'youtube.com',
        src: 'https://www.youtube.com/embed/7e90gBu4pas'

      }
    }
  }
});
 
/*--------------------
VenoBox
----------------------*/

$('.modal-venobox').venobox({
  numeratio: true,            // default: false
  infinigall: true,
  titleattr: 'data-title',    // default: 'title'// default: false
});	


 

/* ---------------------------------------------
 Back top page scroll up
 --------------------------------------------- */


 $.scrollUp({
  scrollText: '<i class=" fas fa-arrow-up"></i>',
  easingType: 'linear',
  scrollSpeed: 900,
  animation: 'fade'
});


/* ---------------------------------------------
 WoW plugin
 --------------------------------------------- */

 new WOW().init({
  mobile: true,
});

/* ---------------------------------------------
 Smooth scroll
 --------------------------------------------- */

 $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
    location.hostname == this.hostname) {
    var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
 
  if (target.length) {

 
 
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 750);
            return false;
          }
        }

      });



/*----------------------------------------
 Newsletter Subscribe
 --------------------------------------*/

 $(".subscribe-mail").ajaxChimp({
  callback: mailchimpCallRep,
    url: "mailchimp-post-url" //Replace this with your own mailchimp post URL. Just paste the url inside "".
  });

 function mailchimpCallRep(resp) {
  if (resp.result === "success") {
    $(".sucess-message").html(resp.msg).fadeIn(1000);
    $(".error-message").fadeOut(500);
  } else if (resp.result === "error") {
    $(".error-message").html(resp.msg).fadeIn(1000);
  }
}

 

/*--------------------
MAGNIFIC POPUP IMAGE  JS
----------------------*/
$('.modal-image').magnificPopup({
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-with-zoom',
  gallery: {
      enabled: true
  },
  zoom: {
      enabled: true,

      duration: 300,
      easing: 'ease-in-out',

      opener: function (openerElement) {

          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
  }
});

 
});