'use strict';

describe('Service: annonceAjax', function () {

  // load the service's module
  beforeEach(module('siesteAppApp'));

  // instantiate service
  var annonceAjax;
  beforeEach(inject(function (_annonceAjax_) {
    annonceAjax = _annonceAjax_;
  }));

  it('should do something', function () {
    expect(!!annonceAjax).toBe(true);
  });

});
