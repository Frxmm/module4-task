var app = angular.module("MenuApp");

app.controller('CategoriesController', ['MenuDataService', function(MenuDataService) {
    var categoriesCtrl = this;
    categoriesCtrl.categories = [];
  
    MenuDataService.getCategories().then(function(response) {
      categoriesCtrl.categories = Object.values(response.data).map(function(category) {
        return {
          name: category.name,
          shortName: category.short_name
        };
      });
    }).catch(function(error) {
      console.error('Error fetching categories:', error);
    });
  }]);