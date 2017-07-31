var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('default', function() {
  return gulp.src('./json-refactor.js')
    .pipe(uglify())
    .pipe(rename("json-refactor.min.js"))
    .pipe(gulp.dest('./'));
});