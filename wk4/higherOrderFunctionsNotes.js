"use strict";

var fruits = ["apple", "jackfruit", "strawberry", "starfruit"];
var numbers = [2, 4, 6, 8];
//HIGHER ORDER FUNCTION: is a function that either takes a function as an argument or returns a function


// FOR EACH:
fruits.forEach(function(f, i, a){  // Is like a for loop. have to pass in f(element, represents each element in array) and i(index) to get a(array)
  console.log(f + "is the" + i + "index" + a);
});

for (var i = 0; i < fruits.length; i++){  //*Can't use break to get out of the cycle (like below)
  if (fruits[i] === "pear") {
    return;
  }
  console.log(fruits[i]);
}
// MAP : Maps the current array to a new set of values based on a rule that you give it. Goes through every element in array and builds new array based on action for each thing looping through
var newFruits = fruits.map(function(fruit){
  return fruit[0];
});

console.log(newFruits);

var squared = numbers.map(function(number){  //number represents each element in the array) (can also take i and array, like for Each)
  return number * number; //(or could do: return Math.pow(number,2) )
}

//write a map function that maps each number "times" the next highest index after it.
var new_number = numbers.map(function(num, i, a){
  if (i === a.length-1) {
    return num * a[0];
  } else {
    return num * a[i+1];
  }

});


// FILTER: returns what you want to keep in the array
//function to keep only fruits that DONT BEGIN with "s"
var noahsArk = fruits.filter(function(f, i, a){
  return f[0] !== "s"; //must evaluate to TRUE to keep the element
});
console.log(noahsArk);


//MORE FILTER:

function findGreater(arr, limiter) {
  finalArray = [ ];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > limiter) {
    finalArray.push(arr[i]);
    }
  }
  return finalArray;
}

var arr = [1,2,3,4,5,6,7,8];
var limiter = 5;

findGreater(arr, limiter);

function greaterThan(arr, limiter) {
  return arr.filter(function(item){
    return item > limiter
  })
}

greaterThan(arr, limiter);

//Can also use fat arrow function??:    =>


--------------

// REDUCE: starts w the second number in the array, it is the current,
//then does something with the next and does this to the whole array until gets to end.
// Will return one value instead of whole array
// function to tally up all numbers

var numbers = [1, 2, 3, 4];
var newNumbers = numbers.reduce(function(previous, current){ //previous is the 1st element (unless pass in optional, look up if want to know how)
  return previous + current;
});

console.log(newNumbers);

var colors = [ "red", "blue", "red", "yellow", "blue", "purple"];
var new_colors = colors.reduce(function(prev, curr){
  if (prev[curr]) {
    prev[curr]+=1;
  } else {
    prev[curr] = 1;
  }
  return prev;
}, {}); //that {} in that place sets the previous to an empty array. (can do this with a number too)

console.log(new_colors);

//map, filter, and reduce all return a new array (with some exceptions for reduce)
