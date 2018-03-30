var gulp = require('gulp')
var sass = require('gulp-sass')
var sassLint = require('gulp-sass-lint')

gulp.task('default', function () {
  return gulp.src('./src/assets/stylesheets/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})

gulp.task('lint', function () {
  return gulp.src('./src/assets/stylesheets/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})

gulp.task('sass', function () {
  return gulp.src('./src/assets/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/stylesheets/**/*.scss', ['sass'])
})
