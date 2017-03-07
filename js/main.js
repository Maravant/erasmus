(function() {
  window.MAIN_APP = window.MAIN_APP || [];

  var features = [];
  ('IntersectionObserver' in window) || features.push('IntersectionObserver');

  if (features.length) {
    var s = document.createElement('script');

    s.src = 'https://polyfill.io/v2/polyfill.min.js?features='+features.join(',')+'&flags=gated,always&ua=chrome/50&callback=main';
    s.async = true;
    document.head.appendChild(s);
  } else {
    main();
  }

}());

function main() {
  if (window.MAIN_APP) {
    for (var i = 0; i < window.MAIN_APP.length; i++) {
      window.MAIN_APP[i]();
    }
  }
}
