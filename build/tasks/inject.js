var gulp = require('gulp');
var paths = require('../paths');
var inject = require('gulp-inject');
var order = require('gulp-order');

gulp.task('inject', ['less'], function() {
  var sources = gulp.src(paths.cssOutput, {read: false})
   .pipe(order([
     '**/reset.css',
     '**/main.css',
     '**/*.css'
   ], {base: '.'}));

  return gulp.src(paths.indexHtml)
    .pipe(inject(sources, {relative : true}))
    .pipe(gulp.dest('./'));
});
