var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('minify-css', function() {
  return gulp.src('assests/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assests/css'));
});

gulp.task('uglify-js', function() {
  return gulp.src('assests/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assests/js'));
});

gulp.task('default', gulp.parallel('minify-css', 'uglify-js'));
