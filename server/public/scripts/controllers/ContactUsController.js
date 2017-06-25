angular
  .module('myApp')
  .controller('ContactUsController',
    ['$http', 'YouthService', function($http, YouthService) {
      //DATA-BINDING VARIABLES
        var vm = this; //controller as reference

        vm.hello = YouthService.hello;
    }]);
