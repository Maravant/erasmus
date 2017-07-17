(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initModal() {

    $('.js-open-modal').on('click', function(e) {
      var modal = $('#' + $(e.currentTarget).data('target-modal'));

      modal.addClass('opened');

      modal.on('click', function(e) {
        var $target = $(e.target);

        if ($target.hasClass('js-modal-dismiss') || e.target === modal[0]) {
          modal.removeClass('opened');
          modal.off();
        }
      });
    });

  });

}());
