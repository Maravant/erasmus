(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initBuscador() {

    if ($.fn.datepicker) {
      $('input[type="date"]').datepicker({
        autoHide: true,
        zIndex: 1,
        format: 'yyyy-mm-dd',
        language: document.documentElement.lang
      });
    }

    var originalClasses = $('.multi-select-box').attr('class');

    $('.multi-select-box').SumoSelect({
      csvDispCount: 0,
      okCancelInMulti: false,
      forceCustomRendering: true
    });

    $('.SelectBox').addClass(originalClasses);
  });

}());
