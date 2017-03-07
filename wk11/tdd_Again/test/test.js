"use strict";

const Calculator = require('../calc.js')

const assert = require('assert')

describe('Calculator', function() {
  describe('add', function() {
    it('adds two numbers together', function() {
      var actual = Calculator(3,4)
      var expected = 7
      assert.equal(actual, expected, "Adding 3 + 4 should give 7")
    })
  })
});
