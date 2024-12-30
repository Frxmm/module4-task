angular.module('MenuApp')
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('categories', {
      url: '/categories',
      template: '<categories categories=$resolve.categories></categories>',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryShortName}',
      template: '<items items="$resolve.items"></items>',
      resolve: {
        items: ['$stateParams','MenuDataService', function($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }
      ]}
    });
});
  