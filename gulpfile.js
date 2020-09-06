'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', () => {
  return gulp.src('./app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./app'));
});