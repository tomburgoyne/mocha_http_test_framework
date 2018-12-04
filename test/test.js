'use strict';

const request = require('supertest')("https://www.google.co.uk");

describe('Your API test', function () {
  it('should return a 200 status code', function (done) {
    request.get('/')
      .expect(200)
      .end(function (err) {
        if (err) return done(err);
        done();
      });
  });

  it('should check the response body is not null', function (done) {
    request.get('/')
      .expect(checkResponseBody)
      .end(function (err) {
        if (err) return done(err);
        done();
      });

    function checkResponseBody(res) {
      if (res.body === null) {
        throw new Error("Response body was null");
      }
    }
  });

  it('can check a status code and something else in one test', function (done) {
    request.get('/')
      .expect(200)
      .expect(checkSomethingElse)
      .end(function (err) {
        if (err) return done(err);
        done();
      });

    function checkSomethingElse(res) {
      if (res.status === 200) {
        throw new Error("Custom error message for status code not being as expected")
      }
    }
  });
});