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

    $('.js-select-country-show-search-button').on('change', function(e) {
      var cur = $(e.currentTarget);
      var value = cur.val();
      var button = cur.closest('form').find('.button');

      if (value) {
        button.removeAttr('hidden');
      } else {
        button.attr('hidden', true);
      }
    });

  });

}());
