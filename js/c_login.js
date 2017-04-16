(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initLogin() {
    $('.js-open-login-popup').on('click', function(e) {
      $('body').addClass('login--opened');

      e.preventDefault();
    });

    $('.js-close-login-popup').on('click', function(e) {
      var cur = $(e.target);
      console.log(e.target, e.currentTarget, cur.hasClass('js-close-login-popup'));
      if (cur.hasClass('js-close-login-popup')) {
        $('body').removeClass('login--opened');
      }
    });
  });

}());
