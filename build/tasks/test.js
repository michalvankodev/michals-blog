var gulp = require('gulp');
var karma = require('karma').server;

/**
 * Test client front end js files (Unit tests)
 */

// Run once
gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  }, function(e) {
    done();
  });
});

// Watch for file changes and re-run tests on each change
gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/../../karma.conf.js'
  }, function(e) {
    done();
  });
});
