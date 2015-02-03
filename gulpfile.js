'use strict';

var
  fs                 = require("fs"), 
  gulp               = require('gulp'),
  connect            = require('gulp-connect'),
  browserify         = require("browserify"), 
  to5ify             = require("6to5ify")
;

gulp.task('to5ify', function() {
  browserify('./source/js/main.js', { debug: false })
    .transform(to5ify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(fs.createWriteStream("./dist/js/main.js"));
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('watch', function() {
  gulp.watch('./source/js/*.js', ['to5ify']);
});

gulp.task('default', ['connect', 'watch']);