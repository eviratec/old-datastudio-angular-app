
  angular.module('angularApp')
    .controller('AppController', AppController);

  AppController.$inject = ['$scope'];
  function AppController (  $scope) {

    this.test = 'Meow';

  };
