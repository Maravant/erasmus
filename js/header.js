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

}());
