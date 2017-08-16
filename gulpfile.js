var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var wrap = require("gulp-wrap");

gulp.task('concat', function() {
  return gulp.src([
        './src/util.js',
        './src/convert.js',
        './src/refactor.js'
    ])
    .pipe(concat('json-refactor.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('wrap', ['concat'], function() {
  return gulp.src('./dist/json-refactor.js')
      .pipe(wrap('(function( self ) {\n <%= contents %> \n})( this );'))
      .pipe(gulp.dest("./dist"));
});

gulp.task('mini', ['wrap'], function() {
  return gulp.src('./dist/json-refactor.js')
      .pipe(uglify())
      .pipe(rename('json-refactor.min.js'))
      .pipe(gulp.dest("./dist"));
});

gulp.task('default', ['mini']);