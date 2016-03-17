(function(app) {
  app.AboutDialog =
    ng.core.Component({
      selector: 'about-dialog',
      templateUrl: './app/about-dialog/about-dialog.html',
      styleUrl: './app/about-dialog/about-dialog.css'
    })
    .Class({
      constructor: function() {

      },
      open: function() {
        document.getElementById("dialog").open();
      },
      close: function() {
        document.getElementById("dialog").close();
      }
    });
})(window.app || (window.app = {}));
