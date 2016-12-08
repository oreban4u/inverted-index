const gulp = require('gulp');
const browserSync = require('browser-sync');
const run = require('gulp-run');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');

const mainSync = browserSync.create();
const testSync = browserSync.create();

gulp.task('copy', () => {
  gulp.src('src/inverted-index.js')
    .pipe(gulp.dest('jasmine'));
});

gulp.task('scripts', ['copy'], () => {
  gulp.src('jasmine/spec/inverted-index-test.js')
    .pipe(browserify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('jasmine'));
});


gulp.task('watch', () => {
  gulp.watch(
    [
      'js/**/*.js',
      'src/**/*.js',
      'src/**/*.css',
      'src/**/*.html',
      'gulpfile.js'
    ],
    mainSync.reload);
  gulp.watch(['jasmine/**/*.js', 'src/**/*.js'], testSync.reload);
  gulp.watch(
    [
      'src/inverted-index.js',
      'jasmine/spec/inverted-index-test.js'
    ],
    ['scripts']);
});

gulp.task('serve', () => {
  mainSync.init({
    server: {
      baseDir: './',
      index: 'src/index.html'
    },
    port: process.env.PORT || 4000,
    ui: false,
    ghostMode: false
  });
});

gulp.task('serveTest', () => {
  testSync.init({
    server: {
      baseDir: ['./src', './jasmine'],
      index: 'SpecRunner.html'
    },
    port: 8888,
    ui: false,
    ghostMode: false
  });
});

gulp.task('test', () => {
  run('node_modules/karma/bin/karma start karma.conf.js --single-run').exec();
});

gulp.task('default', ['serve', 'scripts', 'watch', 'serveTest']);
