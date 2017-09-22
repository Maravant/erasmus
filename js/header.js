(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initHeaderObserver() {
    var header = document.querySelector('.header');

    var manageHeaderPositionChanges = function(changes) {
      if (changes && changes[0] && changes[0].isIntersecting) {
        header.classList.remove('header--floating');
      } else {
        header.classList.add('header--floating');
      }
    };

    if (header) {
      var observer = new IntersectionObserver(manageHeaderPositionChanges, {});
      observer.observe(header);
    }
  });

  window.MAIN_APP.push(function initMenuForMobile() {
    var header = $('.header');
    var menuButton = $('.header__menubutton');
    var menu = $('.header__menu');
    var menuList = $('.header__menulist');

    menuButton.on('click', function(e) {
      e.preventDefault();

      if (header.hasClass('header--opened')) {
        menu.prepend(menuList);
        header.removeClass('header--opened');
        $('body').removeClass('menu--opened')
      } else {
        header.prepend(menuList);
        header.addClass('header--opened');
        $('body').addClass('menu--opened')
        window.scrollTo(0, 0);
      }

    })

  });

}());
