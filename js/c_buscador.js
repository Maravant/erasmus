(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initQuestionsAccordion() {
    var cToggleFilter = $('.js-toggle-advanced-filter');

    cToggleFilter.on('click', function(e) {
      $(this).closest('.c_buscador').addClass('c_buscador--advanced-filters-opened');
      $(this).text('Aplicar Filtros');
      e.preventDefault();
    });
  });

}());
