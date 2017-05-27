
  angular.module('appUser')
    .controller('AppUserController', AppUserController);

  AppUserController.$inject = ['$scope'];
  function AppUserController (  $scope) {

    this.test = 'Meow';

  };
