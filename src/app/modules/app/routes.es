
  angular.module('angularApp')
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider

        .state('app', {
          url: '^',
          templateUrl: 'modules/app/html/app.html',
          controller: 'AppController',
          controllerAs: '$app',
        });

  }]);
