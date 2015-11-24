(function () {


  angular
    .module('recipes')
    .controller('MainController', function ($scope) {

    })
    .controller('RecipesController', function ($scope, RecipesService) {

      RecipesService.getRecipes().success(function (recipes) {
        console.log(recipes);
        $scope.myRecipes = recipes;
      });
    });
});
