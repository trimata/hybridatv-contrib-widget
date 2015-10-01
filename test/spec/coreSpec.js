/* globals define, describe, beforeEach, afterEach, it, expect */

define([
  'src/base',
  'hybridatv/helpers/polyfil',
], function(Widget, polyfil) {
  'use strict';

  describe('Widget', function() {
    var _el;
    var elem;

    beforeEach(function() {

      _el = document.createElement('div');
      document.body.appendChild(_el);
      elem = new Widget(_el);
    });

    afterEach(function() {
      document.body.removeChild(_el);
    });


    it('has "hb-class" widget', function() {
      expect(polyfil.hasClass(_el, 'hb-widget')).toBe(true);
    });

  });

});
