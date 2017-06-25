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
    .when('/campSunrise', {
      templateUrl: '/views/templates/campSunrise.html',
      controller: 'CampSunriseController',
      controllerAs: 'vm',
    })
    .when('/contactUs', {
      templateUrl: '/views/templates/contactUs.html',
      controller: 'ContactUsController',
      controllerAs: 'vm',
    })
    .when('/events', {
      templateUrl: '/views/templates/events.html',
      controller: 'EventsController',
      controllerAs: 'vm',
    })
    .when('/history', {
      templateUrl: '/views/templates/history.html',
      controller: 'HistoryController',
      controllerAs: 'vm',
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'vm',
    })
    .when('/programs', {
      templateUrl: '/views/templates/programs.html',
      controller: 'ProgramsController',
      controllerAs: 'vm',
    })
    .when('/volunteer', {
      templateUrl: '/views/templates/volunteer.html',
      controller: 'VolunteerController',
      controllerAs: 'vm',
    })
    .when('/youthLeadProgram', {
      templateUrl: '/views/templates/youthLeadProgram.html',
      controller: 'YouthLeadProgramController',
      controllerAs: 'vm',
    })
    .otherwise({
      redirectTo: 'home'
    });
}
