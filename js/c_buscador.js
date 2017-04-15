(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initBuscador() {
    var cToggleFilter = $('.js-toggle-advanced-filter');

    cToggleFilter.on('click', function(e) {
      if (!$(this).data('cl')) {
        $(this).closest('.c_buscador').addClass('c_buscador--advanced-filters-opened');
        $(this).text('Aplicar Filtros');
        $(this).data('cl', true);
        e.preventDefault();
      }
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
