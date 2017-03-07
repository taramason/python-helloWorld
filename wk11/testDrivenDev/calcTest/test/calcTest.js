"use strict";

const Calculator = require('../src/calc.js')

const assert = require('assert')

describe('Calculator', function() {
  describe('#add', function() {
    it('adds two numbers together', function() {
      var actual = Calculator.add(3,4)
      var expeted = 7
      assert.equal(actual, expeted, "Adding 3 + 4 should give 7")
    })
  })
});
