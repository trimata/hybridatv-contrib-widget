/* globals define */

define([
  'components/element/latest/base',
  'hybridatv/helpers/polyfil',
], function(Element, polyfil) {
  'use strict';

  var Widget = Element.extend({
    init: function(el, params) {
      this._super(el);

      this.$el.attr('tabindex', '-1').addClass('hb-widget');
      this._params = params || {};
    },

    type: 'Hb-Widget',

    isWidget: true,

    on: function(evtName, fn) {
      this.$el.on(evtName, fn);

      return this;
    },

    trigger: function(evtName) {
      var evt = polyfil.initCustomEvent(evtName);

      this.el.dispatchEvent(evt);
      return this;
    },

    listeners: function(evtName) {
      return this.$el.listeners(evtName);
    },

    destroy: function() {
      this.$el.removeListeners();

      return this._super();
    },

    focus: function() {
      this.$el.focus();

      return this;
    },

    blur: function() {
      this.$el.blur();

      return this;
    },

    off: function() {
      this.$el.removeListeners();

      return this;
    },
  });

  return Widget;
});
