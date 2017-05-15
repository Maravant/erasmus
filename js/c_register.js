(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initLogin() {
    function registerOptionSelected() {
      $('.c_register__option').removeClass('c_register__option--selected');
      $(this).addClass('c_register__option--selected');
    }
    $('.c_register__option').on('click', registerOptionSelected);



    $('.js-click-condition').on('click', function(e) {
      if ($('.js-click-condition').prop('checked')){
        $('.button-submit').removeAttr('disabled');
        $('.c_register-form__validation-box__alert').addClass('correct');
        $('.c_register-form__validation-box__alert').removeClass('error');
      } else {
        $('.button-submit').attr('disabled', 'disabled');
        $('.c_register-form__validation-box__alert').removeClass('correct');
        $('.c_register-form__validation-box__alert').addClass('error');
      }
    });
  });

}());
