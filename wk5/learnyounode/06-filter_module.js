"use strict";

const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, callback) {
  //get the files, and pass them to the callback function
  ext = '.' + ext;

  fs.readdir(dir, (err, list) => {
    //whoops, there was an eerror, let the callback handle it
  if (err) {
    callback(err, null);
    return;
  }

  //lets filter the data an pass it to the callback
  let result = [];
  list.forEach( (item) => {
    if (path.extname(item) === ext) {
      result.push(item);
    }
  });

  callback(null, result);
});
};
