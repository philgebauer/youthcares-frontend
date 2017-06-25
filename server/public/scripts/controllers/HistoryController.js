angular
  .module('myApp')
  .controller('HistoryController',
    ['$http', 'YouthService', function($http, YouthService) {
      //DATA-BINDING VARIABLES
        var vm = this; //controller as reference

        vm.hello = YouthService.hello;
    }]);
