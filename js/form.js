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

    $('.select-alternativo').each(function(ele) {
      var $this = $(this);

      var originalClasses = $this.attr('class');
      var up = !!$this.attr('data-up');

      $this.SumoSelect({
        up: up,
        floatWidth: 600,
        csvDispCount: 0,
        forceCustomRendering: true
      });

      $this.closest('.SumoSelect').addClass(originalClasses).find('.SumoUnder').attr('class', 'SumoUnder');
    });

  });

}());
