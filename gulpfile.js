const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const webpack = require('webpack-stream');
const del = require('del');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');

function clean() {
  return del(['./dist']);
}

function copy() {
  return gulp.src('./src/img/*').pipe(gulp.dest('./dist/img'));
}

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './',
    },
    port: 3000,
  });

  done();
}

function browserSyncReload(done) {
  browsersync.reload();

  done();
}

function javascript() {
  return gulp
    .src('src/js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'))
    .pipe(browsersync.stream());
}

function css() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass({includePaths: ['node_modules']}))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/'))
    .pipe(browsersync.stream());
}

function watch() {
  gulp.watch('./src/img/**/*', gulp.series(copy));
  gulp.watch('./src/scss/**/*', gulp.series(css));
  gulp.watch('./src/js/**/*', gulp.series(javascript));
}

exports.watch = gulp.series(
  clean,
  gulp.parallel(copy, css, javascript),
  gulp.parallel(watch, browserSync),
);

exports.default = gulp.series(clean, gulp.parallel(copy, css, javascript));
