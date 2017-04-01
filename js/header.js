(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initHeaderObserver() {
    var header = document.querySelector('.header');

    var manageHeaderPositionChanges = function(changes) {
      if (changes && changes[0].intersectionRatio > 0) {
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
    var header = document.querySelector('.header');
    var menuButton = document.querySelector('.header__menubutton');
    var menu = document.querySelector('.header__menu');
    var menuList = document.querySelector('.header__menulist');

    menuButton.addEventListener('click', function(e) {
      e.preventDefault();

      if (header.classList.contains('header--opened')) {
        menu.prepend(menuList);
        header.classList.remove('header--opened');
        document.body.classList.remove('menu--opened')
      } else {
        header.prepend(menuList);
        header.classList.add('header--opened');
        document.body.classList.add('menu--opened')
        window.scrollTo(0, 0);
      }

    })

  });

}());
