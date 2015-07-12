'use strict';

var pkg = require('./package.json'),
  gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  connect = require('gulp-connect'),
  browserify = require('gulp-browserify'),
  debowerify = require('debowerify'),
  del = require('del'),
  through = require('through'),
  path = require('path');

gulp.task('js', ['clean:js'], function() {
  return gulp.src('public/js/main.js')
    .pipe(plumber())
    .pipe(through())
    .pipe(browserify({ transform: ['debowerify'] }))
    .pipe(rename('build.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(connect.reload());
});


gulp.task('css', ['clean:css'], function() {
  return gulp.src('public/css/main.css')
    .pipe(connect.reload());
});


gulp.task('clean:js', function(done) {
  del('public/js/build.js', done);
});

gulp.task('clean:css', function(done) {
  del('public/js/build.css', done);
});

gulp.task('connect', ['build'], function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('**/*.html', ['html']);
  gulp.watch('css/**/*.css', ['css']);
  gulp.watch('img/**/*', ['images']);
  gulp.watch([
    'js/**/*.js',
    'bespoke-theme-*/dist/*.js' // Allow themes to be developed in parallel
  ], ['js']);
});


gulp.task('build', ['js', 'css']);

gulp.task('serve', ['open', 'watch']);

gulp.task('default', ['build']);
