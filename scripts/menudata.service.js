var app = angular.module("MenuApp");

app.service('MenuDataService', ['$http', 'Api', function($http, Api) {
    var service = this;
  
    service.getCategories = function() {
      return $http.get(Api + '/categories.json')
      .then(function(response) {
        return response.data;
      });
    };
  
    service.getItemsForCategory = function(categoryShortName) {
      return $http.get(Api + `/menu_items/${categoryShortName}.json`)
      .then(function(response) {
        return response.data.menu_items;
      });
    };
  }]);
  