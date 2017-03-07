"use strict";

var log = console.log;
//complete function, do something to make sure we find maximum array, print out max array


function  tryAlloc(size = Number.MAX_SAFE_INTEGER) {

  var success = false;
  try {
    // var anArray = new Array(size);
    success = true;
  } catch(err) {
    log(err);
  } finally {
    log("log stuff");
  }
  return success;
}

function calculateMaxArraySize(array) {
  for (var i = 1; i < array.length; i++) {
    anArray+=i
  }
}
