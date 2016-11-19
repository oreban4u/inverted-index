// require('dotenv').config();
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');
    port = 4000;


gulp.task('watch', function() {
	gulp.watch(['js/**/*.js', 'src/**/*.js','src/**/*.css','src/**/*.html'], browserSync.reload);
	

 })

gulp.task('serve', function(){
    browserSync.init({
    server: {
      baseDir: './',
      index:"src/index.html"
    }
});
});

gulp.task('default', ['serve', 'watch']);