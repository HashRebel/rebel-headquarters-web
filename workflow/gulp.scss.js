var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp.src('./src/assets/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/stylesheets/**/*.scss', ['sass'])
})
