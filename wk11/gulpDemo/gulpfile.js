const gulp = require("gulp");
const shelljs = require("shelljs");
const chalk = require("chalk");

const log = console.log;

//const shelljs = require("shelljs");

gulp.task("default", function(){
    log("Welcome to your first build tool");
});

gulp.task("help", function(){
    log("Use run this gulp project by typing\n\ngulp TASKNAME\n\n");
});

gulp.task("info", function(){
    log("This is a simple gulp task\nIt does one thing");
});


gulp.task("build", ["info"],function(){
    log("Your work goes here");
    log("This is currently setup as a COMPOUND task. It runs the info task first.");
    gulp.src("./src/*/*.js").pipe(gulp.dest("./build/"));
});


gulp.task("clean", function(){
    log("Cleaning project");
    log(chalk.bgRed("Deleting build files"));
    shelljs.rm("-rdf","./build");
});


gulp.task("optimize-assets", function(){

});
