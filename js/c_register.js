function registerOptionSelected() {
  $('.c_register__option').removeClass('c_register__option--selected');
  $(this).addClass('c_register__option--selected');
}


$('.c_register__option').on('click', registerOptionSelected);
