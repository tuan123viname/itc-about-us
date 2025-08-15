/**
 * Slick Carousel Implementation for Leadership Section
 * Replaces custom carousel with Slick.js
 */

(function ($, Drupal, once) {
  'use strict';

  /**
   * Initialize Slick carousel for leadership sections
   */
  Drupal.behaviors.leadershipSlickCarousel = {
    attach: function (context, settings) {
      // Initialize leadership carousels using once API
      var carousels = once('slick-carousel', '.leadership-carousel .carousel-container', context);
      
      carousels.forEach(function (element) {
        var $carousel = $(element);
        
        // Slick configuration for leadership carousel
        $carousel.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          prevArrow: '<button class="slick-prev carousel-nav prev" aria-label="Previous team member" type="button"><span aria-hidden="true">‹</span></button>',
          nextArrow: '<button class="slick-next carousel-nav next" aria-label="Next team member" type="button"><span aria-hidden="true">›</span></button>',
          autoplay: false,
          fade: false, // Changed to slide animation
          cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smooth material design easing
          speed: 600, // Slightly slower for elegance
          adaptiveHeight: true,
          accessibility: true,
          focusOnSelect: false,
          pauseOnHover: true,
          infinite: true, // Seamless looping
          lazyLoad: 'ondemand', // Performance optimization
          responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: false,
                arrows: true,
                adaptiveHeight: true,
                speed: 500 // Slightly faster on tablets
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: false,
                arrows: false,
                swipe: true,
                touchMove: true,
                speed: 400 // Faster on mobile for responsiveness
              }
            }
          ]
        });

        // Add custom event handlers if needed
        $carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
          // Custom logic before slide change
          console.log('Changing from slide ' + currentSlide + ' to slide ' + nextSlide);
        });

        $carousel.on('afterChange', function(event, slick, currentSlide) {
          // Custom logic after slide change
          console.log('Changed to slide ' + currentSlide);
        });
      });
    },

    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        $('.leadership-carousel .carousel-container', context).filter('.slick-initialized').slick('unslick');
      }
    }
  };

})(jQuery, Drupal, once);