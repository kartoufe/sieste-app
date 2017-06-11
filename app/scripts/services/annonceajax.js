'use strict';

/**
 * @ngdoc service
 * @name siesteAppApp.annonceAjax
 * @description
 * # annonceAjax
 * Factory in the siesteAppApp.
 */
angular.module('siesteAppApp')
  .factory('annonceAjax', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
