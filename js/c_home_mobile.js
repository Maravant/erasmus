(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function homeMobile() {

    $('.js-mobile-slider').slick({
      accessibility: false,
      arrows: false,
      dots: true,
      mobileFirst: true,
      dotsClass: 'c_hero-search__mobile__circles',
      responsive: [
        {
          breakpoint: 600,
          settings: 'unslick'
        }
      ]
    });

  });

}());
