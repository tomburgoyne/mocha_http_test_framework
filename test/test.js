'use strict';

const request = require('supertest')("https://www.google.co.uk/");

describe('Your API test', function() {
    it('should return a 200 status code', function(done) {
      request.get("")
        .expect(200)
        .end(function(err, res) {
        if (err) return done(err);
        done();
      });
    });
});