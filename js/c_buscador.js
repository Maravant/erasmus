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

    $('.js-add-to-email-cc').on('click', function(e) {
      e.preventDefault();
      $('.container-items').addClass('js-selection-mode');
      $('.c_item').removeClass('c_item--selected');
      $(this).attr('hidden', true);
      $('.js-cancel-email-cc').removeAttr('hidden');
    });

    $('.js-send-bulk-emails').on('click', function(e) {
      e.preventDefault();
      if ($(e.currentTarget).attr('disabled')) {
        return;
      }

      console.log('send cc emails to:', users);
    });

    $('.js-cancel-email-cc').on('click', function(e) {
      e.preventDefault();
      users = [];
      checkIfHasEmails();
      $('.container-items').removeClass('js-selection-mode');
      $('.c_item').removeClass('c_item--selected');
      $(this).attr('hidden', true);
      $('.js-add-to-email-cc').removeAttr('hidden');
    });

    $('.container-items').on('click', '.c_item', function(e) {
      var container = $(e.delegateTarget);
      var item = $(e.currentTarget);

      if (container.hasClass('js-selection-mode')) {
        e.preventDefault();
        var id = item.data('item-id');

        if (typeof id === 'undefined') {
          return ;
        }

        var index = users.indexOf(id);

        if (index > -1) {
          users.splice(index, 1);
          item.removeClass('c_item--selected');
        } else {
          users.push(id);
          item.addClass('c_item--selected');
        }

        checkIfHasEmails();
      }
    });

    var checkIfHasEmails = function() {
      $('.js-send-bulk-emails, .js-send-bulk-emails .button').attr('disabled', !users.length);
    }
  });

}());
