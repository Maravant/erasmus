'use strict';

var gulp = require('gulp');

gulp.task('css', function () {
    var postcss    = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');
    var cssnano = require('gulp-cssnano');

    return gulp.src('import.css')
        .pipe( sourcemaps.init() )
        .pipe( postcss([ require('precss'), require('autoprefixer') ]) )
        .pipe( cssnano() )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('build/') );
});
