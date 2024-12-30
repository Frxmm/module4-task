angular.module('MenuApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../home.html',
        controller: 'HomeController as homeCtrl'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: '../categories.html',
        controller: 'CategoriesController as categoriesCtrl'
      })
      .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: '../items.html',
        controller: 'ItemsController as itemsCtrl'
      });
  }]);
  
  