var paths  = require('../../paths.json');
var gulp   = require('gulp');
var $      = require('gulp-load-plugins')({lazy:false});

module.exports = {
  js     : require('./js'     )($, gulp, paths),
  css    : require('./css'    )($, gulp, paths),
  styl   : require('./styl'   )($, gulp, paths),
  html   : require('./html'   )($, gulp, paths),
  jade   : require('./jade'   )($, gulp, paths),
  server : require('./server' )($, gulp, paths),
  watch  : require('./watch'  )($, gulp, paths),
  vendor : require('./vendor' )($, gulp, paths),
  inject : require('./inject' )($, gulp, paths),
}


