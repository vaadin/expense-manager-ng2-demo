(function(app) {
  app.LoginPage =
    ng.core.Component({
      selector: 'login-page',
      templateUrl: './app/login-page/app.login-page.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
