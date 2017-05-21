(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initInputFile() {

    var inputFileHandler = function() {
      var span = $(this).closest('.input-file').find('span');

      if (this.value) {
        var path = this.value.split('\\');
        path = path[path.length - 1];

        span.text(path);
      } else {
        span.text(this.placeholder);
      }
    };

    $('.input-file input').on('change', inputFileHandler);

    $('.input-file input').each(inputFileHandler);

  });
}());
