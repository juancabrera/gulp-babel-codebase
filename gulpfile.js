'use strict';

var
  fs                 = require("fs"), 
  gulp               = require('gulp'),
  connect            = require('gulp-connect'),
  browserify         = require("browserify"), 
  babelify             = require("babelify")
;

gulp.task('babelify', function() {
  browserify('./source/js/main.js', { debug: false })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(fs.createWriteStream("./dist/js/main.js"));
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('watch', function() {
  gulp.watch('./source/js/*.js', ['babelify']);
});

gulp.task('default', ['connect', 'watch']);