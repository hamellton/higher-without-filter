var gulp = require('gulp');
// var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var gulpIf = require('gulp-if');

var config = {
  paths: {
    scss: './dev/scss/**/*.scss',
    html: './done/index.html'
  },
  output: {
    cssName: 'min.css',
    path: './done'
  },
  isDevelop: true
};

// gulp.task('scss', function(){
//   return gulp.src(config.paths.scss)
//     .pipe(gulpIf(config.isDevelop, sourcemaps.init()))
//     .pipe(sass())
//     .pipe(concat(config.output.cssName))
//     .pipe(autoprefixer())
//         .pipe(gulpIf(!config.isDevelop, cleanCss()))
//     .pipe(gulpIf(config.isDevelop, sourcemaps.write()))
//     .pipe(gulp.dest(config.output.path))
//     .pipe(browserSync.stream());
//
// });
gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: config.output.path
    }
  });
  // gulp.watch(config.paths.scss, ['scss']);
  gulp.watch(config.paths.html).on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('serve'));
