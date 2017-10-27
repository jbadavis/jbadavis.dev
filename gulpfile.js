'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var gulpWebpack = require('gulp-webpack');
var watch = require('gulp-watch');

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var browserSync = require('browser-sync').create();

var swallowError = function(e) {
  gutil.log(e.toString());
  gutil.beep();

  this.emit('end');
};

gulp.task('copy', function() {
  return gulp.src('./src/images/')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
  var processors = [
    autoprefixer,
    cssnano
  ];

  return gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error', swallowError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('webpack:prod', function () {
  return gulp.src('./src/js/app.js')
    .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('js-watch', ['webpack:prod'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('default', ['copy', 'sass', 'webpack:prod']);

gulp.task('dev', ['default'], function() {
  browserSync.init({ server: { baseDir: "./" } });

  gulp.watch(['src/scss/**/*'], ['sass']);
  gulp.watch(['src/js/**/*'], ['js-watch']);

  gulp.watch("**/*.html").on('change', browserSync.reload);
});
