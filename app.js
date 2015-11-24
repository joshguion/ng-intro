(function () {
  "use strict";

  angular
    .module('recipes', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1 class="mainPageTitle">Recipe Rolodex</h1>',
          controller: 'MainController'
        })
        .when('/recipes', {
          templateUrl: 'views/recipes/list.html',
          controller: 'RecipesController'
        })
        .when('/recipes/:recipeId', {
          templateUrl: 'views/recipes/show.html',
          controller: 'RecipesController'
        })
        .when('/recipes/:recipeId/edit', {
          templateUrl: 'views/recipes/edit.html',
          controller: 'RecipesController'
        })
        .when('/addRecipe', {
          templateUrl: 'views/recipes/create.html',
          controller: 'RecipesController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'})

    });




})();
