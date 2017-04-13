(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  window.MAIN_APP.push(function initHeaderObserver() {
    var button = document.querySelector('.button--ghost');
    var footer = document.querySelector('.footer');
    var nextElementButton = button.nextElementSibling ? button.nextElementSibling : null;
    var margin = nextElementButton ? $(nextElementButton).outerHeight() : 0;

    var manageHeaderPositionChanges = function(changes, observer) {
      if (changes && changes[0].intersectionRatio > 0) {
        button.classList.remove('button--floating');
        $(nextElementButton).css({
          marginTop: 0
        });
      } else {
        button.classList.add('button--floating');
        $(nextElementButton).css({
          marginTop: $(button).outerHeight()
        });
      }
    };

    if (footer) {
      var observer = new IntersectionObserver(manageHeaderPositionChanges, {
        rootMargin: margin + 'px 0px'
      });
      observer.observe(footer);
    }
  });

}());
