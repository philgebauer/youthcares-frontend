angular
  .module('myApp', ['ngRoute'])
  .config(['$locationProvider', '$routeProvider', config]);

//Routes

function config($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/caseworker-appointments-all', {
    templateUrl: '/views/templates/caseworker-appointments-all.html',
    controller: 'CaseworkerAppointmentsAllController',
    controllerAs: 'vm',
    resolve: { // get user from factory
      getuser: ['UserService', function(UserService) {
        return UserService.getUser();
      }]
    }
  })
  .otherwise({
    redirectTo: 'login'
  });
}
