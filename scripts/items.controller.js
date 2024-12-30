var app = angular.module("MenuApp");

app.controller('ItemsController', ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
    var itemsCtrl = this;
    itemsCtrl.items = [];
    itemsCtrl.categoryShortName = $stateParams.categoryShortName;
  
    MenuDataService.getItemsForCategory(itemsCtrl.categoryShortName).then(function(response) {
      itemsCtrl.items = response.data.menu_items.map(function(item) {
        return {
          name: item.name,
          description: item.description
        };
      });
    }).catch(function(error) {
      console.error('Error fetching items:', error);
    });
  }]);