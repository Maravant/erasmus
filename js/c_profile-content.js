(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initHeaderObserver() {
    var button = document.querySelector('.c_profile-content__searchbuttonformobile');
    var sendcv = document.querySelector('.c_profile-content__sendcv');

    var manageHeaderPositionChanges = function(changes) {
      if (changes && changes[0].intersectionRatio > 0) {
        button.classList.remove('button--floating');
      } else {
        button.classList.add('button--floating');
      }
    };

    if (sendcv) {
      var observer = new IntersectionObserver(manageHeaderPositionChanges, {});
      observer.observe(sendcv);
    }
  });

}());
