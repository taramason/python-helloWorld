"use strict";

// var fs = require('fs')
//
// //read a file
// var hold = fs.readFile(process.argv[2]).toString();
// var count = hold.split('\n');
// //print number of new lines (\n) to the console
// console.log(count.length -1);




// // //--->Number 5 filtered ls
// const dir = process.argv[2];
// const ext = '.' + process.argv[3];
// // console.log(`directory:${dir} extension:${ext}`);
//
// const fs = require('fs');
// const path = require('path');
//
// fs.readdir(dir, (err, list) => {
//
//   if (err) {
//     console.log('Whoops');
//     return;
//   }
//
//   list.forEach((item) => {
//     if (path.extname(item) === ext) {
//       console.log(item);
//     }
//   });
// });





//--->#6 filter module
// const dir = process.argv[2];
// const ext =process.argv[3];
// // console.log(`directory:${dir} extension:${ext}`);
//
// const my_filter = require('./06-filter_module');
//
// my_filter(dir, ext, callback_fn);
//
// function callback_fn(err, data) {
//   if (err) {
//     console.log("whoops");
//     return;
//   }
//   data.forEach( (item) => {
//     console.log(item);
//   });
// }
