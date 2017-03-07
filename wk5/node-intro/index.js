

const Path = require('path');  //think of require as a script tag in html
const OS = require('os');
const Chalk = require("chalk");

const yellow = Chalk.yellow;
const arch = OS.arch();
const platform = OS.platform();
console.log('My first Node program');
console.log(yellow(`Running on ${arch}`));
