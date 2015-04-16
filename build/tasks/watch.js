var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

/**
 * This task wil watch for changes
 * to js, html, and less files and call the
 * reportChange method. Also, by depending on the
 * serve task, it will instantiate a browserSync session
 */
gulp.task('watch', ['lint', 'serve'], function() {
  gulp.watch(paths.source, browserSync.reload).on('change', reportChange);
  gulp.watch(paths.html, browserSync.reload).on('change', reportChange);
  gulp.watch(paths.less, 'inject').on('change', reportChange);
  gulp.watch(paths.outputCss, browserSync.reload);
});
