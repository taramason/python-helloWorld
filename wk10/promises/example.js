"use strict";

let orderPromise = new Promise( function (resolve, reject) {
  //order burger
  console.log("Ordered burger.");
  //cashier makes burger
  //cashier tells you promise has been met
  resolve("burger");
});

orderPromise.then (
  function success(food) {
    console.log("Eat", food); //can chain more .then statements.  Every .then can be wrapped in a new promise
  }
).catch (
  function on_error(why) {
    console.log("Sorry: ", why);
  }
);
