(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initInputFile() {

    var inputFileHandler = function() {
      var $cmp = $(this).closest('.input-file');
      var span = $cmp.find('span');

      if (this.value) {
        var path = this.value.split('\\');
        path = path[path.length - 1];

        span.text(path);
        $cmp.addClass('has-value');
      } else {
        span.text(this.placeholder);
        $cmp.removeClass('has-value');
      }
    };

    $('.input-file input').on('change', inputFileHandler);

    $('.input-file input').each(inputFileHandler);

  });
}());
