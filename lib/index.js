'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Fomo`.
 */

var Fomo = module.exports = integration('Fomo')
  .option('publishableApiKey', '')
  .global('fomo')
  .tag('<script src="https://load.fomo.com/api/v1/{{publishableApiKey}}/load.js"></script>');

/**
 * Initialize Fomo.
 *
 * @param {Facade} page
 */

Fomo.prototype.initialize = function() {
  this.load(this.ready);
};

/**
 * Has the Fomo library been loaded yet?
 *
 * @return {Boolean}
 */

Fomo.prototype.loaded = function() {
  return !!window.fomo;
};

