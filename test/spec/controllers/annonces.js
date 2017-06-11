'use strict';

describe('Controller: AnnoncesCtrl', function () {

  // load the controller's module
  beforeEach(module('siesteAppApp'));

  var AnnoncesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnnoncesCtrl = $controller('AnnoncesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AnnoncesCtrl.awesomeThings.length).toBe(3);
  });
});
