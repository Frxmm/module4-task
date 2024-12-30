var app = angular.module("MenuApp");

app.component('items', {
  bindings: {
    items: '<',
    categoryShortName: '<'
  },
  templateUrl: 'items.html'
  });