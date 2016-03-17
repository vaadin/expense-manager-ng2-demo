(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AboutDialog);
  });
})(window.app || (window.app = {}));
