(function(app) {
  app.ExpenseApp =
    ng.core.Component({
      selector: 'expense-app',
      templateUrl: './app/expense-app/app.expense-app.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
