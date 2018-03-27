var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp.src('./src/stylesheet/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./assets/stylesheet/**/*.scss', ['sass'])
})
