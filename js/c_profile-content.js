(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initHeaderObserver() {
    var button = document.querySelector('.c_profile-content__searchbuttonformobile');
    var footer = document.querySelector('.footer');

    var manageHeaderPositionChanges = function(changes, observer) {
      if (changes && changes[0].intersectionRatio > 0) {
        button.classList.remove('button--floating');
      } else {
        button.classList.add('button--floating');
      }
    };

    if (footer) {
      var observer = new IntersectionObserver(manageHeaderPositionChanges, {
        rootMargin: '136px 0px'
      });
      observer.observe(footer);
    }
  });

}());
