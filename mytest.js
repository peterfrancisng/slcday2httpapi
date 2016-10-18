'use strict'

var chai = require('chai');
var assert = chai.assert;

var mylib = require('./lib/wordcount.js');

describe("Test that the string counts for an array are computed properly", function() {

     it("should return -1 if a negative number is supplied", function() {
    assert(mylib.wordcount(-10)== -1);
  });
  
  it("should return -1 if a string is supplied", function() {
    assert(mylib.wordcount("stringValue") == -1);
  });

  it("should return 0 when n supplied is 1", function() {
    assert(mylib.wordcount(1) == 0);
  });




});