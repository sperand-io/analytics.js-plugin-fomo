'use strict';

var Analytics = require('@segment/analytics.js-core').constructor;
var sandbox = require('@segment/clear-env');
var tester = require('@segment/analytics.js-integration-tester');
var Fomo = require('../lib');

describe('Fomo', function() {
  var analytics;
  var fomo;
  var options = {
    publishableApiKey: '27_K7sZXTDctFcC2m7FktA'
  };

  beforeEach(function() {
    analytics = new Analytics();
    fomo = new Fomo(options);
    analytics.use(Fomo);
    analytics.use(tester);
    analytics.add(fomo);
  });

  afterEach(function(done) {
    analytics.waitForScripts(function() {
      analytics.restore();
      analytics.reset();
      fomo.reset();
      sandbox();
      done();
    });
  });

  describe('before loading', function() {
    beforeEach(function() {
      analytics.stub(fomo, 'load');
    });

    afterEach(function() {
      fomo.reset();
    });

    describe('#initialize', function() {
      it('should call load on initialize', function() {
        analytics.initialize();
        analytics.called(fomo.load);
      });
    });
  });
});
