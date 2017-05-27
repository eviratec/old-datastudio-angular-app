
  angular.module('appUser')
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider

        .state('app.user', {
          url: '/my',
          templateUrl: 'modules/appUser/html/appUser.html',
          controller: 'AppUserController',
          controllerAs: '$appUser',
        });

  }]);
