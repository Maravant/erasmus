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
      e.preventDefault();
    });


    var users = [];
    var updateCCIcon = function() {
      if (users.length) {
        $('.c_results-messages').addClass('button--visible');
      } else {
        $('.c_results-messages').removeClass('button--visible');
      }

      $('.c_results-messages__circle').text(users.length);
    };


    $('.js-add-to-email-cc').on('click', function(e) {
      e.preventDefault();

      var button = $(e.currentTarget);
      var cur = button.closest('.c_item');
      var id = cur.data('item-id');

      if (typeof id === 'undefined') {
        return ;
      }

      var index = users.indexOf(id);

      if (index > -1) {
        users.splice(index, 1);
        button.removeClass('button--active');
      } else {
        users.push(id);
        button.addClass('button--active');
      }

      updateCCIcon();
    });

  });

}());
