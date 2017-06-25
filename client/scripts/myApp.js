angular
  .module('myApp', ['ngRoute'])
  .config(['$locationProvider', '$routeProvider', config]);

//Routes

function config($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/about', {
    templateUrl: '/views/templates/about.html',
    controller: 'AboutController',
    controllerAs: 'vm',
  })
  .otherwise({
    redirectTo: 'home'
  });
}
