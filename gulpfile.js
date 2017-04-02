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

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');

  swPrecache.write('sw.js', {
    staticFileGlobs: [
      'https://code.jquery.com/jquery-3.1.1.slim.min.js',
      'build/*.{css,map}',
      'components/*.{css,map}',
      'elements/*.{css,map}',
      'generic/*.{css,map}',
      'images/*.{png,jpg,gif,svg}',
      'pages/*.{css,map}',
      'settings/*.{css,map}',
      'js/*.{js,html,css,png,jpg,gif,svg}',
      '*.{js,html,css,ico}'
    ]
  }, callback);
});
