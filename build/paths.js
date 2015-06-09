var source = 'src/';
var output = 'dist/'

module.exports = {
  root: source,
  js: source + '**/*.js',
  html: source + '**/*.html',
  less: source + '**/*.less',
  output: output,
  indexHtml: './index.html',
  e2eSpecsSrc: 'e2e/src/*.js',
  e2eSpecsDist: 'e2e/dist/'
};
