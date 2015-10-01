/* globals define, describe, beforeEach, afterEach, it, expect */

define([
  'src/base'
], function(Element) {
  'use strict';


  describe('Element', function() {
    var _el;
    var elem;

    beforeEach(function() {

      _el = document.createElement('div');
      document.body.appendChild(_el);
      elem = new Element(_el);
    });

    afterEach(function() {
      document.body.removeChild(_el);
    });


    it('has reference to the DOM object', function() {
      expect(elem.el).toEqual(_el);
    });

  });

});
