'use strict';

const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");

module.exports = function (gulp) {

  gulp.task("default", function () {
    return gulp.src("src/app/**/*.es")
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(concat("app.js"))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist"));
  });

};
