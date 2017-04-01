(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initGaleria() {

    var galleryNumber = $('.c_galeria__number');

    $('.c_galeria__images').on('init', function(e, slick) {
      var totalSlides = slick.$slides.length;
      galleryNumber.find('sup').text('/'+totalSlides);
    }).slick({
      accessibility: false,
      prevArrow: $('.c_galeria__button--up'),
      nextArrow: $('.c_galeria__button--down')
    }).on('afterChange', function(e) {
      var gallery = $(e.currentTarget);
      var currentSlide = gallery.slick('slickCurrentSlide') + 1;
      galleryNumber.find('span').text(currentSlide)
    });

  });

}());
