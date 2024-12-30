var app = angular.module("MenuApp");

app.service('MenuDataService', ['$http', 'Api', function($http, Api) {
    var service = this;
  
    service.getCategories = function() {
      return $http.get(Api + '/categories.json');
    };
  
    service.getItemsForCategory = function(categoryShortName) {
      return $http.get(Api + `/menu_items/${categoryShortName}.json`);
    };
  }]);
  