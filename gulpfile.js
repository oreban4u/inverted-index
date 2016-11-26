// require('dotenv').config();
var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync'),
  mainSync = browserSync.create(),
  testSync = browserSync.create();
  


gulp.task('watch', function() {
  gulp.watch(['js/**/*.js', 'src/**/*.js', 'src/**/*.css', 'src/**/*.html', 'gulpfile.js'], mainSync.reload);
  gulp.watch('jasmine/spec/*.js', testSync.reload);
	
});

gulp.task('serve', function() {
  mainSync.init({
    server: {
      baseDir: './',
      index:"src/index.html"
    },
    port:4000,
    ui: false
  })  
});

gulp.task('serveTest', function() {
  testSync.init({
    server: {
      baseDir: './jasmine',
      index:"SpecRunner.html"
    },
    port:8888,
    ui: false
  })
});


gulp.task('default', [ 'serve', 'watch', 'serveTest']);
