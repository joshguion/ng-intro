(function () {
  "use strict";
  angular
    .module('recipes')
    .factory('RecipesService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/guionrecipes';

      var addRecipe = function (newRecipe) {
        $http.post(url, newRecipe).then(function (res) {
          console.log(res);
        });
      };

      var getRecipe = function () {
        return $http.get(url);
      };

      return {
        createRecipe: addRecipe,
        getRecipes: getRecipes
      };

    });
})();
