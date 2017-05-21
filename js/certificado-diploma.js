$('.checkbox-toggle').on('change', function() {

  var estaActivado=$('.checkbox-toggle input').prop('checked');

  if (estaActivado) {
    $('.container-diploma__wraper-personal').addClass('container-diploma__wraper-personal__disabled');
    $('.container-diploma__wraper-personal input, .container-diploma__wraper-personal select').prop('disabled', true);
  } else {
    $('.container-diploma__wraper-personal').removeClass('container-diploma__wraper-personal__disabled');
    $('.container-diploma__wraper-personal input, .container-diploma__wraper-personal select').prop('disabled', false);
  }

})
