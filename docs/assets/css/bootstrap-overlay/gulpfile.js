var gulp = require('gulp');
var nano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('default', function () {
  return gulp.src('./overlay-bootstrap.css')
    .pipe(rename('overlay-bootstrap.min.css'))
    .pipe(sourcemaps.init())
    .pipe(nano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./'));
});
