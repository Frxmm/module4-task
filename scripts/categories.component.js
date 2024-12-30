var app = angular.module("MenuApp");

app.component('categories', {
  bindings: {
    categories: '<'
  },  
    templateUrl: 'categories.html'
  });