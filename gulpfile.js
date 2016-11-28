// require('dotenv').config();
var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync'),
  mainSync = browserSync.create(),
  testSync = browserSync.create(),
  run = require('gulp-run');
  


gulp.task('watch', function() {
  gulp.watch(['js/**/*.js', 'src/**/*.js', 'src/**/*.css', 'src/**/*.html', 'gulpfile.js'], mainSync.reload);
  gulp.watch(['jasmine/**/*.js', 'src/**/*.js'], testSync.reload);
	
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

gulp.task('test', () => {
  run('node_modules/karma/bin/karma start karma.conf.js --single-run').exec();
});


gulp.task('default', [ 'serve', 'watch', 'serveTest']);
