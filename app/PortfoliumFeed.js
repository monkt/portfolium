angular
  .module('PortfoliumFeed', ['ngRoute','PortfoliumFeed.Dashboard'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'dashboard/feed/feed.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .otherwise({redirectTo: '/'});
}]);
