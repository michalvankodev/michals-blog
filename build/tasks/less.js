var gulp = require('gulp');
var less = require('gulp-less');
var paths = require('../paths');
var rename = require('gulp-rename');

// Compile less files into CSS
gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.root));
});
