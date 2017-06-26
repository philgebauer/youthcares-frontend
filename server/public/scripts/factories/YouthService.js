angular
  .module('myApp')
  .factory('YouthService', ['$http', function($http) {
  console.log('Youth Service loaded');

  var hello = "Controller is loaded";

  return {
    hello: hello,
  };

}]);
