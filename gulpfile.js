import gulp from "gulp";
import browsersync from "browser-sync";
import webpack from "webpack-stream";
import { deleteAsync } from "del";
import sass from "sass";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css";

function clean() {
  return deleteAsync(["./dist"]);
}

function copy() {
  return gulp.src("./src/img/*").pipe(gulp.dest("./dist/img"));
}

function browserSync(done) {
  browsersync.create().init({
    server: {
      baseDir: "./",
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
    .src("src/js/app.js")
    .pipe(
      webpack({
        mode: process.env.NODE_ENV || "development",
      })
    )
    .pipe(gulp.dest("dist/"))
    .pipe(browsersync.stream());
}

function css() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(gulpSass(sass)({ includePaths: ["node_modules"] }))
    .pipe(cleanCss({ compatibility: "ie8" }))
    .pipe(gulp.dest("./dist/"))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch("./index.html", gulp.series(browserSyncReload));
  gulp.watch("./src/img/**/*", gulp.series(copy));
  gulp.watch("./src/scss/**/*", gulp.series(css));
  gulp.watch("./src/js/**/*", gulp.series(javascript));
}

export const watch = gulp.series(
  clean,
  gulp.parallel(copy, css, javascript),
  gulp.parallel(watchFiles, browserSync)
);

export default gulp.series(clean, gulp.parallel(copy, css, javascript));
