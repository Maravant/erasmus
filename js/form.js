(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initBuscador() {

    if ($.fn.datepicker) {
      $('input[type="date"').datepicker({
        format: 'yyyy-mm-dd',
        language: document.documentElement.lang
      });
    }

  });

}());
