$('.js-open-modal').on('click', function(e) {
  var modal = $('#' + $(e.currentTarget).data('target-modal'));

  modal.addClass('opened');

  modal.on('click', function() {
    modal.removeClass('opened');
  })
})
