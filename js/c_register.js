(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initLogin() {
    function showError(type) {
      var types = ['correct', 'error', 'required'];
      var box = $('.c_register-form__validation-box__alert');

      $(types).each(function(i, value) {
        if (type === value) {
          box.addClass(value);
        } else {
          box.removeClass(value);
        }
      });
    };

    function registerOptionSelected() {
      $('.c_register__option').removeClass('c_register__option--selected');
      $(this).addClass('c_register__option--selected');
    };

    $('.c_register__option').on('click', registerOptionSelected);

    $('.js-click-condition').on('click', function(e) {
      if ($('.js-click-condition').prop('checked')) {

        var form = $(this).closest('form');
        var formValid = form[0].checkValidity();

        // if (formValid) {
          $('.button-submit').removeAttr('disabled');
          showError('correct');
        // } else {
          // showError('required');
        // }

      } else {
        $('.button-submit').attr('disabled', 'disabled');
        showError('error');
      }
    });


    $('.js-register-submit').on('click', function() {
      var form = $(this).closest('form');
      var formValid = form[0].checkValidity();

      if (formValid) {
        form.submit();
      } else {
        showError('required');
      }
    });

  });

}());
