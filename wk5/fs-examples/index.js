"use strict";
const fs = require("fs");
const path = require("path");
const os = require("os");

// var myFile = "/etc/Matt";

//synchronous read file: (Dont use!!)
// const paths = fs.readFileSync("/etc/paths", "utf8");

const inputFile = path.join(os.homedir(), "Documents", "networkmap-twopi.gov")

//async readFile:
fs.readFile("/etc/paths","utf8", (err, data)=> {  //fat arrow also means: function(err, data){}
  if(err) {
    throw err; // throw means continue throwing error at stack.
  }
  console.log(data);

  var lines = data.split("\n");

  lines.forEach((val,idx)=> {
    if ((idx+2) % 3 === 0 ) {
      console.log(val);
    }
  });
});
