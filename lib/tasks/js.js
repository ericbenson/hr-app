module.exports = function($, gulp, paths){

  return {
    dev: function(){
      console.log(paths.client.js)
      var source = gulp.src(paths.client.js);
      var dest   = gulp.dest(paths.build.dir.js);

      return source
        .pipe( dest );
    },
    stage: function(){
      var source = gulp.src(paths.client.js);
      var dest   = gulp.dest(paths.build.dir.js);

      return source
        .pipe($.concat('app.min.js'))
        .pipe($.uglify())
        .pipe( dest );
    }
  };
};