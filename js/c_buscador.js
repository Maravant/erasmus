(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initBuscador() {
    var cToggleFilter = $('.js-toggle-advanced-filter');

    cToggleFilter.on('click', function(e) {
      $(this).closest('.c_buscador').addClass('c_buscador--advanced-filters-opened');
      $(this).text('Aplicar Filtros');
      e.preventDefault();
    });

    var cToggleSearchPanel = $('.js-toggle-search');
    cToggleSearchPanel.on('click', function(e) {
      $('.c_buscador').toggleClass('c_buscador--visible');
      $(document.body).toggleClass('menu--opened');

      setTimeout(function() {
        window.scrollTo({
          top: 0
        });
      }, 300);
      e.preventDefault();
    });
  });

}());
