(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initBuscador() {

    if ($.fn.datepicker) {
      $('input[type="date"').datepicker({
        autoHide: true,
        format: 'yyyy-mm-dd',
        language: document.documentElement.lang
      });
    }

  });

}());
